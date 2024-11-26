"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validate = validate;
function validate(target, key, descriptor) {
    // capturamos o comportamento funcional do método 'decorado', ou seja,
    // definimos uma referencia ao método
    const originalMethod = descriptor.value;
    // sobrescrevemos o método 'decorado' com um novo comportamento.
    // Os parametros do método são repassados para args
    descriptor.value = function (...args) {
        if (args.length < 3) {
            throw new Error('A função deve ter pelo menos três parametros');
        }
        // executamos o método com seu comportamento originalmente programado
        const result = originalMethod.apply(this, args);
        // retornamos o método original
        return result;
    };
    return descriptor;
}
