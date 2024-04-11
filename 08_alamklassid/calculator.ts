class Calculator {
  private operators: Array<string> = ["X", "+", "-", "/"];
  protected operator: string = "";
  protected panelContents: string = "";
  protected esimeneSisu: string = "";
  protected tyhjendada: boolean = false;
  pressButton(b: string): void {
    if (b == "C") {
      this.panelContents = "";
    } else if (this.operators.includes(b)) {
      this.operator = b;
      this.esimeneSisu = this.panelContents;
      //this.panelContents=""
      this.tyhjendada = true;
    } else if (b == "=") {
      if (this.operator == "+") {
        this.panelContents =
          parseInt(this.esimeneSisu) + parseInt(this.panelContents) + "";
      }
      if (this.operator == "-") {
        this.panelContents =
          parseInt(this.esimeneSisu) - parseInt(this.panelContents) + "";
      }
      if (this.operator == "X") {
        this.panelContents =
          parseInt(this.esimeneSisu) * parseInt(this.panelContents) + "";
      }
      if (this.operator == "/") {
        this.panelContents =
          parseInt(this.esimeneSisu) / parseInt(this.panelContents) + "";
      }
    } else {
      if (this.tyhjendada) {
        this.panelContents = b;
        this.tyhjendada = false;
      } else {
        this.panelContents += b;
      }
    }
  }

  getPanelContents(): string {
    if (this.panelContents.length > 0) {
      return this.panelContents;
    }
    return "0";
  }
}

export { Calculator };
