using UnityEngine;
using UnityEditor;
using System;
using System.IO;
using System.Text;
using System.Text.RegularExpressions;
using Debug = UnityEngine.Debug;
using System.Collections;
using System.Collections.Generic;

namespace Ink.UnityIntegration {
	// Information about the current state of an ink file
	[System.Serializable]
	public class InkMetaFile {

		public DefaultAsset inkAsset;
		// Used for when the data gets lost.
		public string inkAssetPath;

		[System.NonSerialized]
		private InkFile _inkFile = null;
		public InkFile inkFile {
			get {
				if(_inkFile == null) 
					_inkFile = InkLibrary.GetInkFileWithFile(inkAsset);
				return _inkFile;
			}
		}

		// Fatal unhandled errors that should be reported as compiler bugs.
		public List<string> unhandledCompileErrors = new List<string>();
		public bool hasUnhandledCompileErrors {
			get {
				return unhandledCompileErrors.Count > 0;
			}
		}

		// Fatal errors caused by errors in the user's ink script.
		public List<InkCompilerLog> errors = new List<InkCompilerLog>();
		public bool hasErrors {
			get {
				return errors.Count > 0;
			}
		}

		public List<InkCompilerLog> warnings = new List<InkCompilerLog>();
		public bool hasWarnings {
			get {
				return warnings.Count > 0;
			}
		}

		public List<InkCompilerLog> todos = new List<InkCompilerLog>();
		public bool hasTodos {
			get {
				return todos.Count > 0;
			}
		}

		public bool requiresCompile {
			get {
				if(!isMaster) return false;
				return inkFile.jsonAsset == null || lastEditDate > lastCompileDate || hasUnhandledCompileErrors;
			}
		}

		/// <summary>
		/// Gets the last compile date of the story.
		/// </summary>
		/// <value>The last compile date of the story.</value>
		public DateTime lastCompileDate {
			get {
				if(isMaster) {
					string fullJSONFilePath = InkEditorUtils.UnityRelativeToAbsolutePath(AssetDatabase.GetAssetPath(inkFile.jsonAsset));
					return File.GetLastWriteTime(fullJSONFilePath);
				} else {
					return default(DateTime);
				}
			}
		}

		/// <summary>
		/// Gets the last edit date of the file.
		/// </summary>
		/// <value>The last edit date of the file.</value>
		public DateTime lastEditDate {
			get {
				return File.GetLastWriteTime(inkFile.absoluteFilePath);
			}
		}

		

		public InkMetaFile (InkFile inkFile) {
			_inkFile = inkFile;
			inkAsset = inkFile.inkAsset;
			ParseContent();
		}

		// File that contains this file as an include, if one exists.
		public List<DefaultAsset> parents;
		public IEnumerable<InkFile> parentInkFiles {
			get {
				if(parents != null && parents.Count != 0) {
					foreach(var parentInkAsset in parents) {
						yield return InkLibrary.GetInkFileWithFile(parentInkAsset);
					}
				}
			}
		}
		// Is this ink file a parent file?
		public bool isParent {
			get {
				return includes.Count > 0;
			}
		}

		public List<DefaultAsset> masterInkAssets;
		public IEnumerable<InkFile> masterInkFiles {
			get {
				if(masterInkAssets != null && masterInkAssets.Count != 0) {
					foreach(var masterInkAsset in masterInkAssets) {
						yield return InkLibrary.GetInkFileWithFile(masterInkAsset);
					}
				}
			}
		}
		public IEnumerable<InkFile> masterInkFilesIncludingSelf {
			get {
				if(isMaster) yield return inkFile;
				else {
					foreach(var masterInkFile in masterInkFiles) {
						yield return masterInkFile;
					}
				}
			}
		}
		public DefaultAsset masterInkAsset;

		// Is this ink file a master file?
		public bool isMaster {
			get {
				return masterInkAssets == null || masterInkAssets.Count == 0;
			}
		}
		

		// The files included by this file
		// We cache the paths of the files to be included for performance, giving us more freedom to refresh the actual includes list without needing to parse all the text.
		public List<string> includePaths = new List<string>();
		public List<DefaultAsset> includes = new List<DefaultAsset>();
		// The InkFiles of the includes of this file
		public List<InkFile> includesInkFiles {
			get {
				List<InkFile> _includesInkFiles = new List<InkFile>();
				foreach(var child in includes) {
					if(child == null) {
						Debug.LogError("Error compiling ink: Ink file include in "+inkFile.filePath+" is null.");
						continue;
					}
					_includesInkFiles.Add(InkLibrary.GetInkFileWithFile(child));
				}
				return _includesInkFiles;
			}
		}
		// The InkFiles in the include hierarchy of this file.
		public List<InkFile> inkFilesInIncludeHierarchy {
			get {
				List<InkFile> _inkFilesInIncludeHierarchy = new List<InkFile>();
				_inkFilesInIncludeHierarchy.Add(inkFile);
				foreach(var child in includesInkFiles) {
					if (child == null || child.metaInfo == null)
						return null;
					_inkFilesInIncludeHierarchy.AddRange(child.metaInfo.inkFilesInIncludeHierarchy);
				}
				return _inkFilesInIncludeHierarchy;
			}
		}

//		public string content;
		// The contents of the .ink file
		public string GetFileContents () {
			if(inkFile == null) {
				Debug.LogWarning("Ink file is null! Rebuild library using Assets > Rebuild Ink Library");
				return "";
            }
			if(inkFile.inkAsset == null) {
				Debug.LogWarning("Ink file asset is null! Rebuild library using Assets > Rebuild Ink Library");
				return "";
			}
			return File.ReadAllText(inkFile.absoluteFilePath);
		}

		public void ParseContent () {
			InkIncludeParser includeParser = new InkIncludeParser(GetFileContents());
			includePaths = includeParser.includeFilenames;
		}

		public void FindIncludedFiles () {
			includes.Clear();
			foreach(string includePath in includePaths) {
				string localIncludePath = InkEditorUtils.CombinePaths(Path.GetDirectoryName(inkFile.filePath), includePath);
				// This enables parsing ..\ and the like. Can we use Path.GetFullPath instead?
				var fullIncludePath = new FileInfo(localIncludePath).FullName;
				localIncludePath = InkEditorUtils.AbsoluteToUnityRelativePath(fullIncludePath);
				DefaultAsset includedInkFileAsset = AssetDatabase.LoadAssetAtPath<DefaultAsset>(localIncludePath);
				if(includedInkFileAsset == null) {
					Debug.LogError(inkFile.filePath+ " expected child .ink asset at '"+localIncludePath+"' but file was not found.");
				} else {
					InkFile includedInkFile = InkLibrary.GetInkFileWithFile(includedInkFileAsset);
					if(includedInkFile == null) {
						Debug.LogError(inkFile.filePath+ " expected child InkFile from .ink asset at '"+localIncludePath+"' but file was not found.");
					} else if (includedInkFile.metaInfo.includes.Contains(inkAsset)) {
						Debug.LogError("Circular INCLUDE reference between '"+inkFile.filePath+"' and '"+includedInkFile.metaInfo.inkFile.filePath+"'.");
					} else
						includes.Add(includedInkFileAsset);
				}
			}
		}

		public class InkIncludeParser {
	        public InkIncludeParser (string inkContents)
	        {
	            _text = inkContents;
	        }
	        void Process()
	        {
	            _text = EliminateComments (_text);
	            FindIncludes (_text);
	        }
	        string EliminateComments(string inkStr)
	        {
	            var sb = new StringBuilder ();
	            int idx = 0;
	            while(idx < inkStr.Length) {
	                var commentStarterIdx = inkStr.IndexOf ('/', idx);
	                // Final string?
	                if (commentStarterIdx == -1 || commentStarterIdx >= inkStr.Length-2 ) {
	                    sb.Append (inkStr.Substring (idx, inkStr.Length - idx));
	                    break;
	                }
	                sb.Append (inkStr.Substring (idx, commentStarterIdx - idx));
	                var commentStarter = inkStr.Substring (commentStarterIdx, 2);
	                if (commentStarter == "//" || commentStarter == "/*") {
	                    int endOfCommentIdx = -1;
	                    // Single line comments
	                    if (commentStarter == "//") {
	                        endOfCommentIdx = inkStr.IndexOf ('\n', commentStarterIdx);
	                        if (endOfCommentIdx == -1)
	                            endOfCommentIdx = inkStr.Length;
	                        else if (inkStr [endOfCommentIdx - 1] == '\r')
	                            endOfCommentIdx = endOfCommentIdx - 1;
	                    } 
	                    // Block comments
	                    else if (commentStarter == "/*") {
	                        endOfCommentIdx = inkStr.IndexOf ("*/", idx);
	                        if (endOfCommentIdx == -1)
	                            endOfCommentIdx = inkStr.Length;
	                        else
	                            endOfCommentIdx += 2;
	                        // If there are *any* newlines, we should add one in here,
	                        // so that lines are spit up correctly
	                        if (inkStr.IndexOf ('\n', commentStarterIdx, endOfCommentIdx - commentStarterIdx) != -1)
	                            sb.Append ("\n");
	                    }
	                    // Skip over comment
	                    if (endOfCommentIdx > -1)
	                        idx = endOfCommentIdx;
	                } 
	                // Normal slash we need, not a comment
	                else {
	                    sb.Append ("/");
	                    idx = commentStarterIdx + 1;
	                }
	            }
	            return sb.ToString ();
	        }
	        void FindIncludes(string str)
	        {
	            _includeFilenames = new List<string> ();
	            var includeRegex = new Regex (@"^\s*INCLUDE\s+([^\r\n]+)\r*$", RegexOptions.Multiline);
	            MatchCollection matches = includeRegex.Matches(str);
	            foreach (Match match in matches)
	            {
	                var capture = match.Groups [1].Captures [0];
	                _includeFilenames.Add (capture.Value);
	            }
	        }
	            
	        public List<string> includeFilenames {
	            get {
	                if (_includeFilenames == null) {
	                    Process ();
	                }
	                return _includeFilenames;
	            }
	        }
	        List<string> _includeFilenames;
	        string _text;
	    }
	}
}