function getMultiply(a, b){

    return new Promise( resolve => {
        setTimeout(() => 
            resolve(a * b)
        , 1000);
    });
}

module.exports = getMultiply;