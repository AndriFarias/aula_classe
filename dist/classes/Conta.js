"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conta = void 0;
var Conta = /** @class */ (function () {
    function Conta(agencia, numero, cliente) {
        this.saldo = 0;
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
    }
    Object.defineProperty(Conta.prototype, "obterCliente", {
        get: function () {
            return this.cliente;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Conta.prototype, "atribuirCliente", {
        set: function (cliente) {
            this.cliente = cliente;
        },
        enumerable: false,
        configurable: true
    });
    Conta.prototype.obterAgencia = function () {
        return this.agencia;
    };
    Conta.prototype.atribuirAgencia = function (ag) {
        this.agencia = ag;
    };
    Conta.prototype.obterNumero = function () {
        return this.numero;
    };
    Conta.prototype.atribuirNumero = function (num) {
        this.numero = num;
    };
    Conta.prototype.depositar = function (valor) {
        if (valor > 0) {
            this.saldo += valor;
        }
    };
    Conta.prototype.sacar = function (valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor;
        }
    };
    Conta.prototype.mostrarSaldo = function () {
        console.log("Saldo Atual: R$ ".concat(this.saldo.toFixed(2)));
    };
    /*transferir(valor:number,recebe:Conta): void {
        
        let cli :string = this.cliente.nome;
        
        let rece :string = recebe.cliente.nome;

        if (this.saldo >= valor) {
            this.sacar(valor);
            recebe.depositar(valor);

            console.log(`cliente ${cli} transferiu ${valor} para ${rece}`);

        }else{
            console.log("Não é possivel fazer essa operação");
        }

    }*/
    Conta.prototype.trasferir = function (valor, conta) {
        if (this.saldo >= valor && valor > 0) {
            this.sacar(valor);
            conta.depositar(valor);
        }
        else {
            console.log("Não é possivel fazer essa operação");
        }
    };
    return Conta;
}());
exports.Conta = Conta;
