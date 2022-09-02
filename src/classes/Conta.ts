import { Pessoa } from "./Pessoa";

type TipoConta = "Corrente" | "Poupança";


export class Conta {
    private agencia: number;
    private numero: number;
    private cliente: Pessoa;
    protected saldo: number = 0;
    

    constructor(agencia: number, numero: number, cliente: Pessoa) {
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
    

    }

    get obterCliente():Pessoa{
        return this.cliente;
    }

    set atribuirCliente(cliente:Pessoa){
        this.cliente = cliente;
    }

    obterAgencia():number{
        return this.agencia;
    }

    atribuirAgencia(ag :number):void{
        this.agencia = ag;
    }

    obterNumero():number{
        return this.numero;
    }

    atribuirNumero(num:number):void{
        this.numero = num;
    }

    depositar(valor: number): void {
        if (valor > 0) {
            this.saldo += valor;
        }
    }

    sacar(valor: number): void {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    }

    mostrarSaldo(): void {
        console.log(`Saldo Atual: R$ ${this.saldo.toFixed(2)}`);
    }

    /*transferir(valor:number,recebe:Conta): void {
        
        let cli :string = this.cliente.nome;
        
        let rece :string = recebe.cliente.nome;

        if (this.saldo >= valor) {
            this.sacar(valor);
            recebe.depositar(valor);

            console.log(`cliente ${cli} transferiu ${valor} para ${rece}`);

        }else{
            console.log("Não é possivel fazer essa operação");
        } 

    }*/

    trasferir(valor: number, conta:Conta):void {
        if (this.saldo >= valor && valor > 0){
            this.sacar(valor);
            conta.depositar(valor);
        }else{
            console.log("Não é possivel fazer essa operação");
        }
    }
}

