import { Sexo } from "../enums/sexo";
import { IDocumento } from "../interfaces/documento";
import { Prestador } from "./prestador";

export class PrestadorAutonomo extends Prestador {

    
    //private _rpa : string = '';
    public get rpa() : string {
        return this._rpa;
    }
    public set rpa(v : string) {
        this._rpa = v;
    }
    
    constructor(
        private _nome: string, 
        private _sexo: Sexo, 
        private _doc: IDocumento, private _rpa: string) {

            super(_nome, _sexo, _doc);
            this.rpa = _rpa;
    }

    // polimorfismo
    override mostrarDados(titulo?: string): string {
        let resposta: string = super.mostrarDados(titulo as string) + `\nRPA: ${this.rpa}`;
        return resposta;
    }
}