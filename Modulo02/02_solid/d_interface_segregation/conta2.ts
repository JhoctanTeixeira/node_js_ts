import { OperacaoCredito } from "./interfaces/operacaocredito";
import { OperacaoDebito } from "./interfaces/operacaodebito";

export class ContaCorrente implements OperacaoCredito, OperacaoDebito {
    
    constructor() {
        this._saldo = 0;
    }
    
    private _saldo : number;
    public get saldo() : number {
        return this._saldo;
    }
    private set saldo(v : number) {
        this._saldo = v;
    }
    efetuarSaque(valor: number): void {
        this.saldo -= valor;
    }
    efetuarDeposito(valor: number): void {
        this.saldo += valor;
    }
    
}