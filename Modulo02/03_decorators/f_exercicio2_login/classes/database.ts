import { authorize } from "../funcoes/authorize";
import { Utilitarios } from "./utils";

export class Database {

    efetuarLogin(username: string) : void {
        Utilitarios.USUARIO = username;
        //localStorage.setItem('username', username);
    }

    efetuarLogoff () : void {
        Utilitarios.USUARIO = null;
    }

    @authorize
    incluirRegistro() : void {
        console.log('Registro incluído com sucesso!');
    }
}