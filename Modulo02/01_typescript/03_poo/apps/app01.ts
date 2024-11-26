import { DocumentoCNPJ } from "../classes/documentocnpj";
import { DocumentoCPF } from "../classes/documentocpf";
import { Prestador } from "../classes/prestador";
import { PrestadorAutonomo } from "../classes/prestadorauto";
import { Sexo } from "../enums/sexo";

let prestador: Prestador = new Prestador(
    'Jose Mauricio',
    Sexo.MASCULINO,
    new DocumentoCPF("71505845009"));


let prestadorauto : PrestadorAutonomo = new PrestadorAutonomo(
    'Maria', 
    Sexo.FEMININO, 
    new DocumentoCPF("71505845009"), 
    "12345");

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