"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PrestadorAutonomo = void 0;
const prestador_1 = require("./prestador");
class PrestadorAutonomo extends prestador_1.Prestador {
    //private _rpa : string = '';
    get rpa() {
        return this._rpa;
    }
    set rpa(v) {
        this._rpa = v;
    }
    constructor(_nome, _sexo, _doc, _rpa) {
        super(_nome, _sexo, _doc);
        this._nome = _nome;
        this._sexo = _sexo;
        this._doc = _doc;
        this._rpa = _rpa;
        this.rpa = _rpa;
    }
    // polimorfismo
    mostrarDados(titulo) {
        let resposta = super.mostrarDados(titulo) + `\nRPA: ${this.rpa}`;
        return resposta;
    }
}
exports.PrestadorAutonomo = PrestadorAutonomo;
