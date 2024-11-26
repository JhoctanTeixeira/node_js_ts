"use strict";
// os tipos genéricos são mais comumente usados em 
// estruturas envolvendo listas
Object.defineProperty(exports, "__esModule", { value: true });
function subLista(lista) {
    let sub = [];
    lista.forEach(item => {
        if (item.length > 5) { // isso descaracteriza o tipo genérico
            sub.push(item);
        }
    });
    return sub;
}
let nomes = ['Jose', 'Jaqueline', 'Ze', 'Osvaldo'];
let lista = subLista(nomes);
console.log(lista);
function subLista2(lista) {
    let sub = [];
    lista.forEach(item => {
        if (item.nome.length > 5) { // isso descaracteriza o tipo genérico
            sub.push(item);
        }
    });
    return sub;
}
// executando a função subLista2
let pessoas1 = [
    { nome: 'Jose', idade: 26 },
    { nome: 'Jaqueline', idade: 32 }
];
let lista1 = subLista2(pessoas1);
console.log(lista1);
let pessoas2 = [
    { nome: 'Ze', idade: 26, altura: 1.75 },
    { nome: 'Osvaldo', idade: 32, altura: 1.65 }
];
let lista2 = subLista2(pessoas2); // destructuring 
console.log(lista2);
let pessoas3 = [
    { nome: 'Alfredo', idade: 20 },
    { nome: 'Matt', idade: 40 }
];
let lista3 = subLista2(pessoas3);
console.log(lista3);
let pessoas4 = [
    { nome: 'Miguel', idade: 15, curso: 'Engenharia' },
    { nome: 'Ana', idade: 45, curso: 'Psicologia' },
];
let lista4 = subLista2(pessoas4);
console.log(lista4);
