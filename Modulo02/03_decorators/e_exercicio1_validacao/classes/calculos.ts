import { validate } from "../funcoes/validate";

export class Calculos {

    @validate
    calcularSoma(a: number, b: number, c: number) : number {
        return a + b + c;
    }

    @validate
    calcularMedia(a: number, b: number) : number {
        return (a + b) / 2;
    }
}