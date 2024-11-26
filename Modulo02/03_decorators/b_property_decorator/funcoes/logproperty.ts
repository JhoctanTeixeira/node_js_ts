// objetivo: alterar funcionalidade da propriedade
function logProperty(target: any, key: any) {
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
export {logProperty}