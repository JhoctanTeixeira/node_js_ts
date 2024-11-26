"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authorize = authorize;
const utils_1 = require("../classes/utils");
function authorize(target, key, descriptor) {
    const originalMethod = descriptor.value;
    descriptor.value = function (...args) {
        const isAuthenticated = verifyUser();
        if (!isAuthenticated) {
            throw new Error('Acesso negado para esta operação.');
        }
        const result = originalMethod.apply(this, args);
        return result;
    };
    return descriptor;
}
function verifyUser() {
    let user = utils_1.Utilitarios.USUARIO;
    return (user != null);
}
