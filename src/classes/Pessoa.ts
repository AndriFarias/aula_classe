
type TipoPessoa = "Fisica" | "Juridica";
export class Pessoa {
    // atributos da classe pessoa


    nome: string;
    endereco:string;
    telefone:string;
    tipo: TipoPessoa;
    

    // metodo construtor
    constructor(nome: string, endereco:string,telefone:string, tipo:TipoPessoa) {
        // this referencia o objeto em questao
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.tipo = tipo;
        
    }

   /* fazerAniversario() {
        this.idade = this.idade + 1;
        console.log(this.nome + " fez aniversário!");
    }*/
}

