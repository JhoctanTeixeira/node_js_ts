import { Cliente } from "./cliente2";

export class Registro {
    public salvar(cliente: Cliente) : void {
        console.log(`Cliente ${cliente.nome} armazenado.`);
    }
}