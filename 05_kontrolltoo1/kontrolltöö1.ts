class Punkt {
    private x: number;
    private y: number;
    private muutujateArv: number;

    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
        this.muutujateArv = 2; 
    }

    getX(): number {
        return this.x;
    }

    getY(): number {
        return this.y;
    }

    teatamaks(): number {  //tagastame muutujate arvu klassis
        return this.muutujateArv;
    }
}

class Maatükk {
    private punktid: Map<string, Punkt>;
    private piiriPikkus: number = 0;
    private naabrid: Map<Maatükk, number>;
    private omanik: string;


    constructor(omanik: string) {
        this.omanik = omanik;
        this.punktid = new Map();
        this.naabrid = new Map();
    }

    lisaPunkt(x: number, y: number): void {
        this.punktid.set(`${x},${y}`, new Punkt(x, y));
        this.piiriPikkus = this.piiriPikkus + 1;
    }

    leiaPiiriPikkus(): number {  //tagastame maatüki piiri pikkuse 
        return this.piiriPikkus;
    }

    lisaNaaber(naaber: Maatükk, ühinePiiripikkus: number): void {
        this.naabrid.set(naaber, ühinePiiripikkus);
    }

    naabermaatükkideOmanikeNimed(): string[] { //tagastame naabermaatükkide omanike nimed, mis on sorteeritud nende ühise piiripikkuse järgi
    return [...this.naabrid.entries()]
        .sort((a, b) => a[1] - b[1])
        .map(([maatükk, _]) => maatükk.leiaOmanik());
}

    leiaOmanik(): string {
        return this.omanik;
    }
}

let punkt1 = new Punkt(2, 6);
console.log("Punkti 1 muutujate arv:", punkt1.teatamaks()); 
let punkt2 = new Punkt(4, 8);
console.log("Punkti 2 muutujate arv:", punkt2.teatamaks());


let maatükk1 = new Maatükk("Omanik 1");
maatükk1.lisaPunkt(0, 0);
maatükk1.lisaPunkt(0, 1);
maatükk1.lisaPunkt(1, 1);
maatükk1.lisaPunkt(1, 0);

let maatükk2 = new Maatükk("Omanik 2");
maatükk2.lisaPunkt(1, 0);
maatükk2.lisaPunkt(1, 1);
maatükk2.lisaPunkt(2, 1);
maatükk2.lisaPunkt(2, 0);

let maatükk3 = new Maatükk("Omanik 3");
maatükk3.lisaPunkt(0, 1);
maatükk3.lisaPunkt(0, 2);
maatükk3.lisaPunkt(1, 2);
maatükk3.lisaPunkt(1, 1);

maatükk1.lisaNaaber(maatükk2, 1);
maatükk1.lisaNaaber(maatükk3, 2);

console.log("Maatüki 1 omanik:", maatükk1.leiaOmanik());
console.log("Maatüki 1 piiri pikkus:", maatükk1.leiaPiiriPikkus());
console.log("Naabermaatükkide omanike nimed reastatuna ühise piiri pikkuse järgi:", maatükk1.naabermaatükkideOmanikeNimed());
