import { Sexo } from "../enums/sexo";
import { IDocumento } from "../interfaces/documento";

export  class Prestador {
    
    constructor(
        private nome: string, 
        private sexo: Sexo, 
        private documento: IDocumento) {}

        mostrarDados(): string;
        mostrarDados(titulo: string): string;
        mostrarDados(titulo?: string): string {
    
            let resposta: string = `Nome: ${this.nome}\nSexo: ${this.sexo}\nDocumento: ${this.documento}`;
            if(titulo){
                resposta = `${titulo}\n${resposta}`;
            }
            return resposta;
        }        

    // async mostrarDados(): Promise<string>;
    // async mostrarDados(titulo: string): Promise<string>;
    // async mostrarDados(titulo?: string): Promise<string> {

    //     let resposta: string = `Nome: ${this.nome}\nSexo: ${this.sexo}\nDocumento: ${await this.documento}`;
    //     if(titulo){
    //         resposta = `${titulo}\n\n${resposta}`;
    //     }
    //     return resposta;
    // }

}