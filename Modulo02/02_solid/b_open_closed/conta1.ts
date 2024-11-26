import { TipoOperacao } from "./tipo";

export class Conta {
    
    constructor(private _tipo : TipoOperacao) {
        this._saldo = 0;
    }
    
    public get tipo() : TipoOperacao {
        return this._tipo;
    }
        
    private _saldo : number;
    public get saldo() : number {
        return this._saldo;
    }
    public set saldo(v : number) {
        this._saldo = v;
    }
    
    public efetuarOperacao(valor: number) {
        if(this.tipo == TipoOperacao.Deposito){
            this.saldo += valor;
        } else if(this.tipo == TipoOperacao.Saque) {
            this.saldo -= valor;
        }
    }
}

/*
O princípio open/closed preconiza que seus elementos sejam abertos
para extensão, mas fechados para modificação. No exemplo,
se houver outra operação além de saque ou deposito, ou mesmo não permitir
saques a curto prazo.
será necessário acrescentar mais um comando if.
O correto é não alterar o comportamento, mas criar uma extensão
através de contratos, como é o caso de interfaces
*/