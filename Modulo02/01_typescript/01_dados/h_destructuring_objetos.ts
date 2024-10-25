let companhia = {
  nome: "Caelum",
  logradouro: "Rua Vergueiro 3185",
  bairro: "Vila Mariana",
  numero: 3185,
  cidade: "São Paulo",
};

let { nome, logradouro, bairro, numero, cidade } = companhia;

console.log(nome);

let { nome: descricao, logradouro: local, ...outros } = companhia;

console.log(descricao, outros);