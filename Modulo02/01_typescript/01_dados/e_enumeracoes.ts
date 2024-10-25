// Tipos enumerados
enum Sexo {
  Masculino,
  Feminino,
  Outros,
}

enum DiasSemana {
  Domingo = "Domingo",
  Segunda = "Segunda-feira",
  Terca = "Terça-feira",
  Quarta = "Quarta-feira",
  Quinta = "Quinta-feira",
  Sexta = "Sexta-feira",
  Sabado = "Sábado",
}

enum Estados {
  SP = 10,
  RJ = 15,
  MT,
  MS,
  BH = 20,
  ES,
}

let sexo = Sexo.Masculino;
console.log(sexo); // 0

let sexo1 = Sexo[Sexo.Masculino];
console.log(sexo1); // Masculino

// Dias da semana
let dia = DiasSemana.Quarta;
console.log(dia); // Quarta-feira

// Estados
let estado = Estados.MS;
console.log(estado); // Mato Grosso do Sul
