//dividindo com slice()
const alunos = [
    'Paulo', 'John', 'Ana',
    'Maria', 'João', 'Ana Clara',
    'Diana', 'Rayanne', 'Claudia',
    'Josef', 'Veigh', 'Antoniel'
];
const sala1 = alunos.slice(0, 6);
const sala = alunos.slice(0, alunos.length /2);
const sala2 = alunos.slice(alunos.length/2);
console.log("Sala 1, Turma 503A: " + sala1);
console.log("Sala 2, Turma 503B: " + sala2);

//Alterando com splice()
const novaTurma = [
    'Paulo', 'John', 'Ana',
    'Antonio', 'Benedito', 'Raimundo'
];
novaTurma.splice(2,5, "Arthur");
console.log(novaTurma);

//Conacatenando Arrays
//junte sala1 e 2;
const sala3 = sala1.concat(sala2);
console.log(sala3);

//lista com duas dimensões
const alunosTurmaNova = [
    'Claudia', 'José', 'Veronica', 'Antonieta'
];
const mediaTurmaNova = [
    10, 8, 6.5, 4.75
];
const listaAlunosEMedia = [alunosTurmaNova, mediaTurmaNova];
console.log(listaAlunosEMedia);
//acessando item da lista;
console.log(`Aluno ${listaAlunosEMedia[0][1]}, Média ${listaAlunosEMedia[1][0]}`);


