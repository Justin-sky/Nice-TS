

const kFixedPrecise = 4;

function installJSExtends() {
    Number.prototype["fixed"] = function(): number {
        return +(this.toFixed(kFixedPrecise));
    }

    Number.prototype["trueMod"] = function(max: number): number {
        return ((this % max) + max) % max;
    }
}

installJSExtends();


