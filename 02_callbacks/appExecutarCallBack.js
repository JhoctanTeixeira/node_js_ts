const callbacks = require('./modulos/executarCallBack');

const app = callbacks();
lista = ['amancio', 'lucilia', 'amariza', 'osvaldo', 'bernardo'];

app.getList(lista);
let result = app.search(nome => nome.startsWith('a'));
console.log(result);

result = app.search(nome => nome.endsWith('a'));
console.log(result);
