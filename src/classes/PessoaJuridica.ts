import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{
    private cnpj: string;
    private dataAbertura:string;
    
    constructor(nome:string,endereco:string,telefone:string,cnpj:string,dataAbertura:string){
        super(nome,endereco,telefone);

        this.cnpj = cnpj;
        this.dataAbertura = dataAbertura;
    }

    obterCnpj():string{
        return this.cnpj;
    }

    atribuirCnpj(cnpj: string): void {
       this.cnpj = cnpj; 
    }

    obterDataAbertura():string{
        return this.dataAbertura;
    }

    atribuirDataAbertura(data:string):void{
        this.dataAbertura = data;
    }
}