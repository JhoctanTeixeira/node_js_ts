// definindo uma função com parametros multiplos (union)
function lerDados(texto : string | string[] | (() => string) | { s: string } ) {

    // dependendo do tipo informado, esta função retornará um valor diferente
    if (typeof texto === 'string'){
        return mostrar(texto);
    } else if(Array.isArray(texto)) {
        return texto.map(mostrar).join(",");
    } else if (typeof texto === "function") {
        return mostrar(texto());
    } else {
        return mostrar(texto.s);
    }
}

function mostrar(s: string) : string {
    return s;
}

// execução
console.log(lerDados('Porto'));
console.log(lerDados(['Porto', 'Seguro']));
console.log(lerDados(() => 'Porto Saúde'));
console.log(lerDados({ s: 'Porto Bank'}));

function calcularHipotenusa(param: {lado: number, altura: number}) : number {
    return Math.sqrt(Math.pow(param.lado, 2) + Math.pow(param.altura, 2));
}

console.log('Hipotenusa:', calcularHipotenusa({ lado: 10, altura: 15}));