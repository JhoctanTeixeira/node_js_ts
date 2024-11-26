import { Produto } from "./interfaces/produto";

export class Livro implements Produto {

    constructor(private _preco: number) {}

    obterPreco(): number {
        return this._preco;
    }

}