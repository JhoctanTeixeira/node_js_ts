import { ResponseCPF } from "../interfaces/responseCpf";

export class Utilitarios {
  public static async validarCpf(cpf: string): Promise<ResponseCPF> {

    const url = "https://emiliocelso-porto.azurewebsites.net/v1/validation";
    let response = fetch(`${url}/${cpf}`);
    let json = (await response).json();

    return json;
  }
}
