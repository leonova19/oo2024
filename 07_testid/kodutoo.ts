import {arvuta} from "../arvuta";

test("pluss",()=>{
    expect(arvuta(10,2,"+")).toBe(12);
});

test("miinus",()=>{
    expect(arvuta(10,2,"-")).toBe(8);
});

test("korrata",()=>{
    expect(arvuta(10,2,"*")).toBe(20);
});

test("jagamine",()=>{
    expect(arvuta(10,2,"/")).toBe(5);
});
