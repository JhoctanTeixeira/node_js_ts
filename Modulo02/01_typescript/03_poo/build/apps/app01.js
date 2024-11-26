"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const documentocpf_1 = require("../classes/documentocpf");
const prestador_1 = require("../classes/prestador");
const prestadorauto_1 = require("../classes/prestadorauto");
const sexo_1 = require("../enums/sexo");
let prestador = new prestador_1.Prestador('Jose Mauricio', sexo_1.Sexo.MASCULINO, new documentocpf_1.DocumentoCPF("71505845009"));
let prestadorauto = new prestadorauto_1.PrestadorAutonomo('Maria', sexo_1.Sexo.FEMININO, new documentocpf_1.DocumentoCPF("71505845009"), "12345");
console.log(prestador.mostrarDados());
console.log();
prestador = prestadorauto;
console.log(prestador.mostrarDados());
// async function mostrar() {
//     console.log(await prestador.mostrarDados());
//     console.log();
//     console.log(await prestador.mostrarDados("DADOS DO PRESTADOR"));
// }
// mostrar();
