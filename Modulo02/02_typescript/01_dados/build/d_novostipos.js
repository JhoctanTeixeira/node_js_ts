"use strict";
let nomes = ["Ana", "Bia", "Carlos", "Daniel"];
let buscarNome = (item) => item.startsWith("A");
function executar() {
  nomes.forEach((elemento) => {
    if (buscarNome(elemento)) {
      console.log(`Nome encontrado: ${elemento}`);
    }
  });
}
executar();
