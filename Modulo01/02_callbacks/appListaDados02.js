let colecoes = require('./dados/listaDados');

// criar uma lista dos cursos ativos (status = true)
let ativos = colecoes.cursos.filter(item => item.status);
console.log(ativos);

// gerar uma nova lista de cursos, com base na lista original
let novaLista = colecoes.cursos.map((elemento, posicao) => {
    return {
        chave: posicao,
        curso: elemento.descricao,
        ativo: elemento.status ? 'Sim': 'Não'
    }
});

console.log(novaLista);

