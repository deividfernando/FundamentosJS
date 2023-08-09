// parâmetros de função

function Soma(num1, num2) {
    return num1 + num2;
}

console.log(Soma(2,2));
console.log(Soma(500,125));
console.log(Soma(-168,945));

// parametros x argumentos

function NomeIdade(nome, idade) {
    return `Meu nome é ${nome} e minha idade ${idade}`;
}

console.log(NomeIdade('Deivid', 34));

function Multiplica(num1 = 1, num2 = 1) {
    return num1 * num2;
}

console.log(Multiplica(Soma(2,3), Soma(4,5)));
console.log(Multiplica(Soma(2,3)));