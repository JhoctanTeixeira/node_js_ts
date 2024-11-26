"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Prestador = void 0;
class Prestador {
    constructor(nome, sexo, documento) {
        this.nome = nome;
        this.sexo = sexo;
        this.documento = documento;
    }
    mostrarDados(titulo) {
        let resposta = `Nome: ${this.nome}\nSexo: ${this.sexo}\nDocumento: ${this.documento}`;
        if (titulo) {
            resposta = `${titulo}\n${resposta}`;
        }
        return resposta;
    }
}
exports.Prestador = Prestador;
