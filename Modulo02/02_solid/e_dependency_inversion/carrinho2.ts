import { Produto } from "./interfaces/produto";

export class Carrinho {
    public produtos: Produto[] = [];

    adicionar(produto: Produto) : void {
        this.produtos.push(produto);
    }
}