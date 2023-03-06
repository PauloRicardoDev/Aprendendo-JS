function soma(){
    return 2 + 5;
}
console.log(soma());

// função reaproveitável
function adicao(a, b){
    return a + b;
}
console.log(adicao(2, 5));
console.log(adicao(55665, -5555));
console.log(adicao(1.9, 87984564));

function dadosPessoa(nome, idade){
    return `Meu nome é ${nome} e tenho ${idade} anos`;
}
console.log(dadosPessoa('João', 22));
console.log(dadosPessoa('Paulo', 62));
console.log(dadosPessoa('João Paulo', 10));

function multiplicacao(a, b){
    return `O Resulatado da multipĺicação de ${a} X ${b} = ` + a * b;
}
console.log(multiplicacao(adicao(2, 5), 2));
console.log(multiplicacao(adicao(2, 5), adicao(9,9)));

function multiplicacao2(a = 1, b = 1){
    return `O Resulatado da multipĺicação de ${a} X ${b} = ` + a * b;
}
console.log(multiplicacao2(adicao(2, 5)));
console.log(multiplicacao2(adicao(9,9)));

