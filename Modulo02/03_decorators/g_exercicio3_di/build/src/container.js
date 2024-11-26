"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.container = exports.Container = void 0;
const lodash_1 = require("lodash");
class Container {
    constructor() {
        this.providers = {};
    }
    // metodo usadop para recuperar uma instância com base em um token
    resolve(token) {
        const matcherProvider = (0, lodash_1.find)(this.providers, (provider, key) => key === token);
        if (matcherProvider) {
            return matcherProvider;
        }
        else {
            throw new Error(`Provider não localizado: ${token}`);
        }
    }
}
exports.Container = Container;
exports.container = new Container();
