let pessoa = {

    atribuir: function(nome, idade){
        this.nome = nome;
        this.idade = idade;
    },
    verificar: function() {
        return this.idade >= 18;
    },
    mostrar: function() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}`;
    }
}
module.exports = pessoa;