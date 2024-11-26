"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
let companhia = {
    nome: 'Porto Seguro',
    logradouro: 'Rua Guaianases',
    numero: 1238,
    cidade: 'São Paulo'
};
let { nome, logradouro } = companhia;
console.log(nome);
console.log(logradouro);
// podemos renomear (definir novos nomes a partir das propriedades originais) 
// as propriedades a nosso favor
let { nome: descricao, logradouro: local } = companhia;
console.log(descricao);
console.log(local);
// podemos também obter partes do objeto
let { cidade } = companhia, outrosDados = __rest(companhia, ["cidade"]);
console.log(cidade);
console.log(outrosDados);
