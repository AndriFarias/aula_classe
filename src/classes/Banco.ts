import { Pessoa } from "./Pessoa";

export class Banco {
    private _nome:string;
    private _url :string;
    private _dataFundacao:string;
    private _fundador!:Pessoa;
    private ativo:boolean;

    constructor(nome:string, dataFundacao:string){
        this._nome = nome;
        this._url = "https://";
        this._dataFundacao = dataFundacao;
        this.ativo = true;
    }

    get nome(){
        return this._nome;
    }
    set nome(n:string){
        this._nome = n;
    }

    get url(){
        return this._url;
    }

    set url(url:string){
        if (url === ''){
            console.log('String não pode ser vazia');
            return;
        }
        this._url = url;
    }

    get dataFundacao(){
        return this._dataFundacao;
    }

    set dataFundacao(data :string){
        this._dataFundacao = data;
    }
    get fundador(){
        return this._fundador;
    }

    set fundador(fundador:Pessoa){
        this._fundador = fundador;
    }
}