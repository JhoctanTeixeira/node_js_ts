import { IDocumento } from "../interfaces/documento";

export class DocumentoCNPJ implements IDocumento {

    private _documento: string = '';

    constructor(_doc: string) {        
        this.documento = _doc;
    }

    set documento(v: string) {
        let validCNPJ: RegExp = /^[0-9]{14}/
        if(!validCNPJ.test(v)){
            throw new Error("O CNPJ deve ter 14 caracteres numéricos");
        }
        this._documento = v;
    }
    
    get documento(): string {
        return this._documento;
    }
    toString() : string {
        return `CNPJ: ${this.documento}`;
    }    
}