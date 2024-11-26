import { Livro } from "./livro1";

export class Carrinho {
    public produtos: Livro[] = [];

    adicionar(livro: Livro) : void {
        this.produtos.push(livro);
    }
}

/*
O princípio inversão de dependência define que devemos inverter a
dependência mencionada na classe. Essa inversão é definida por uma interface ou classe abstrata.
Basicamente, devemos depender delas, e não de classes ou modelo.
*/