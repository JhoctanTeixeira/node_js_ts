import { Usuario } from "./classes/usuario";

const usuario = new Usuario('admin', '123');

for (const key in usuario) {
    console.log(key);
}