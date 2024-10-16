const getPromise = require('./promises1');
const getMultiply = require('./promises3');

// o método race() retorna o promise da lista que responder primeiro.
// Promise.race([getPromise(), getMultiply(3,4)])
//     .then(result => console.log(result))
//     .catch(erro => console.log(erro));

async function executarRace() {
    Promise.race([await getPromise(), await getMultiply(3,4)])
    .then(result => console.log(result))
    .catch(erro => console.log(erro));
}
executarRace();

