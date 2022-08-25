import { Conta } from "./Conta";
import { Pessoa } from "./Pessoa";

export class ContaCorrente extends Conta {
    constructor(agencia: number, numero: number, cliente: Pessoa){
        super(agencia,numero,cliente,"Corrente");
      
    }
    
    
    
}