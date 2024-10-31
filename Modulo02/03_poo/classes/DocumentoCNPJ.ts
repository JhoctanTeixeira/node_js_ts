import { IDocumento } from "../interfaces/documento";

class Cnpj implements IDocumento {
  constructor(private _documento: string) {
    this.documento = _documento;
  }

  set documento(d: string) {
    let validaCnpj: RegExp = /^[0-9]{14}/;
    if (!validaCnpj.test(d))
      throw new Error("CNPJ inválido, deve conter 14 digitos");
    this._documento = d;
  }

  get documento(): string {
    return this._documento;
  }
  toString(): string {
    return `CNPJ: ${this._documento}`;
  }
}

export { Cnpj };
