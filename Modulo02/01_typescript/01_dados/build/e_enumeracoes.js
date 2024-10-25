"use strict";
// Tipos enumerados
var Sexo;
(function (Sexo) {
    Sexo[Sexo["Masculino"] = 0] = "Masculino";
    Sexo[Sexo["Feminino"] = 1] = "Feminino";
    Sexo[Sexo["Outros"] = 2] = "Outros";
})(Sexo || (Sexo = {}));
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
var Estados;
(function (Estados) {
    Estados[Estados["SP"] = 10] = "SP";
    Estados[Estados["RJ"] = 15] = "RJ";
    Estados[Estados["MT"] = 16] = "MT";
    Estados[Estados["MS"] = 17] = "MS";
    Estados[Estados["BH"] = 20] = "BH";
    Estados[Estados["ES"] = 21] = "ES";
})(Estados || (Estados = {}));
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
