function multiplicacao(multiplicando: number, multiplicador: number): number {
    let produto: number = multiplicando * multiplicador;
    return produto;
}

function saudacao(nome: string): string {
    let saudacao: string = "Olá " + nome;
    return saudacao;
}

const primeiroNumero: number = 9;
const segundoNumero: number = 7;
const nome: string = "Gustavo";

console.log(saudacao(nome));
console.log(`A multiplicação de ${primeiroNumero} por ${segundoNumero} resulta em ${multiplicacao(primeiroNumero, segundoNumero)}`);