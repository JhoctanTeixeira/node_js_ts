export interface OperacoesConta {
    efetuarSaque(valor: number) : void;
    efetuarDeposito(valor: number) : void;
    calcularReajuste(): number;
    mostrarSaldo(): number;
}

/*
    O principio da segregação estabelece que cada operação deve fazer parte de uma interface
    diferente, significando que a implementação ocorrerá somente se for necessário.
*/