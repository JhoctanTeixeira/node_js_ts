import { Database } from "sqlite3";
const dbpath = 'C:/Documentos/Projetos/PortoSeguro/Node_JS_TS/Modulo02/db/dbvendas.db';
const db = new Database(dbpath);

export { db }
