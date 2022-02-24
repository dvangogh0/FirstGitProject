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
    constructor(){
        this.material = MATERIALS.CERAMIC;
    }
    break() {
        console.log("Broke s ${this.material} mug")
    }
}

class PlasticMug implements Breakable{
    material: MATERIALS ;
    constructor(){
        this.material = MATERIALS.PLASTIC;
    }
    break() {
        console.log("Broke s ${this.material} mug")
    }
}

class GlassMug implements Breakable{
    material: MATERIALS ;
    constructor(){
        this.material = MATERIALS.GLASS;
    }

    break() {

        console.log("Broke s ${this.material} mug")
    }


}



let items = [new CeramicMug(), new PlasticMug(), new GlassMug()];

items.forEach(e => {
    e.break();

});

const glassMug = items.find(e => e.material === MATERIALS.GLASS)
glassMug.break();

const materialsMap = items.map(e => e.material);
console.log(materialsMap);