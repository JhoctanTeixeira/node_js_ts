import { enumerar } from "../funcoes/enumerar";

export class Usuario {

    // username: string;
    // password: string;

    constructor(private username: string, private password: string) {}

    @enumerar(true)
    alterarSenha(nova: string) {
        this.password = nova;
    }

}