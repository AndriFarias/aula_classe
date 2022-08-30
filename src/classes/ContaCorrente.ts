import { Conta } from "./Conta";
import { Pessoa } from "./Pessoa";

export class ContaCorrente extends Conta {
    constructor(agencia: number, numero: number, cliente: Pessoa){
        super(agencia,numero,cliente,"Corrente");
      
    }
    
    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
            this.aplcarTxDeSaque(valor)
        }
        
    }

    aplcarTxDeSaque(valor:number):void{
        const tx = 0.01;
        this.saldo = this.saldo - (valor * tx)
    }
    
    
}