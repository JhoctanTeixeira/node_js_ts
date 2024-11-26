
/**
 * @description Função com parâmetro contendo múltiplos tipos, obtidos através de uma união
 * @param {string | string[] | (() => string) | { s: string }} texto parâmtro com multiplos tipos
 * @returns {string} O retorno será obtido de acordo com o parâmetro passado.
 * 
 * @example
 *      lerDados('Porto');
 */
function lerDados(texto : string | string[] | (() => string) | { s: string } ): string {

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