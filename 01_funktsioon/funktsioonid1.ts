function korrutaKahega(arv:number){
  return arv*2;
}

console.log(korrutaKahega(7));

function kmi(pikkusm:number, masskg:number){
  return masskg/(pikkusm*pikkusm);
}

console.log(kmi(1.8, 100). toFixed(1))

function kmHinnang(indeks:number):string{
  if(indeks<16){return "Tervisele ohtlik alakaal"}
  if(indeks<18.5){return "Alakaak";}
  if(indeks<25){return "Normaalkaal";}
  if(indeks<30){return "Ülekaal";}
  if(indeks<35){return "Rasvumine";}
  if(indeks<40){return "Tugev rasvumine";}
  return "Tervisele ohtlik rasvumine"
}
console.log(kmHinnang(32))

let kmiArvud:number[]=[25, 18, 38, 28];
let hinnangud=kmiArvud.map(kmHinnang);
console.log(hinnangud);