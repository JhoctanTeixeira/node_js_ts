import { IDocumento } from "../interfaces/documento";

class Cnpj implements IDocumento {
  constructor(private _documento: string) {
    this.documento = _documento;
  }

  set documento(d: string) {
    if (d.length !== 11)throw new Error("CPF inválido, deve conter 11 digitos");
    this._documento = d;
  }

  get documento(): string {
    return this._documento;
  }
}

console.log(new Cnpj("12345678900"));

export { Cnpj };
