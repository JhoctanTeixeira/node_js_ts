
let cep = '04321120';
let url = `https://viacep.com.br/ws/${cep}/json/`;

fetch(url)
    .then(res => res.json())
    .then(json => console.log(json));