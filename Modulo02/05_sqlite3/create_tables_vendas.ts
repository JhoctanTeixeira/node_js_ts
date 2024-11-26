import { Database } from "sqlite3";
import * as fs from "fs";
import { dbpath } from "./constantes";

const db = new Database(dbpath);

db.exec(fs.readFileSync(__dirname + '/vendas.sql').toString(), e => {
    if(e){
        console.log(e.message);
    } else {
        console.log('Tabelas criadas com sucesso.');
    }
});