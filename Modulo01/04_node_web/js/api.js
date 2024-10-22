async function buscarCEP(cep) {

    const resposta = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const json = await resposta.json();
    return {
        logradouro: json.logradouro,
        bairro: json.bairro,
        cidade: json.localidade
    }
}

function executar() {
    // execução do evento click do botão
    document.getElementById('btnEnviar').addEventListener('click', async function() {

        let cep = document.getElementById('cep').value;
        let resposta = await buscarCEP(cep);

        document.getElementById('logradouro').value = resposta.logradouro;
        document.getElementById('bairro').value = resposta.bairro;
        document.getElementById('cidade').value = resposta.cidade;
    });
}

executar();
