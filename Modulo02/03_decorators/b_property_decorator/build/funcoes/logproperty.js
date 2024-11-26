"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logProperty = logProperty;
// objetivo: alterar funcionalidade da propriedade
function logProperty(target, key) {
    const newKey = `_${key}`;
    /*
      https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/defineProperty
    */
    Object.defineProperty(target, key, {
        get() {
            console.log(`GET: ${key} => ${this[newKey]}`);
            return this[newKey];
        },
        set(newValue) {
            console.log(`SET: ${key} => ${newValue}`);
            this[newKey] = newValue;
        },
        enumerable: true,
        configurable: true
    });
}
