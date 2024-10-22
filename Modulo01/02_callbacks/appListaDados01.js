let colecoes = require('./dados/listaDados');

// aplicar um filtro à lista de nomes
let listaNomes = colecoes.nomes.filter(item => item.startsWith('A'));
console.log(listaNomes);

// aplicar p método map() para alterar a exibição dos elementos
let dados = colecoes.nomes.map((elemento, indice) => {
    console.log(indice + ': ' + elemento);
    return indice + ': ' + elemento;
});
console.log(dados);