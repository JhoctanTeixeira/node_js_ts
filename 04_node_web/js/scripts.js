
let botaoIniciar = document.getElementById('iniciar');
let botaoTerminar = document.getElementById('terminar');
let divResposta = document.getElementById('resposta');
let id;
// evento click de cada botão referenciado acima

monitorarBotoes(true);
botaoIniciar.addEventListener('click', function() {
    monitorarBotoes(false);
    id = setInterval(() => divResposta.innerHTML = new Date().toLocaleTimeString(), 1000);
});

botaoTerminar.addEventListener('click', function() {
    monitorarBotoes(true);
    clearInterval(id);
});

function monitorarBotoes(b){
    botaoIniciar.disabled = !b;
    botaoTerminar.disabled = b;
}
