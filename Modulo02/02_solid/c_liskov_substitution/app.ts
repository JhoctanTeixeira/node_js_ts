import { Cliente } from "./cliente";
import { ContaPrevidencia } from "./contaprevidencia";

let cliente = new Cliente(new ContaPrevidencia());
cliente.efetuarOperacao(1000);