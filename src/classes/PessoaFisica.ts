import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa {
    private cpf:string;
    private dataNascimento: string;
    private sexo:string;


    constructor(nome:string,endereco:string,telefone:string, cpf:string,
        dataNascimento:string, sexo:string){
        super(nome,endereco,telefone);

        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;

    }

    obterCpf():String{
        return this.cpf;
    }

    obterDataNascimento():string{
        return this.dataNascimento;
    }

    atribuirDataNascimento(data :string):void{
        this.dataNascimento = data;
    }

    obterSexo():string{
        return this.sexo;
    }

    atribuirSexo(sexo:string):void{
        this.sexo =sexo;
    }

}