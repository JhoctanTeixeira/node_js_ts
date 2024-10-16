console.log('INICIO')
const id = setInterval(
    () => console.log(new Date()), 1000);

setTimeout(() => clearInterval(id), 5000);
console.log('FIM')
