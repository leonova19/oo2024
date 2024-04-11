import { Calculator } from "../calculator";

let calcobj: Calculator = new Calculator();

beforeEach(() => {
  calcobj = new Calculator();
});

test("multiply 0", () => {
  calcobj.pressButton("3");
  calcobj.pressButton("X");
  expect(calcobj.getPanelContents()).toBe("3");
});

test("multiply 1", () => {
  calcobj.pressButton("3");
  calcobj.pressButton("X");
  calcobj.pressButton("2");
  expect(calcobj.getPanelContents()).toBe("2");
});

test("multiply 2", () => {
  calcobj.pressButton("3");
  calcobj.pressButton("X");
  calcobj.pressButton("2");
  calcobj.pressButton("=");
  expect(calcobj.getPanelContents()).toBe("6");
});

test("addition1", () => {
    calcobj.pressButton("3");
    calcobj.pressButton("+");
    calcobj.pressButton("2");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContents()).toBe("5");
  });

  test("addition2", () => {
    calcobj.pressButton("10");
    calcobj.pressButton("+");
    calcobj.pressButton("10");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContents()).toBe("20");
  });

  test("deduction1", () => {
    calcobj.pressButton("10");
    calcobj.pressButton("-");
    calcobj.pressButton("10");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContents()).toBe("0");
  });

  test("deduction2", () => {
    calcobj.pressButton("15");
    calcobj.pressButton("-");
    calcobj.pressButton("10");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContents()).toBe("5");
  });

  test("division", () => {
    calcobj.pressButton("15");
    calcobj.pressButton("/");
    calcobj.pressButton("3");
    calcobj.pressButton("=");
    expect(calcobj.getPanelContents()).toBe("5");
  });
