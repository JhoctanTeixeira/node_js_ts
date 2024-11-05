import { Utilitarios } from "../common/utils";
import { IDocumento } from "../interfaces/documento";

class Cpf implements IDocumento {
  constructor(private _documento: string) {
    this.documento = _documento;
  }

  set documento(d: string) {
    try {
      this.validar(d);
      this._documento = d;

      /* (async () => {
        await this.validar(d);
        this._documento = d;
      })(); */
      
    } catch (error) {
      throw new Error(error as string);
    }

    /*  let validaCpf: RegExp = /^[0-9]{11}/;
    if (!validaCpf.test(d))
      throw new Error("CNPJ inválido, deve conter 11 digitos");
    this._documento = d; */
  }

  get documento(): string {
    return this._documento;
  }

  async validar(cpf: string) {
    let b = await Utilitarios.validarCpf(cpf);
    if ("OK" != b.status) {
      throw new Error(b.message);
    }
  }

  // public toString = (): string => {
  //   return `CPF: ${this._documento}`;
  // };

  toString(): string {
    return `CPF: ${this._documento}`;
  }
}

export { Cpf };
