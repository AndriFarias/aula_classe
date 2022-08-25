"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pessoa = void 0;
var Pessoa = /** @class */ (function () {
    // metodo construtor
    function Pessoa(nome, endereco, telefone, tipo) {
        // this referencia o objeto em questao
        this.nome = nome;
        this.endereco = endereco;
        this.telefone = telefone;
        this.tipo = tipo;
    }
    return Pessoa;
}());
exports.Pessoa = Pessoa;
