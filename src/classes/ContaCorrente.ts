import { Conta } from "./Conta";
import { Pessoa } from "./Pessoa";

export class ContaCorrente extends Conta {
    constructor(agencia: number, numero: number, cliente: Pessoa){
        super(agencia,numero,cliente);
      
    }
    
    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.aplicarTxDeSaque(valor)
        }
        
    }

    private aplicarTxDeSaque(valor:number):void{
        const tx = 0.01;
        this.saldo = this.saldo - (valor * tx)
    }
    
    
}