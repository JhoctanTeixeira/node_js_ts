"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const usuario_1 = require("./classes/usuario");
const usuario = new usuario_1.Usuario('admin', '123');
usuario.alterarSenha('1234');
