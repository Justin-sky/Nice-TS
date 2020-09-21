local function genCode(handler)
    local settings = handler.project:GetSettings("Publish").codeGeneration
    local codePkgName = handler:ToFilename(handler.pkg.name); --convert chinese to pinyin, remove special chars etc.
    local exportCodePath = handler.exportCodePath
    

    --CollectClasses(stripeMemeber, stripeClass, fguiNamespace)
    local classes = handler:CollectClasses(settings.ignoreNoname, settings.ignoreNoname, nil)
    local classCnt = classes.Count
    local writer = CodeWriter.new()

    writer:writeln('export class %sUI',codePkgName)
    writer:startBlock()
    writer:writeln('public static PackageName:string = "%s";', codePkgName)
    writer:writeln('public static PackageBytes:string = "%s_fui.bytes";', codePkgName)

    for i=0,classCnt-1 do
        local classInfo = classes[i]
        writer:writeln('public static UI%s:string = "%s";', classInfo.className, classInfo.className)
    end

    writer:endBlock() --class
    
    writer:save(exportCodePath..'/'..codePkgName..'.ts')
end

return genCode