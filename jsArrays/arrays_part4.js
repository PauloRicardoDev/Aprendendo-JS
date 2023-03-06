//foreach
const notas = [7.7, 6.5, 9.8, 8.];

let somaNotas = 0;

notas.forEach(function (nota, indice, array) {
    somaNotas += nota;
    console.log(indice);
    console.log(array);
});

console.log(somaNotas);
console.log("------------------------");
//calback função dentro de outra.
const nome = [
    'Paulo', 'Ricardo', 'Maria', 'João'
];

nome.forEach(nome => console.log(nome));
nome.forEach(imprimirNome)

function imprimirNome(nome) {
    console.log(nome)
}

//Map
const notasAlunos = [7.7, 6.5, 9.8, 8];
const notasAtualizadas = notasAlunos.map((nota) => {
    return nota + 1 >= 10 ? 10 : nota + 1;
});
console.log(notasAtualizadas);

//Alterando listas com map
const nomePadronizados = nome.map((nome) => nome.toLocaleUpperCase());
console.log(nomePadronizados);

