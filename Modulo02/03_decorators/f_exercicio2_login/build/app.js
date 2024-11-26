"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const database_1 = require("./classes/database");
const db = new database_1.Database();
db.efetuarLogin('admin');
//db.efetuarLogoff();
db.incluirRegistro();
