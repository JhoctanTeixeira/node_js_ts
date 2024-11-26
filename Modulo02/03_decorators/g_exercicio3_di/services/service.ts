import { Injectable } from "../src/injectable";

@Injectable('service')
export class Service {
    public mostrar() : void {
        console.log('Classe Service injetada apropriadamente');
    }
}