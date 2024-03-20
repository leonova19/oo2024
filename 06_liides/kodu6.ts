interface Adder{
   arvutaPindala(nr: number):number;
   arvutaÜmbermõõt():number;
}

class Ristkülik implements Adder{ 
    private pikkus: number;
    private laius: number;

    constructor(pikkus: number, laius: number) {
        this.pikkus = pikkus;
        this.laius = laius;
    }

    arvutaPindala(): number {
        return this.pikkus * this.laius;
    }

    arvutaÜmbermõõt(): number {
        return 2 * (this.pikkus + this.laius);
    }
}


const ristkülik = new Ristkülik(5, 4);
console.log("Ristküliku pindala:", ristkülik.arvutaPindala());
console.log("Ristküliku ümbermõõt:", ristkülik.arvutaÜmbermõõt());

