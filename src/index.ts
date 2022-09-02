// classe pessoa

import { Banco } from "./classes/Banco";
import { Conta } from "./classes/Conta";
import { ContaCorrente } from "./classes/ContaCorrente";
import { ContaPoupanca } from "./classes/ContaPoupanca";
import { Pessoa } from "./classes/Pessoa";
import { PessoaFisica } from "./classes/PessoaFisica";
// instanciando os objetos
const p1 = new PessoaFisica("Sergio","","", "000.000.000-00","", "M");
//const p2 = new Pessoa("Joao", 19, "000.000.000-00", "M");
//const p3 = new Pessoa("Kleber", 89, "000.000.000-00", "M");

// console.log(`${p1.nome} tem ${p1.idade} anos`);
// p1.fazerAniversario();
// console.log(`${p1.nome} agora tem ${p1.idade} anos`);

// console.log(`${p2.nome} tem ${p2.idade} anos`);
// p2.fazerAniversario();
// console.log(`${p2.nome} agora tem ${p2.idade} anos`);

// console.log(`${p3.nome} tem ${p3.idade} anos`);
// p3.fazerAniversario();
// console.log(`${p3.nome} agora tem ${p3.idade} anos`);

//const c1 = new Conta(123, 456, p1,"Corrente");
//const c2 = new Conta(461,9656, p2,"Poupança");
//const c3 = new Conta(888,466,p3, "Corrente");
// c1.mostrarSaldo();
//c1.depositar(100);
// c1.mostrarSaldo();
// c1.depositar(-200);
//c1.mostrarSaldo();
// c1.sacar(100);
//c1.mostrarSaldo();
//console.log(c1.cliente);
//c1.transferir(100,c2);
//c1.mostrarSaldo();
//c2.mostrarSaldo();
//c3.mostrarSaldo();

//const cc1 = new ContaCorrente(123,555,p1);
//const cp1 = new ContaPoupanca(311,888,p2,80);

//console.log(cc1 instanceof ContaCorrente);

const b1 = new Banco("Xubank","2010-10-20");
b1.nome = '';
console.log(b1); 


