import { Conta} from "./Conta";
import { Pessoa } from "./Pessoa";

export class ContaPoupanca extends Conta{
    constructor(agencia: number, numero: number, cliente: Pessoa, valor:number){
        super(agencia,numero,cliente);

        this.depositar(valor);
    }

    

    private render():void{
        this.saldo *= 1.01;
    }
}