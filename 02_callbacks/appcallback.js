let fn = require('./funcoes/callback');

// vamos executar as funções callback como funções anônimas
let res1 = fn.executar(function(item) {
    return item.length;
});
console.log(`res1: ${res1} - ${typeof(res1)}`);

let res2 = fn.executar(function(item){
    return item == 'Porto';
});
console.log(`res2: ${res2} - ${typeof(res2)}`);

// nos exemplos seguintes usaremos arrow function
let res3 = fn.executar(item => item.toUpperCase());
console.log(`res3: ${res3} - ${typeof(res3)}`);

let res4 = fn.executar(item => [item.length, item == 'Porto', item.toUpperCase()]);
console.log(`res4: ${res4} - ${typeof(res4)}`);