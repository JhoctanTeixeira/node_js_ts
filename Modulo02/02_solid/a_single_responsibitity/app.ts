import { Cliente } from "./cliente2";
import { Registro } from "./registro";

let cliente = new Cliente('Jose Moraes');
let registro = new Registro();
registro.salvar(cliente);