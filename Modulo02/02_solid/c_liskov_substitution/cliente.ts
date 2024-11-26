import { Credito } from "./interfaces/credito";

export class Cliente {

    constructor(private tipoConta: Credito) {}

    public efetuarOperacao(valor: number) : void {
        this.tipoConta.efetuarDeposito(valor);
    }
}

/*
    Esse princípio diz que deve ser possivel substituir um objeto por outro 
    sem alterar o componente que o utiliza.
    Neste sentido, a interface informada como parâmetro deve fazer sentido:
*/