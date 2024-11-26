"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DocumentoCNPJ = void 0;
class DocumentoCNPJ {
    constructor(_doc) {
        this._documento = '';
        this.documento = _doc;
    }
    set documento(v) {
        let validCNPJ = /^[0-9]{14}/;
        if (!validCNPJ.test(v)) {
            throw new Error("O CNPJ deve ter 14 caracteres numéricos");
        }
        this._documento = v;
    }
    get documento() {
        return this._documento;
    }
    toString() {
        return `CNPJ: ${this.documento}`;
    }
}
exports.DocumentoCNPJ = DocumentoCNPJ;
