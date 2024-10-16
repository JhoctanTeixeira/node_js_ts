let pessoa = require('./modulos/pessoa_fn_obj');

let app = pessoa();
app.atribuir('Miguel', 23);
console.log(app.mostrar());
