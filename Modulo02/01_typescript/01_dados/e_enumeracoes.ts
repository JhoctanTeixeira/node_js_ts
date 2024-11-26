// tipos enumerados
enum Sexo {
    Masculino,
    Feminino
}

/*
    Quando atribuímos um ALIAS para os elementos da enumeração,
    se for string, devemos atribuir para todos os elementos
*/
enum DiasSemana {
    Domingo = 'Domingo',
    Segunda = 'Segunda-feira',
    Terca = 'Terça-feira',
    Quarta = 'Quarta-feira',
    Quinta = 'Quinta-feira',
    Sexta = 'Sexta-feira',
    Sabado = 'Sábado'
}

/*
    Se o ALIAS aplicado for numérico, este substituirá o valor do índice
    na enumeração. Valores omitidos representam uma sequencia.
*/
enum Estados {
    SP = 10,
    RJ = 15,
    MT,
    MS,
    BA = 20,
    ES
}

// Sexo
let sexo: Sexo = Sexo.Feminino;
console.log(sexo);

let sexo1 = Sexo[Sexo.Masculino];
console.log(sexo1);

//DiasSemana
let dia = DiasSemana.Quarta;
console.log(dia);

// Estados
let estado = Estados.MS;
console.log(estado);