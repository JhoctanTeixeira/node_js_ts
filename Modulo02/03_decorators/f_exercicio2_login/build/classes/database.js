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
exports.Database = void 0;
const authorize_1 = require("../funcoes/authorize");
const utils_1 = require("./utils");
class Database {
    efetuarLogin(username) {
        utils_1.Utilitarios.USUARIO = username;
        //localStorage.setItem('username', username);
    }
    efetuarLogoff() {
        utils_1.Utilitarios.USUARIO = null;
    }
    incluirRegistro() {
        console.log('Registro incluído com sucesso!');
    }
}
exports.Database = Database;
__decorate([
    authorize_1.authorize,
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], Database.prototype, "incluirRegistro", null);
