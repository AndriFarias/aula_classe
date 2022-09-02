"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Banco = void 0;
var Banco = /** @class */ (function () {
    function Banco(nome, dataFundacao) {
        this._nome = nome;
        this._url = "https://";
        this._dataFundacao = dataFundacao;
        this.ativo = true;
    }
    Object.defineProperty(Banco.prototype, "nome", {
        get: function () {
            return this._nome;
        },
        set: function (n) {
            this._nome = n;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Banco.prototype, "url", {
        get: function () {
            return this._url;
        },
        set: function (url) {
            if (url === '') {
                console.log('String não pode ser vazia');
                return;
            }
            this._url = url;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Banco.prototype, "dataFundacao", {
        get: function () {
            return this._dataFundacao;
        },
        set: function (data) {
            this._dataFundacao = data;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Banco.prototype, "fundador", {
        get: function () {
            return this._fundador;
        },
        set: function (fundador) {
            this._fundador = fundador;
        },
        enumerable: false,
        configurable: true
    });
    return Banco;
}());
exports.Banco = Banco;
