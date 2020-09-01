local genCode = require(PluginPath..'/GenCode_CSharp')

function onPublish(handler)
    if not handler.genCode then return end
    handler.genCode = false --prevent default output

    fprint('Handling gen code in plugin')
    genCode(handler) --do it myself
end

function onDestroy()
-------do cleanup here-------
end