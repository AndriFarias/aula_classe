import { Pessoa } from "./Pessoa";

export class PessoaFisica extends Pessoa {
    cpf:string;
    dataNascimento: string;
    sexo:string;


    constructor(nome:string,endereco:string,telefone:string, cpf:string,
        dataNascimento:string, sexo:string){
        super(nome,endereco,telefone,"Fisica");

        this.cpf = cpf;
        this.dataNascimento = dataNascimento;
        this.sexo = sexo;

    }

}