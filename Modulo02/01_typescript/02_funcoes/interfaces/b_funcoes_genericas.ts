/* 
function subLista<T>(lista: T[]) : T[] {
    let sub: T[] = [];
    lista.forEach((item) => {
        if((item as string).length > 5) { // Descaracteriza o uso do generics
            sub.push(item);
        }
    });

    return sub;
}

let nomes: string[] = ["João", "Maria", "José", "Pedroso"];

let lista = subLista<string>(nomes);

console.log(lista); */

import { Aluno } from "./aluno";
import { Pessoa } from "./pessoa";

function subLista<T extends Pessoa>(lista: T[]): T[] {
  let sub: T[] = [];
  lista.forEach((item) => {
    if (item.nome.length > 5) { // Descaracteriza o uso do generics
      sub.push(item);
    }
  });

  return sub;
}

let pessoas1 = [{ nome: "João", idade: 25 }, { nome: "Maria", idade: 30 }, { nome: "José", idade: 35 }, { nome: "Pedroso", idade: 40 }];

let lista = subLista(pessoas1);

console.log(lista);

let pessoas2 = [{ nome: "Ze", idade: 25, altura: 1.75 }, { nome: "Osvaldo", idade: 30,  altura: 1.65  }, { nome: "José", idade: 35 }, { nome: "Pedroso", idade: 40 }];

let lista2 = subLista(pessoas2);

console.log(lista2);


let pessoas3: Pessoa[] = [
    { nome: "João", idade: 25 },
    { nome: "Maria", idade: 30 },
    { nome: "José", idade: 35 },
    { nome: "Pedroso", idade: 40 }
]

let lista3 = subLista(pessoas3);

console.log(lista3);


let pessoas4: Aluno[] = [
    {
        nome: "João", idade: 25, curso: "Matemática"
    },
    {
        nome: "Maria", idade: 30, curso: "Física"
    },
    {
        nome: "José", idade: 35, curso: "Química"
    },
    {
        nome: "Pedroso", idade: 40, curso: "Biologia"
    }
]

let lista4 = subLista(pessoas4);

console.log(lista4);