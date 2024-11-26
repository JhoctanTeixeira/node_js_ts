"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Inject = Inject;
const container_1 = require("./container");
function Inject(token) {
    return function (target, key) {
        Object.defineProperty(target, key, {
            get: () => container_1.container.resolve(token),
            enumerable: true,
            configurable: true
        });
    };
}
