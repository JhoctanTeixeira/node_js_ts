
let companhia = {
    nome: 'Porto Seguro',
    logradouro: 'Rua Guaianases',
    numero: 1238,
    cidade: 'São Paulo'
}

let { nome, logradouro } = companhia;
console.log(nome);
console.log(logradouro);

// podemos renomear (definir novos nomes a partir das propriedades originais) 
// as propriedades a nosso favor
let { nome: descricao, logradouro: local } = companhia;
console.log(descricao);
console.log(local);

// podemos também obter partes do objeto
let { cidade, ...outrosDados} = companhia;
console.log(cidade);
console.log(outrosDados);