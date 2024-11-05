import { Sexo } from "../enum/sexo";
import { IDocumento } from "../interfaces/documento";
import { Cpf } from "./DocumentoCPF";

class Prestador {
  // private _nome: string;
  // private _email: string;
  // private _telefone: string;
  // private _cnpj: string;

  constructor(
    private nome: string,
    private sexo: Sexo,
    private doc: IDocumento
  ) {}

  async mostrarDados(): Promise<string>;
  async mostrarDados(titulo: string): Promise<string>;
  async mostrarDados(titulo?: string): Promise<string> {

    let resposta = `Nome: ${this.nome}\nSexo: ${
      this.sexo
    }\nDocumento: ${await this.doc}`;
    if (titulo) return `${titulo}\n\n${resposta}`;

    return resposta;
  }
}

export { Prestador };
