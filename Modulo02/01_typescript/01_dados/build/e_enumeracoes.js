"use strict";
// tipos enumerados
var Sexo;
(function (Sexo) {
    Sexo[Sexo["Masculino"] = 0] = "Masculino";
    Sexo[Sexo["Feminino"] = 1] = "Feminino";
})(Sexo || (Sexo = {}));
/*
    Quando atribuímos um ALIAS para os elementos da enumeração,
    se for string, devemos atribuir para todos os elementos
*/
var DiasSemana;
(function (DiasSemana) {
    DiasSemana["Domingo"] = "Domingo";
    DiasSemana["Segunda"] = "Segunda-feira";
    DiasSemana["Terca"] = "Ter\u00E7a-feira";
    DiasSemana["Quarta"] = "Quarta-feira";
    DiasSemana["Quinta"] = "Quinta-feira";
    DiasSemana["Sexta"] = "Sexta-feira";
    DiasSemana["Sabado"] = "S\u00E1bado";
})(DiasSemana || (DiasSemana = {}));
/*
    Se o ALIAS aplicado for numérico, este substituirá o valor do índice
    na enumeração. Valores omitidos representam uma sequencia.
*/
var Estados;
(function (Estados) {
    Estados[Estados["SP"] = 10] = "SP";
    Estados[Estados["RJ"] = 15] = "RJ";
    Estados[Estados["MT"] = 16] = "MT";
    Estados[Estados["MS"] = 17] = "MS";
    Estados[Estados["BA"] = 20] = "BA";
    Estados[Estados["ES"] = 21] = "ES";
})(Estados || (Estados = {}));
// Sexo
let sexo = Sexo.Feminino;
console.log(sexo);
let sexo1 = Sexo[Sexo.Masculino];
console.log(sexo1);
//DiasSemana
let dia = DiasSemana.Quarta;
console.log(dia);
// Estados
let estado = Estados.MS;
console.log(estado);
