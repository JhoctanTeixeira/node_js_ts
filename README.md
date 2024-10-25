# Documentação do Codebase


### README

#### `README.md`
```md
## JavaScript

JavaScript é uma linguagem de programação leve, interpretada e baseada em scripts. É amplamente utilizada para o desenvolvimento de páginas web interativas e dinâmicas. JavaScript é uma linguagem de alto nível, frequentemente utilizada em conjunto com HTML e CSS para criar experiências de usuário ricas e responsivas.

## TypeScript

TypeScript é um superconjunto de JavaScript que adiciona tipagem estática opcional à linguagem. Desenvolvido pela Microsoft, TypeScript permite que os desenvolvedores escrevam código mais robusto e fácil de manter, fornecendo recursos como interfaces, tipos e classes. O código TypeScript é transpilado para JavaScript, garantindo compatibilidade com todos os navegadores e ambientes que suportam JavaScript.
```
## Módulo 01

### Conceitos Node

#### `classes/funcionario.js`
```js
// o uso de classes no JS faz parte de uma sintaxe conhecida como 'sugar syntax'
class Funcionario {
    constructor() {
        this.nome = '';
        this.idade = 0;
        this.cargo = '';
        this.salario = 0;
    }

    lerDados(nome, idade, cargo, salario){
        this.nome = nome;
        this.idade = idade;
        this.cargo = cargo;
        this.salario = salario;
    }

    mostrarDados() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}\n` +
        `Cargo: ${this.cargo}\nSalário: ${this.salario}\nIRPF: ${calcularImposto(this.salario)}`;
    }
}
```

#### `modulos/pessoa_obj.js`
```js
let pessoa = {
    atribuir: function(nome, idade){
        this.nome = nome;
        this.idade = idade;
    },
    verificar: function() {
        return this.idade >= 18;
    },
    mostrar: function() {
        return `Nome: ${this.nome}\nIdade: ${this.idade}`;
    }
}
module.exports = pessoa;
```

#### `modulos/pessoa_fn_obj.js`
```js
function executarOperacoes() {
    return {
        atribuir: function(nome, idade){
            this.nome = nome;
            this.idade = idade;
        },
        verificar: function() {
            return this.idade >= 18;
        },
        mostrar: function() {
            return `Nome: ${this.nome}\nIdade: ${this.idade}`;
        }
    }
}
```

#### `dados/listaDados.js`
```js
// a lista a seguir deve ser exportada para ser consumida em outra aplicação
exports.nomes = ['Carlos', 'Daniela', 'Marcos', 'Bernardo', 'Ana Paula']

// podemos exportar todos os elementos válidos no Javascript
exports.empresa = {
    razaoSocial: 'Porto Seguro',
    endereco: {
        logradouro: 'Av. Rio Branco',
        numero: 275,
        cidade: 'São Paulo'
    },
    funcionarios: this.nomes
}
```

#### `app02.js`
```js
// vamos referenciar o arquivo listaDados.js (módulo listaDados)
// para consumir seu conteúdo
let colecoes = require('./dados/listaDados');

console.log(colecoes.nomes);
console.log(colecoes.empresa);
```

### Callbacks

#### `dados/listaDados.js`
```js
// a lista a seguir deve ser exportada para ser consumida em outra aplicação
exports.nomes = ['Carlos', 'Daniela', 'Marcos', 'Bernardo', 'Ana Paula']

// podemos exportar todos os elementos válidos no Javascript
exports.empresa = {
    razaoSocial: 'Porto Seguro',
    endereco: {
        logradouro: 'Av. Rio Branco',
        numero: 275,
        cidade: 'São Paulo'
    },
    funcionarios: this.nomes
}

// lista de objetos - lista de cursos, onde cada curso é um objeto
exports.cursos = [
    { descricao: "Psicologia", ch: 4800, periodo: 'MANHÃ', status: true }, 
    { descricao: "Análise de sistemas", ch: 2800, periodo: 'NOITE', status: true }, 
    { descricao: "Turismo", ch: 3200, periodo: 'INTEGRAL', status: false }
];
```

#### `appListaDados01.js`
```js
let colecoes = require('./dados/listaDados');

// aplicar um filtro à lista de nomes
let listaNomes = colecoes.nomes.filter(item => item.startsWith('A'));
console.log(listaNomes);

// aplicar o método map() para alterar a exibição dos elementos
let dados = colecoes.nomes.map((elemento, indice) => {
    console.log(indice + ': ' + elemento);
    return indice + ': ' + elemento;
});
console.log(dados);
```

#### `appListaDados02.js`
```js
let colecoes = require('./dados/listaDados');

// criar uma lista dos cursos ativos (status = true)
let ativos = colecoes.cursos.filter(item => item.status);
console.log(ativos);

// gerar uma nova lista de cursos, com base na lista original
let novaLista = colecoes.cursos.map((elemento, posicao) => {
    return {
        chave: posicao,
        curso: elemento.descricao,
        ativo: elemento.status ? 'Sim': 'Não'
    }
});

console.log(novaLista);
```

### Node Web

#### `js/api.js`
```js
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
```

#### `contatos.html`
```html
let contato = {
              nome: nome,
              telefone: telefone,
              dataNascimento: data,
            };
  
            fetch("http://localhost:3200/contatos", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
              },
              body: JSON.stringify(contato),
            })
              .then((res) => res.json())
              .then((saida) => {
                listarContatos();
                window.alert("Contato incluído com sucesso!");
              })
              .catch((error) => {
                window.alert("Erro ao incluir contato!");
              });
          });
          
      }
      listarContatos();
    </script>
  </body>
</html>
```

#### `index.html`
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">    
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    <title>Página web - Node</title>
</head>
<body>
    <div class="container">
        <h1>Conteúdo da página web, executada pelo Node.js</h1>
        <a href="./viacep.html">Pesquisar CEP</a>
        <div>
            <button type="button" class="btn btn-primary mr-3" id="iniciar">Iniciar</button> 
            <button type="button" class="btn btn-primary" id="terminar">Terminar</button>
        </div>
        <div id="resposta" class="mb-3 mt-3 text-primary"></div>
    </div>
    <script src="./js/scripts.js"></script>
</body>
</html>
```
