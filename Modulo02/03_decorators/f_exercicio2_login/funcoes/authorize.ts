import { Utilitarios } from "../classes/utils";

export function authorize(target: any, key: string, descriptor: PropertyDescriptor) {

    const originalMethod = descriptor.value;
    descriptor.value = function (...args: any[]) {
        const isAuthenticated = verifyUser();
        if(!isAuthenticated) {
            throw new Error('Acesso negado para esta operação.');
        }
        const result = originalMethod.apply(this, args);
        return result;
    };
    return descriptor;
}

function verifyUser(): boolean {
    let user = Utilitarios.USUARIO;
    return (user != null);
}