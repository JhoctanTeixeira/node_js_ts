/*
    execução do módulo relativo aos dias restantes
*/
let diasRestantes = require('./modulos/diasRestantes');

// obtendo os valores dos parametros através da linha de execução
let dia = process.argv[2];
let mes = process.argv[3];
let ano = process.argv[4];

let dias = diasRestantes(dia, mes, ano);
console.log(`Restam ${dias} dias para terminar o ano.`);
