//declaração do array
const notas = [10, 8.5, 6.0, 5.2];

//com function.
function calculaMedia(a, b, c, d){
    return (a + b + c + d) / 4;
}
console.log(calculaMedia(notas[0], notas[1], notas[2], notas[3]));

//com arrow function.
const media = (a, b, c, d) => (a + b + c + d) / notas.length;
console.log(media(notas[0], notas[1], notas[2], notas[3]));

//add items lista. (push)
//declarando lista.
const listaNotas = [];
listaNotas.push(10, 8.5, 6.0, 10); //push add itens no final na lista.
console.log(listaNotas);
console.log(media(listaNotas[0], listaNotas[1], listaNotas[2], listaNotas[3]));

//removendo itens de uma lista. (pop)
const listaNotas2 = [10, 8.5, 6.0, 8, 10];
listaNotas2.pop(); //remove item no final da lista;
console.log(listaNotas2);
console.log(media(listaNotas2[0], listaNotas2[1], listaNotas2[2], listaNotas2[3]));