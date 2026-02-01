"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function multiplicacao(multiplicando, multiplicador) {
    let produto = multiplicando * multiplicador;
    return produto;
}
function saudacao(nome) {
    let saudacao = "Olá " + nome;
    return saudacao;
}
const primeiroNumero = 9;
const segundoNumero = 7;
const nome = "Gustavo";
console.log(saudacao(nome));
console.log(`A multiplicação de ${primeiroNumero} por ${segundoNumero} resulta em ${multiplicacao(primeiroNumero, segundoNumero)}`);
//# sourceMappingURL=main.js.map