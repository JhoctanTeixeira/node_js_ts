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

//lista de objetos - lista de cursos, onde cada curso é um objeto
exports.cursos = [
    { descricao: "Psicologia",          ch: 4800, periodo: 'MANHÃ',    status: true }, 
    { descricao: "Análise de sistemas", ch: 2800, periodo: 'NOITE',    status: true }, 
    { descricao: "Turismo",             ch: 3200, periodo: 'INTEGRAL', status: false }
];
