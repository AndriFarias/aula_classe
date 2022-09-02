
type TipoPessoa = "Fisica" | "Juridica";
export class Pessoa {
    // atributos da classe pessoa


    private nome: string;
    private endereco:string;
    private telefone:string;
    
    

    // metodo construtor
    constructor(nome: string, endereco:string,telefone:string) {
        // this referencia o objeto em questao
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        
        
    }

    obterNome():string{
        return this.nome;
    }

    atribuirNome(nome: string):void{
        this.nome = nome;
    }

    obterEndereco():string{
        return this.endereco;
    }

    atribuirEndereco(endereco: string):void{
        this.endereco
    }

    obterTelefone():string{
        return this.telefone;
    }

    atribuirTelefone(telefone:string):void{
        this.telefone = telefone;
    }

   /* fazerAniversario() {
        this.idade = this.idade + 1;
        console.log(this.nome + " fez aniversário!");
    }*/
}

