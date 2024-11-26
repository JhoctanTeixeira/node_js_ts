"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// listas simples: podem ser de quaisquer tipos, incluindo os tipos definidos
let casa1 = {
    area: 56, local: 'Taubaté', dispVenda: true
};
let casa2 = {
    area: 90, local: 'Jacareí', dispVenda: false
};
let casa3 = {
    area: 100, local: 'São Paulo', dispVenda: true
};
let imoveis = [casa1, casa2, casa3];
console.log(imoveis);
// tupla
// possuem como característica a estrutura fixa em relação aos arrays.
// Dependendo da utilização, elas podem ser confundidas com listas (arrays)
// Exemplo: tupla representando o codigo e a descrição de cursos.
let cursos = [100, ".NET Core"];
cursos.push(200, 'Java');
cursos.push('Azure DevOps');
console.log(cursos);
let c1 = cursos[0];
let d1 = cursos[1];
let c2 = cursos[cursos.length - 2];
let d2 = cursos[cursos.length - 1];
let cozinha = ['Cozinha', 20];
let comodos = [cozinha, ['Sala', 15], ['Banheiro', 8]];
console.log(comodos);
