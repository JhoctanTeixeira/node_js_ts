// simulação de um servidor web criado em Node.js
let http = require('http');
let fs = require('fs')
let url = require('url');

let server = http.createServer( function(request, response) {

    let url_params = url.parse(request.url);
    let arquivo = url_params.pathname;

    // verificando se um arquivo foi informado na url:
    if(!arquivo || arquivo === '/') {
        arquivo = '/index.html'
    }

    fs.readFile(__dirname + arquivo, function(erro, conteudo){
        if(erro) {
            response.writeHead(404, { 'Content-Type': 'text/html;charset=utf-8'});
            response.write('<h1>Página não localizada</h1>');
        } else {
            response.writeHead(200, { 'Content-Type': 'text/html;charset=utf-8'});
            response.write(conteudo);
        }
        response.end();
    });
});

server.listen(3000, function() {
    console.log('Servidor no ar.');
});