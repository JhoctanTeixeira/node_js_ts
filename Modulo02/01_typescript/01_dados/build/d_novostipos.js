"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// exemplos de utilização
let nomes = ['Jose', 'Jorge', 'Amanda', 'Patricia'];
let buscarNome = item => item.startsWith('A');
function executar() {
    nomes.forEach(elemento => {
        if (buscarNome(elemento)) {
            console.log(`Nome encontrado: ${elemento}`);
        }
    });
}
let descricao = "Abordagem sobre tipos no Typescript"; // OK
let duracao = 10;
let disp = "Celular";
let casa = {
    area: 120, local: 'São Paulo', dispVenda: true
};
executar();
console.log(descricao);
console.log(duracao);
console.log(disp);
console.log(casa);
