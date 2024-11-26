export class Cliente {

    constructor(private _nome: string) {}

    public get nome() : string {
        return this._nome;
    }
    public set nome(v : string) {
        this._nome = v;
    }
    
    public salvar() : void {
        console.log('Cliente armazenado');
    }
}

/*
O princípio single responsibility estabelece que as
classes devem fazer somente aquilo que propõe. No exemplo,
a operação salvar é função de outra classe.
*/