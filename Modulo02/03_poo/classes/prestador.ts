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

  mostrarDados(): string;
  mostrarDados(titulo: string): string;
  mostrarDados(titulo?: string): string {
    let resposta = `Nome: ${this.nome}\nSexo: ${this.sexo}\nDocumento: ${this.doc}`;
    if (titulo) return `${titulo}\n\n${resposta}`;

    return resposta;
  }
}

export { Prestador };
