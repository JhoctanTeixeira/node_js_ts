"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mostrarInfo = mostrarInfo;
function mostrarInfo() {
    return (target, propertyKey, parameterIndex) => {
        console.log('target:', target);
        console.log('property key:', propertyKey);
        console.log('parameter index:', parameterIndex);
    };
}
