"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enumerar = enumerar;
function enumerar(valor) {
    return (target, propertyKey, propertyDescriptor) => {
        propertyDescriptor.enumerable = valor;
    };
}
