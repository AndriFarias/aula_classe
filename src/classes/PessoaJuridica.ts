import { Pessoa } from "./Pessoa";

export class PessoaJuridica extends Pessoa{
    private cnpj: string;
    private dataAbertura:string;
    
    constructor(nome:string,endereco:string,telefone:string,cnpj:string,dataAbertura:string){
        super(nome,endereco,telefone,"Juridica");

        this.cnpj = cnpj;
        this.dataAbertura = dataAbertura;
    }
}