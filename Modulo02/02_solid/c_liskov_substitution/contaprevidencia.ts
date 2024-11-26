import { Credito } from "./interfaces/credito";

export class ContaPrevidencia implements Credito{

    constructor() {
        this._saldo = 0;
    }
    efetuarDeposito(valor: number): void {
        this.saldo += valor;
    }

    private _saldo : number;
    public get saldo() : number {
        return this._saldo;
    }
    public set saldo(v : number) {
        this._saldo = v;
    }
}