import { Database } from "./classes/database";

const db = new Database();

db.efetuarLogin('admin');
//db.efetuarLogoff();
db.incluirRegistro();