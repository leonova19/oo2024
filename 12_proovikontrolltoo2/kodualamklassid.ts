class Loom {
  nimi: string;
  vanus: number;
  sugu: string;

  constructor(nimi: string, vanus: number, sugu: string) {
    this.nimi = nimi;
    this.vanus = vanus;
    this.sugu = sugu;
  }
}

class Koer extends Loom {
  tõug: string;

  constructor(nimi: string, vanus: number, sugu: string, tõug: string) {
    super(nimi, vanus, sugu);
    this.tõug = tõug;
    
  }

  vanuseJärgiInimvanuses(): number {
    return this.vanus * 7;
  }

 
}


class Kass extends Loom {
  tõug: string;

  constructor(nimi: string, vanus: number, sugu: string, tõug: string) {
    super(nimi, vanus, sugu);
    this.tõug = tõug;
  }

  vanuseJärgiInimvanuses(): number {
    return this.vanus * 7;
  }
}

const minuKoer = new Koer("Rex", 5, "mees", "Labrador");
console.log(`${minuKoer.nimi} on inimvanuses ${minuKoer.vanuseJärgiInimvanuses()} aastat.`);

const minuKass = new Kass("Krisi", 3, "naine", "Kodu-kass");
console.log(`${minuKass.nimi} on inimvanuses ${minuKass.vanuseJärgiInimvanuses()} aastat.`);
