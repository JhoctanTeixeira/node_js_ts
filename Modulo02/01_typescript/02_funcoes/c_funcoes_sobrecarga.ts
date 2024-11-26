// a sobrecarga de funções é útil quando desejamos
// fornecer mais de uma opção para a operação requerida
// obs.: não confundir com métodos contendo diferentes objetivos

function calcularSoma(a: number, b: number): number;
function calcularSoma(a: number, b: number, c: number): number;
function calcularSoma(a: number, b: number, c?: number): number {
    if(c){
        return a + b+ c;
    } else {
        return a + b;
    }
}

let m1 = calcularSoma(2, 4);
let m2 = calcularSoma(2, 4, 5);

function calcularPreco(preco: number) : number;
function calcularPreco(preco: number, imposto: number) : number;
function calcularPreco(preco: number, imposto: number, desconto: number) : number;
function calcularPreco(preco: number, imposto?: number, desconto?: number) : number{
    return preco + (imposto ? imposto : 0) - (desconto ? desconto : 0);
}

let p1 = calcularPreco(1000);
let p2 = calcularPreco(1000, 100);
let p3 = calcularPreco(1000, 100, 75);

console.log('Soma 1: ', m1);
console.log('Soma 2: ', m2);

console.log('Preço 1: ', p1);
console.log('Preço 2: ', p2);
console.log('Preço 3: ', p3);

