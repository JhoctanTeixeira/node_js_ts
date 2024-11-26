import { Service } from "../services/service";
import { Inject } from "../src/inject";

export class Client {

    @Inject('service') private srv : Service;

    exibir(): void {
        this.srv.mostrar();
    }
}