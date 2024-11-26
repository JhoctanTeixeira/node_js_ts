import { OperacoesConta } from "./interfaces/operacoesconta";

export class ContaCorrente implements OperacoesConta {

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
    calcularReajuste(): number {
        throw new Error("Method not implemented.");
    }
    mostrarSaldo(): number {
        throw new Error("Method not implemented.");
    }

}