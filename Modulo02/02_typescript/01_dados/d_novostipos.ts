type str = string | null;
type n = number;
type dispositivo = "PC" | "Tablet" | "Celular";
type imovel = {
  area: n;
  local: str;
  dispVenda: boolean;
};

type filtro = (busca: string) => boolean;

let nomes = ["Ana", "Bia", "Carlos", "Daniel"];

let buscarNome: filtro = (item) => item.startsWith("A");

function executar() {
  nomes.forEach((elemento) => {
    if (buscarNome(elemento)) {
      console.log(`Nome encontrado: ${elemento}`);
    }
  });
}
executar();
