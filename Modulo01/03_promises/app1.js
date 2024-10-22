const getPromise = require('./promises1');

//console.log(getPromise());

let testPromise = async function() {
    try {        
        const valor = await getPromise();
        console.log(valor);
    } catch (error) {
        console.log(error);
    }
}

testPromise();
