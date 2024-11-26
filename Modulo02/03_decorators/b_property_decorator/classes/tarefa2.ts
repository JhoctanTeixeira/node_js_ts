import { logProperty } from "../funcoes/logproperty";

export class Tarefa2 {

    @logProperty
    public id: number;

    @logProperty
    public titulo: string;

    constructor(id: number, titulo: string) {
        this.id = id;
        this.titulo = titulo;
    }
}