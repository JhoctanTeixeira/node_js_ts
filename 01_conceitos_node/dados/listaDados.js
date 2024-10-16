// a lista a seguir deve ser exportada para ser consumida em outra aplicação
exports.nomes = ['Carlos', 'Daniela', 'Marcos', 'Bernardo', 'Ana Paula']

// podemos exportar todos os elementos válidos no Javascript
exports.empresa = {

    razaoSocial: 'Porto Seguro',
    endereco: {
        logradouro: 'Av. Rio Branco',
        numero: 275,
        cidade: 'São Paulo'
    },
    funcionarios: this.nomes
}

