const readFileAsync = require('./promises4');

const testReadFile = async () => {
    try {
        const conteudo = await readFileAsync(__dirname + '/app1.js');
        console.log(conteudo.toString());
    } catch (error) {
        console.log(error);
    }
}

testReadFile();
