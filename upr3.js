var MATERIALS;
(function (MATERIALS) {
    MATERIALS["GLASS"] = "Glass";
    MATERIALS["PLASTIC"] = "Plastic";
    MATERIALS["CERAMIC"] = "Ceramic";
})(MATERIALS || (MATERIALS = {}));
var CeramicMug = /** @class */ (function () {
    function CeramicMug() {
        this.material = MATERIALS.CERAMIC;
    }
    CeramicMug.prototype["break"] = function () {
        console.log("Broke a ".concat(this.material, " mug"));
    };
    return CeramicMug;
}());
var PlasticMug = /** @class */ (function () {
    function PlasticMug() {
        this.material = MATERIALS.PLASTIC;
    }
    PlasticMug.prototype["break"] = function () {
        console.log("Broke a ".concat(this.material, " mug"));
    };
    return PlasticMug;
}());
var GlassMug = /** @class */ (function () {
    function GlassMug() {
        this.material = MATERIALS.GLASS;
    }
    GlassMug.prototype["break"] = function () {
        console.log("Broke a ".concat(this.material, " mug"));
    };
    return GlassMug;
}());
var mugs = [new CeramicMug(), new PlasticMug(), new GlassMug()];
mugs.forEach(function (e) {
    e["break"]();
});
var found_glass = mugs.find(function (e) { return e.material === MATERIALS.GLASS; });
found_glass["break"]();
var materialsMap = mugs.map(function (e) { return e.material; });
console.log(materialsMap);
