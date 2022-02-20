enum MATERIAL {
    GLASS="glass",
    PLASTIC="plastic",
    CERAMIC="ceramic"
}

interface Breakable {
    material:MATERIAL,
    break: () => {}
}

class GlassMug implements Breakable{
    public material:MATERIAL.GLASS;
    constructor () {
    }
    break(): string {
        return "Material is Glass";
    }
}
class PlasticMug implements Breakable{
    public material: MATERIAL.PLASTIC;
    constructor() {
    }
    break(): string {
        return "Material is Plastic";
    }
}

class CeramicMug implements Breakable{
    public material: MATERIAL.CERAMIC;
    constructor() {
    }
    break(): string {
        return "Material is Ceramic";
    }
}

const glass = new GlassMug();
console.log(glass.break());

const plastic = new PlasticMug();
console.log(plastic.break());

const ceramic = new CeramicMug();
console.log(ceramic.break());

let materialsMugs = [glass, plastic,ceramic]

