// utilização da classe Funcionario
const Funcionario = require('./classes/funcionario');

// definir uma instância da classe (objeto)
let p = new Funcionario();
p.lerDados('Jonas', 30, 'Motorista', 5472);
console.log(p.mostrarDados());