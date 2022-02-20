var MATERIAL;
(function (MATERIAL) {
    MATERIAL["GLASS"] = "glass";
    MATERIAL["PLASTIC"] = "plastic";
    MATERIAL["CERAMIC"] = "ceramic";
})(MATERIAL || (MATERIAL = {}));
var GlassMug = /** @class */ (function () {
    function GlassMug() {
    }
    GlassMug.prototype["break"] = function () {
        return "Material is Glass";
    };
    return GlassMug;
}());
var PlasticMug = /** @class */ (function () {
    function PlasticMug() {
    }
    PlasticMug.prototype["break"] = function () {
        return "Material is Plastic";
    };
    return PlasticMug;
}());
var CeramicMuc = /** @class */ (function () {
    function CeramicMuc() {
    }
    CeramicMuc.prototype["break"] = function () {
        return "Material is Ceramic";
    };
    return CeramicMuc;
}());
var glass = new GlassMug();
console.log(glass["break"]());
