import { AreaPorComodo } from "./f_conjuntos";

// Considere uma lista de departamentos de uma empresa
let deptos: string[] = ["RH", "TI", "Financeiro", "Compras", "Vendas"];

// podemos abrir a lista em variaveis separadas
let [rh, ti, financeiro, compras, vendas] = deptos;

let [preco, ...resto] = [100, 200, 300, 400, 500];

console.log(rh);
console.log(preco, resto);

let [preco1, preco2] = [100, 200, 300, 400];

// pouco usado mas util na passagem de parametros

let [, preco3, , preco4] = [100, 200, 300, 400];


console.log(preco3, preco4);

let varanda: AreaPorComodo = ["varanda", 10];
let [comodo, area, ...outras] = varanda;

console.log(comodo, area, outras);