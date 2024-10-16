function getPromise() {
    return new Promise( (resolve, reject) => {

        let x = Math.random();  // um numero entre 0 e 1 é gerado
        // simulação: valores gerados acima de 0.5 são considerados aceitáveis. 
        // Caso contrário, o valor é inaceitável
        if(x > 0.5){
            resolve('Valor calculado: ' + x);
        } else {
            reject('Valor inválido: ' + x);
        }
    });
}

module.exports = getPromise;