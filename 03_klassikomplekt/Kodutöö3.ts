class Koduloom{
  private _nimi: string;
  private _tyyp: string;
  private _toug: string;
  private _synnipaev: Date;
  private _kaal: number;
  private _sugu: string;
  

  constructor(nimi: string, tyyp: string, toug: string,synnipaev: Date,kaal: number,sugu: string) {
        this._nimi = nimi;
        this._tyyp = tyyp;
        this._toug = toug;
        this._synnipaev = synnipaev;
        this._kaal = kaal;
        this._sugu = sugu;
        
    }

  get toug(): string {
    return this._toug;
  }

  vanus(): number{
    return new Date().getFullYear() - this._synnipaev.getFullYear();
  }
}
class Naitus{
  private _nimi: string;
  private _asukoht: Asukoht;
  private _kategooriad: Kategooria[] = [];
  private _aeg: Date;
  private _osalejad: Koduloom[] = [];

  constructor(nimi: string, asukoht: Asukoht, aeg: Date ) {
        this._nimi = nimi;
        this._asukoht = asukoht;
        this._aeg = aeg;
        
        
    }

  kokkuOsalejad(): number{
    return this._osalejad.length;
  }
  
  lisaKategooria(kategooria: Kategooria): void{
    this._kategooriad.push(kategooria)

  }
  lisaOsaleja(osaleja: Koduloom): void{
    this._osalejad.push(osaleja)
  }
}

class Kategooria {
  private _nimi: string;
  private _voitja: any;
  private _osalejad: Koduloom[] = [];

  constructor(nimi: string ) {
        this._nimi = nimi;    
    }

  get voitja(): Koduloom{
    return this._voitja;
  }

  set voitja(voitja: Koduloom) {
    this._voitja = voitja;
  }

  lisaOsaleja(osaleja: Koduloom): void{
    this._osalejad.push(osaleja)
  }
}


class Asukoht{
  private _nimi: string;
  private _aadress: string;

  constructor(nimi: string,aadress: string) {
        this._nimi = nimi;
        this._aadress = aadress;
        
    }
  
  get nimi(): string {
        return this._nimi;
    } 
}

let koduloom1 = new Koduloom("Rei", "Kass", "Meikun", new Date("06/29/2018 "), 10, "Mees");
let koduloom2 = new Koduloom("Raks", "Koer", "Spits", new Date("01/15/2022 "), 4, "Naine");
let asukoht1 = new Asukoht("Ülemiste", "Tallinn")
let naitus1 = new Naitus("Ilusad Loomad", asukoht1, new Date("10/20/2020"))
let kategooria1 = new Kategooria("Väike koer")
console.log(koduloom1.vanus());
console.log(koduloom1.toug);
naitus1.lisaOsaleja(koduloom1);
naitus1.lisaOsaleja(koduloom2);
console.log(naitus1.kokkuOsalejad());
naitus1.lisaKategooria(kategooria1);
kategooria1.lisaOsaleja(koduloom1);
kategooria1.voitja = koduloom1;
console.log(kategooria1.voitja);
console.log(asukoht1.nimi);
