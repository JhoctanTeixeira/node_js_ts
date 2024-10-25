"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let nomes = ["Ana", "Bia", "Carlos", "Daniel"];
let buscarNome = (item) => item.startsWith("A");
function executar() {
    nomes.forEach((elemento) => {
        if (buscarNome(elemento)) {
            console.log(`Nome encontrado: ${elemento}`);
        }
    });
}
// let descricao
executar();
