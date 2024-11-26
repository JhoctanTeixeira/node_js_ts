import { Utilitarios } from "../common/utils";
import { IDocumento } from "../interfaces/documento";

export class DocumentoCPF implements IDocumento {

    private _documento: string = '';

    constructor(_doc: string) {        
        this.documento = _doc;
    }

    set  documento(v: string) {
        try {            
            this.validar(v);
            this._documento = v;
            // (async () => {
            //     await this.validar(v);
            //     this._documento = v;
            // })();

        } catch (error) {
            throw new Error(error as string);
        }

    }
    
    get documento(): string {
        return this._documento;
    }

    async validar(cpf: string) {
        let b = await Utilitarios.validarCPF(cpf);
        if(b.status != 'OK') {
            throw new Error(b.message);
        }
    }

    // implementação de toString
    // public toString = () : string => {
    //     return `CPF: ${this.documento}`;
    // }
    toString() : string {
        return `CPF: ${this.documento}`;
    }
}