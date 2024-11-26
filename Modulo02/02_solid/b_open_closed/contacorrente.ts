import { Credito } from "./interfaces/credito";
import { Debito } from "./interfaces/debito";

export class ContaCorrente implements Debito, Credito{

    constructor() {
        this._saldo = 0;
    }
    efetuarDeposito(valor: number): void {
        this.saldo += valor;
    }
    efetuarSaque(valor: number): void {
        this.saldo -= valor;
    }

    private _saldo : number;
    public get saldo() : number {
        return this._saldo;
    }
    public set saldo(v : number) {
        this._saldo = v;
    }
}