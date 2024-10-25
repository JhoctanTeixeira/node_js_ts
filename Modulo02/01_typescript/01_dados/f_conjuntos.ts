import { imovel } from "./d_novostipos";

let casa1: imovel = {
  area: 56,
  local: "Taubate",
  dispVenda: true,
};
let casa2: imovel = {
  area: 90,
  local: "Jacarei",
  dispVenda: false,
};
let casa3: imovel = {
  area: 56,
  local: "Sao Paulo",
  dispVenda: true,
};

let imoveis: imovel[] = [casa1, casa2, casa3];

console.log(imoveis);

// tupla
// possuem como caracateristica a estrutura fixa em relacao aos arrays
// dependendo da utilizacao podem ser confudidas com listas (arrays)

let cursos: [number, string] = [1, "typescript"];
cursos.push(2, "javascript");

console.log(cursos);

let c1 = cursos[0];
let d1 = cursos[1];
let c2 = cursos[cursos.length - 2];
let d2 = cursos[cursos.length - 1];

//  ---------------------------
export { AreaPorComodo };
type AreaPorComodo = [string, number];
let cozinha: AreaPorComodo = ["cozinha", 12];

let comodos: AreaPorComodo[] = [cozinha, ["sala", 20], ["quarto", 15]];

console.log(comodos);
