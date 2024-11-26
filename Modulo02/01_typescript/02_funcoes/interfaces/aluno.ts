import { Pessoa } from "./pessoa";

export interface Aluno extends Pessoa {
    curso: string;
}