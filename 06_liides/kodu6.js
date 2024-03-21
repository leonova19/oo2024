var Ristkülik = /** @class */ (function () {
    function Ristkülik(pikkus, laius) {
        this.pikkus = pikkus;
        this.laius = laius;
    }
    Ristkülik.prototype.arvutaPindala = function () {
        return this.pikkus * this.laius;
    };
    Ristkülik.prototype.arvutaÜmbermõõt = function () {
        return 2 * (this.pikkus + this.laius);
    };
    return Ristkülik;
}());

function arvuta() {
    var pikkus = parseFloat(document.getElementById('pikkusInput').value);
    var laius = parseFloat(document.getElementById('laiusInput').value);

    var ristkülik = new Ristkülik(pikkus, laius);

    var pindalaResult = document.getElementById('pindalaResult');
    var ümbermõõtResult = document.getElementById('ümbermõõtResult');

    pindalaResult.textContent = "Pindala: " + ristkülik.arvutaPindala();
    ümbermõõtResult.textContent = "Ümbermõõt: " + ristkülik.arvutaÜmbermõõt();
}

var ristkülik = new Ristkülik(5, 4);
console.log("Ristküliku pindala:", ristkülik.arvutaPindala());
console.log("Ristküliku ümbermõõt:", ristkülik.arvutaÜmbermõõt());
