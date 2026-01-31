const alunos = ["Ronaldo", "Jane", "Cassiano", "Esther", "Patrick", "Antônia", "Bruno", "Tereza", "Fabiano", "Sofia"];

const alunosExaminados = alunos.map(function(aluno) {
    return {
        nome: aluno,
        nota: Math.round(Math.random() * 100) / 10
    }
});

function alunosAprovados(aluno) {
    return aluno.nota >= 6
};

//Apenas para comparativo
console.log(alunosExaminados);

const aprovados = alunosExaminados.filter(alunosAprovados);

console.log(aprovados);