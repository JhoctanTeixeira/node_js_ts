// uniões permitem dados com diferentes possibilidades de tipos
let empresa : string | undefined;
empresa = 'Porto';      //ok
empresa = undefined;    // ok

let nota: number | number[] | Array<number>; // apenas number | number[]
nota = 10;
nota = [10, 8];

// composição de tipos com valores pré-definidos
let marcaVeiculo : "Ford" | "Hyundai" | "Honda" | undefined;
marcaVeiculo = "Ford";  //ok


