// const alunos = [
//     'Claudia', 'José', 'Veronica', 'Antonieta'
// ];
// const medias = [
//     10, 8, 6.5, 4.75
// ];
// const listaAlunosEMedias = [alunos, medias];

// function procuraAluno(aluno){
//     if(listaAlunosEMedias[0].includes(aluno)){
//         const indice = listaAlunosEMedias[0].indexOf(aluno);
//         const media = listaAlunosEMedias[1][indice];
//         console.log(`O aluno ${aluno}, tem média ${media}`);
//     }
//     else{
//         console.log(`O aluno ${aluno} não está cadastrado!`);
//     }
// }

// procuraAluno('Claudia');
// procuraAluno('Diana');

const alunos = [
    'Claudia', 'José', 'Veronica', 'Antonieta'
];
const medias = [
    10, 8, 6.5, 4.75
];
const listaAlunosEMedias = [alunos, medias];

function procuraAluno(aluno){
    if(listaAlunosEMedias[0].includes(aluno)){
        const [alunos, medias] = listaAlunosEMedias;
        const indice = alunos.indexOf(aluno);
        const media = medias[indice];
        console.log(`O aluno ${aluno}, tem média ${media}`);
    }
    else{
        console.log(`O aluno ${aluno} não está cadastrado!`);
    }
}

procuraAluno('Claudia');
procuraAluno('Diana');

//for classico
let numeros = [1, 2, 3, 4, 5, 6];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

//media for
let soma = 0;
const listaNumeros = [100, 200, 300, 400, 500];
for (let i = 0; i < listaNumeros.length; i++) {
    soma += listaNumeros[i];
}
const media = soma / listaNumeros.length;

console.log(`A média é igual a ${media}`);

//for of
for (const nota of numeros) {
    soma += nota;
}
const media1 = soma / numeros.length;
console.log(`A média é igual a ${media1}`);


