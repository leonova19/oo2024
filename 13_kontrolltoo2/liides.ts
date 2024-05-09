interface RuutvorrandLahendused {
    x1: number | null;
    x2: number | null;
}

export class Ruutvorrand {
    a: number;
    b: number;
    c: number;

    constructor(a: number, b: number, c: number) {
        this.a = a;
        this.b = b;
        this.c = c;
    }

    lahenda(): RuutvorrandLahendused {
        let discriminant = this.b * this.b - 4 * this.a * this.c;
        if (discriminant > 0) {
            let x1 = (-this.b + Math.sqrt(discriminant)) / (2 * this.a);
            let x2 = (-this.b - Math.sqrt(discriminant)) / (2 * this.a);
            return { x1, x2 };
        } else if (discriminant === 0) {
            let x1 = -this.b / (2 * this.a);
            return { x1, x2: x1 };
        } else {
            return { x1: null, x2: null };
        }
    }
}

//tavaline kus x1 ja x2
let ruutvorrandObjekt = new Ruutvorrand(1, -6, 2);
let lahendid = ruutvorrandObjekt.lahenda();
console.log("x1:", lahendid.x1);
console.log("x2:", lahendid.x2);

// x1 = x2
ruutvorrandObjekt = new Ruutvorrand(1, -2, 1);
lahendid = ruutvorrandObjekt.lahenda();
console.log("x1:", lahendid.x1);
console.log("x2:", lahendid.x2);

//lahendid puuduvad 
ruutvorrandObjekt = new Ruutvorrand(1, 2, 3);
lahendid = ruutvorrandObjekt.lahenda();
console.log("x1:", lahendid.x1);
console.log("x2:", lahendid.x2);
