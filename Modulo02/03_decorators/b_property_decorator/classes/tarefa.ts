import { verifica } from "../funcoes/verifica";

export class Tarefa {

    @verifica
    private titulo: string;

    constructor(titulo: string) {
        this.titulo = titulo;
    }
}