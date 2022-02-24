enum MATERIALS{
    GLASS = "Glass",
    PLASTIC = "Plastic",
    CERAMIC = "Ceramic"
}

interface Breakable{
    material: MATERIALS;
    break(): void;
}

class CeramicMug implements Breakable{
    material: MATERIALS;
    constructor() {
        this.material = MATERIALS.CERAMIC;
    }
    break(): void {
        console.log(`Broke a ${this.material} mug`);
    }

}

class PlasticMug implements Breakable{
    material: MATERIALS;
    constructor() {
        this.material=MATERIALS.PLASTIC;
    }
    break(): void {
        console.log(`Broke a ${this.material} mug`);
    }

}

class GlassMug implements Breakable{
    material: MATERIALS;
    constructor() {
        this.material = MATERIALS.GLASS;
    }
    break() {
        console.log(`Broke a ${this.material} mug`);
    }
}

let mugs = [new CeramicMug(), new PlasticMug(), new GlassMug()];

mugs.forEach(e => {
    e.break();

});

const found_glass = mugs.find(e => e.material === MATERIALS.GLASS)
found_glass.break();

const materialsMap = mugs.map(e => e.material);
console.log(materialsMap);