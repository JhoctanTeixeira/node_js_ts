"use strict";
// a sobrecarga de funções é útil quando desejamos
// fornecer mais de uma opção para a operação requerida
// obs.: não confundir com métodos contendo diferentes objetivos
function calcularMedia(a, b, c) {
    if (c) {
        return a + b + c;
    }
    else {
        return a + b;
    }
}
let m1 = calcularMedia(2, 4);
let m2 = calcularMedia(2, 4, 5);
function calcularPreco(preco, imposto, desconto) {
    return preco + (imposto ? imposto : 0) - (desconto ? desconto : 0);
}
let p1 = calcularPreco(1000);
let p2 = calcularPreco(1000, 100);
let p3 = calcularPreco(1000, 100, 75);
console.log('Media 1: ', m1);
console.log('Media 2: ', m2);
console.log('Preço 1: ', p1);
console.log('Preço 2: ', p2);
console.log('Preço 3: ', p3);
