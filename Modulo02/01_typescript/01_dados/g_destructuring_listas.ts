import { AreaPorComodo } from "./f_conjuntos";

// considere uma lista de departamentos de uma empresa
let deptos: string[] = ['Contabilidade', 'Financeiro', 'Preços', 'Marketing'];

// podemos 'abrir' esta lista em quatro variáveis: destructuring
let [cont, fnc, pc, mkt] = deptos;

// podemos criar uma lista com o restante (rest) dos valores
let [preco, ...demaisPrecos] = [120, 90, 45, 32];
console.log(preco);
console.log(demaisPrecos);

// podemos obter partes da lista (util em passagem de parâmetros)
let [preco1, preco2] = [120, 90, 45, 32];

// embora pouco usado, também é útil na passagem de parâmetros
let [ ,preco3, , preco4] = [120, 90, 45, 32];

// podemos proceder com destructuring em tuplas
let varanda: AreaPorComodo = ['Varanda', 15];
let [comodo, area, ...outras] = varanda;

console.log(comodo);
console.log(area);
console.log(outras);
