"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Injectable = Injectable;
const container_1 = require("./container");
function Injectable(token) {
    return function (target) {
        container_1.container.providers[token] = new target();
    };
}
