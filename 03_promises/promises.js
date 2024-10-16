
let promise = new Promise( (resolve, reject) => {

    let x = Math.random();  // um numero entre 0 e 1 é gerado
    // simulação: valores gerados acima de 0.5 são considerados aceitáveis. 
    // Caso contrário, o valor é inaceitável
    if(x > 0.5){
        resolve('Valor calculado: ' + x);
    } else {
        reject('Valor inválido: ' + x);
    }
});

console.log('---- ANTES DO PROMISE -------')
promise
    
    .then(s => s.toUpperCase()) // VALOR CALCULADO
    //.then(x => x.substring(6))  // CALCULADO
    .then(s => console.log(s))  // tela
    //.then(p => console.log(p))  // tela
    .catch(erro => console.log(erro))
    .finally(() => console.log('---- APÓS O PROMISE --------'))
    
//console.log('---- APÓS O PROMISE --------');