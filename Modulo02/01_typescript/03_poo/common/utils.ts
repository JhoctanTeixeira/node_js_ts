import { ResponseCPF } from "../interfaces/responsecpf";

export class Utilitarios {
    public static async validarCPF(cpf: string) : Promise<ResponseCPF> {
        const url = "https://emiliocelso-porto.azurewebsites.net/v1/validation";
        let resposta = await fetch(`${url}/${cpf}`);
        let json = await resposta.json();

        return json;
    }
}