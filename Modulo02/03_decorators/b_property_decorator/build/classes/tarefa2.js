"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tarefa2 = void 0;
const logproperty_1 = require("../funcoes/logproperty");
class Tarefa2 {
    constructor(id, titulo) {
        this.id = id;
        this.titulo = titulo;
    }
}
exports.Tarefa2 = Tarefa2;
__decorate([
    logproperty_1.logProperty,
    __metadata("design:type", Number)
], Tarefa2.prototype, "id", void 0);
__decorate([
    logproperty_1.logProperty,
    __metadata("design:type", String)
], Tarefa2.prototype, "titulo", void 0);
