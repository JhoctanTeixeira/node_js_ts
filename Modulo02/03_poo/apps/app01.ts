import { Cpf } from "../classes/DocumentoCPF";
import { Prestador } from "../classes/prestador";
import { Sexo } from "../enum/sexo";

let prestador: Prestador = new Prestador(
  "Jose da Silva",
  Sexo.MASCULINO,
  new Cpf("12345678900")
);
console.log('=================================')
console.log(prestador.mostrarDados());
console.log('=================================')
console.log(prestador.mostrarDados("Dados do Prestador"));
