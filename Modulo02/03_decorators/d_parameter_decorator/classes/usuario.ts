import { mostrarInfo } from "../funcoes/mostrarinfo";


export class Usuario {

    // username: string;
    // password: string;

    constructor(private username: string, private password: string) {}
    
    alterarSenha(@mostrarInfo() nova: string) {
        this.password = nova;
    }

}