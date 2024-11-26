import { find } from "lodash";

export class Container {
    public providers : { [key: string] : any} = {};

    // metodo usadop para recuperar uma instância com base em um token
    public resolve(token: string) {
        const matcherProvider = find(this.providers, (provider, key) => key === token);
        if(matcherProvider) {
            return matcherProvider;
        } else {
            throw new Error(`Provider não localizado: ${token}`);
        }
    }
}

export const container = new Container();