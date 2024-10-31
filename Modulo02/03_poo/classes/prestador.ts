import { IDocumento } from "../interfaces/documento";

class Prestador {
  // private _nome: string;
  // private _email: string;
  // private _telefone: string;
  // private _cnpj: string;

  constructor(
    private nome: string,
    private email: string,
    private telefone: string,
    private doc: IDocumento
  ) {}

  mostrarDados(): string;
  mostrarDados(titulo: string): string;
  mostrarDados(titulo?: string): string {
    let resposta = `Nome: ${this.nome}\nEmail: ${this.email}\nTelefone ${this.telefone}\nDocumento: ${this.doc.documento}`;
    if (titulo) return `${titulo}\n\n${resposta}`;

    return resposta;
  }
}

console.log(new Prestador("José", "1@gmail.com", "11991823776", { documento: "12345678900" }).mostrarDados("Prestador"));

export { Prestador };
