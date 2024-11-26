/*
    Neste exemplo, tornaremos as propriedades de uma interface anuláveis
    (nullable):

    texto: string = 'Typscript' (não nullable)

    texto: string | null = null
*/

type Nullable<T> = { [P in keyof T]: T[P] | null };

          //T
interface Usuario {
    //P
    username: string;
    status: number;
}

// P: username ou status
type NullableUser = Nullable<Usuario>;

let usuario: NullableUser = { username: 'admin', status: 1 };
console.log(usuario['username']);
console.log(usuario['status']);
