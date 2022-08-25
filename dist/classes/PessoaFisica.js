"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaFisica = void 0;
var Pessoa_1 = require("./Pessoa");
var PessoaFisica = /** @class */ (function (_super) {
    __extends(PessoaFisica, _super);
    function PessoaFisica(nome, endereco, telefone, cpf, dataNascimento, sexo) {
        var _this = _super.call(this, nome, endereco, telefone, "Fisica") || this;
        _this.cpf = cpf;
        _this.dataNascimento = dataNascimento;
        _this.sexo = sexo;
        return _this;
    }
    return PessoaFisica;
}(Pessoa_1.Pessoa));
exports.PessoaFisica = PessoaFisica;
