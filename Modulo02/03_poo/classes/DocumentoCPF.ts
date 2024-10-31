import { IDocumento } from "../interfaces/documento";

class Cpf implements IDocumento {
  constructor(private _documento: string) {
    this.documento = _documento;
  }

  set documento(d: string) {
    let validaCpf: RegExp = /^[0-9]{11}/;
    if (!validaCpf.test(d))
      throw new Error("CNPJ inválido, deve conter 11 digitos");
    this._documento = d;
  }

  get documento(): string {
    return this._documento;
  }

  // public toString = (): string => {
  //   return `CPF: ${this._documento}`;
  // };

  toString(): string {
    return `CPF: ${this._documento}`;
  }
}

export { Cpf };
