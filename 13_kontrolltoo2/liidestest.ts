import { Ruutvorrand } from '../liides';


test('x*x-8x+15=0', () => {
    let ruutvorrandObjekt = new Ruutvorrand(1, -8, 15);
    let lahendid = ruutvorrandObjekt.lahenda();
    expect(lahendid.x1).toBe(5);
    expect(lahendid.x2).toBe(3);
});

test('x*x-4x+4=0', () => {
    let ruutvorrandObjekt = new Ruutvorrand(1, -4, 4);
    let lahendid = ruutvorrandObjekt.lahenda();
    expect(lahendid.x1).toBe(2);
    expect(lahendid.x2).toBe(2);
});

test('x*x-4x+5=0', () => {
    let ruutvorrandObjekt = new Ruutvorrand(1, -4, 5);
    let lahendid = ruutvorrandObjekt.lahenda();
    expect(lahendid.x1).toBeNull();
    expect(lahendid.x2).toBeNull();
});
