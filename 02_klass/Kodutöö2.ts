class Toode{
  nimi: string;
  kategooria: string;
  hind: number;
  kogus: number;

  constructor(nimi: string, kategooria: string, hind: number, kogus: number){
    this.nimi = nimi;
    this.kategooria = kategooria;
    this.hind = hind;
    this.kogus = kogus;
  }

  lisaKogus(){
    this.kogus=this.kogus+1;
  }

  eemaldaKogus(){
    this.kogus= this.kogus-1;
  }

  kysiHind(kogus: number): number{
    return this.hind*kogus;
  }
  
  kokkuHind():number {
    return this.hind * this.kogus
  }
}

let toode1 = new Toode("Vorst", "Lihatooted", 2, 5);
let toode2 = new Toode("Piim", "Piimatooted", 1, 10);
toode1.lisaKogus();
console.log(toode1.kogus);
toode2.eemaldaKogus();
console.log(toode2.kogus);
console.log(toode1.kysiHind(5));
console.log(toode2.kokkuHind());
