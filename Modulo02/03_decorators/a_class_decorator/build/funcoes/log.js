"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log = log;
// new () => any : representa qualquer classe que tenha um contrutor sem parametros
function log(target) {
    console.log(target);
}
