import { Cpf } from "../classes/DocumentoCPF";
import { Prestador } from "../classes/prestador";
import { Sexo } from "../enum/sexo";

let prestador: Prestador = new Prestador(
  "Jose da Silva",
  Sexo.MASCULINO,
  new Cpf("12345678900")
);

async function main() {
  try {
    console.log("=================================");
    console.log(await prestador.mostrarDados());
    console.log("=================================");
    console.log(await prestador.mostrarDados("Dados do Prestador"));
  } catch (error) {
    console.error(error);
  }
}

main();