type BufferSource = ArrayBufferView | ArrayBuffer;

interface TextDecodeOptions {
  stream?: boolean;
}

interface TextDecoderOptions {
  fatal?: boolean;
  ignoreBOM?: boolean;
}

interface TextEncoderEncodeIntoResult {
  read?: number;
  written?: number;
}

interface TextDecoderCommon {
  /**
   * Returns encoding's name, lowercased.
   */
  readonly encoding: string;
  /**
   * Returns true if error mode is "fatal", and false otherwise.
   */
  readonly fatal: boolean;
  /**
   * Returns true if ignore BOM flag is set, and false otherwise.
   */
  readonly ignoreBOM: boolean;
}

interface TextDecoder extends TextDecoderCommon {
  /**
   * Returns the result of running encoding's decoder. The method can be invoked zero or more times with options's stream set to true, and then once without options's stream (or set to false), to process a fragmented stream. If the invocation without options's stream (or set to false) has no input, it's clearest to omit both arguments.
   *
   * ```
   * var string = "", decoder = new TextDecoder(encoding), buffer;
   * while(buffer = next_chunk()) {
   *   string += decoder.decode(buffer, {stream:true});
   * }
   * string += decoder.decode(); // end-of-stream
   * ```
   *
   * If the error mode is "fatal" and encoding's decoder returns error, throws a TypeError.
   */
  decode(input?: BufferSource, options?: TextDecodeOptions): string;
}

declare var TextDecoder: {
  prototype: TextDecoder;
  new(label?: string, options?: TextDecoderOptions): TextDecoder;
};

interface TextEncoderCommon {
  /**
   * Returns "utf-8".
   */
  readonly encoding: string;
}

interface TextEncoder extends TextEncoderCommon {
  /**
   * Returns the result of running UTF-8's encoder.
   */
  encode(input?: string): Uint8Array;
  /**
   * Runs the UTF-8 encoder on source, stores the result of that operation into destination, and returns the progress made as a dictionary whereby read is the number of converted code units of source and written is the number of bytes modified in destination.
   */
  encodeInto(source: string, destination: Uint8Array): TextEncoderEncodeIntoResult;
}

declare var TextEncoder: {
  prototype: TextEncoder;
  new(): TextEncoder;
};