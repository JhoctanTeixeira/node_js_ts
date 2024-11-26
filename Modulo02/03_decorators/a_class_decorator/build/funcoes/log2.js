"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.log2 = log2;
function log2(prefix) {
    return (target) => {
        console.log(`${prefix} - ${target}`);
    };
}
