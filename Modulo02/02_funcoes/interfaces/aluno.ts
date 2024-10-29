import { Pessoa } from "./pessoa";

interface Aluno extends Pessoa {
    curso : string;
}

export { Aluno };