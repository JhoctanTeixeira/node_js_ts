function calcularMedia(a: number, b: number): number;
function calcularMedia(a: number, b: number, c: number): number;
function calcularMedia(a: number, b: number, c?: number): number {
  if (!c) return (a + b) / 2;
  return (a + b + c) / 3;
}
let m1 = calcularMedia(2, 4, 4);

console.log(m1);

function calcularPreco(preco: number): number;
function calcularPreco(preco: number, imposto: number): number;
function calcularPreco(preco: number, imposto: number, desconto: number): number;
function calcularPreco(preco: number, imposto?: number, desconto?: number): number {

  if (!imposto) return preco;
  if (!desconto) return preco + (preco * imposto) / 100;
  return preco + (preco * imposto) / 100 - (preco * desconto) / 100;
}


let preco1 = calcularPreco(100)
let preco2 = calcularPreco(100, 10)
let preco3 = calcularPreco(100, 10, 5)

console.log(preco1);
console.log(preco2);
console.log(preco3);