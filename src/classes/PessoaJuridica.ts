import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{
    cnpj: string;
    dataAbertura:string;
    
    constructor(nome:string,endereco:string,telefone:string,cnpj:string,dataAbertura:string){
        super(nome,endereco,telefone,"Juridica");

        this.cnpj = cnpj;
        this.dataAbertura = dataAbertura;
    }
}