//Filtrando elementos
const alunos = ['Paulo Ricard', 'João Pedro', 'Maria Silva', 'Carlos Gabriel'];
const medias = [8.5, 7.5, 6.5, 5];

const reprovados = alunos.filter((aluno, indice) => {
    return medias[indice] < 7;
});

console.log(reprovados);

//somando com reduce
const sala1 = [10, 8, 8.6, 5, 6.1, 9];
const sala2 = [10, 8, 8.6, 5, 6.1, 10, 8.4, 5];
const sala3 = [10, 8, 8.6, 5]

function calculaMedia (notas){
    const soma = notas.reduce((acumulador, nota) => {
        return acumulador + nota;
    }, 0);
    const media = soma / notas.length;
    return media;
}

console.log(calculaMedia(sala1));

//clonando com spread operator
const notas = [7, 7, 8, 9];

const novasNotas = [...notas, 10];

console.log(`As novas notas são ${novasNotas}`);
console.log(`As notas originais são ${notas}`);

//Set
const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];

const nomesAtualizados = [...new Set(nomes)];

console.log(nomesAtualizados);

