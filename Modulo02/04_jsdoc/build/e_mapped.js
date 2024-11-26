/*
    Neste exemplo, tornaremos as propriedades de uma interface anuláveis
    (nullable):

    texto: string = 'Typscript' (não nullable)

    texto: string | null = null
*/
let usuario = { username: 'admin', status: 1 };
console.log(usuario['username']);
console.log(usuario['status']);
