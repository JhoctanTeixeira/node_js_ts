const getPromise = require('./promises1');
const getMultiply = require('./promises3');

// o método all() permite a execução de vários promises
// em cadeia
Promise.all([getPromise(), getMultiply(3, 4)])
    .then(result => console.log(result))
    .catch(erro => console.log(erro));

    