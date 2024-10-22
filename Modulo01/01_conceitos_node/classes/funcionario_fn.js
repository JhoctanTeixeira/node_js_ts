function Funcionario(nome, idade, cargo, salario) {

    this.nome = nome;
    this.idade = idade;
    this.cargo = cargo;
    this.salario = salario;

    this.mostrarDados = function() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\n` +
        `Cargo: ${this.cargo}\nSalário: ${this.salario}\nIRPF: ${calcularImposto(this.salario)}`;
    }
}

function calcularImposto(valor){
    // neste exercicio, o valor (parametro) representa a base de calculo
    let valores = [0, 2112.0, 2826.65, 3751.05, 4664.68];
    let taxas = [0, 7.5, 15.0, 22.5, 27.5];
    let imposto = 0;
    let baseCalculo = valor;

    for (let i = valores.length - 1; i >= 0; i--) {
        if(baseCalculo > valores[i]){
            imposto += (baseCalculo - valores[i]) * taxas[i] / 100;
            baseCalculo = valores[i];
        }        
    }
    return imposto;
}
module.exports = Funcionario;