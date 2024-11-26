// é possívem definirmos novas estruturas para dados com comportamentos comuns
type str = string | null;
type n = number;
type dispositivo = "PC" | "Laptop" | "Celular";

export { imovel }
type imovel = {
    area: number,
    local: string,
    dispVenda?: boolean     // opcional
};

type filtro = (busca: string) => boolean;

// exemplos de utilização
let nomes = ['Jose', 'Jorge', 'Amanda', 'Patricia'];
let buscarNome : filtro = item => item.startsWith('A');

function executar() {
    nomes.forEach(elemento => {
        if(buscarNome(elemento)){
            console.log(`Nome encontrado: ${elemento}`);
        }
    });
}

let descricao : str = "Abordagem sobre tipos no Typescript";    // OK
let duracao: n = 10;
let disp : dispositivo = "Celular";

let casa : imovel = {
    area: 120, local: 'São Paulo', dispVenda: true
}


executar();
console.log(descricao);
console.log(duracao);
console.log(disp);
console.log(casa);