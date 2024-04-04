export function arvuta(arv1:number, arv2:number, operaator: string){
  if (operaator === "+"){
    return arv1 + arv2;
  }
  if (operaator === "-"){
    return arv1 - arv2;
  }
  if (operaator === "*"){
    return arv1 * arv2;
  }
  if (operaator === "/"){
    return arv1 / arv2;
  }
}
