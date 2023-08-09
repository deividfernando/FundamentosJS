const apresentarArrow = nome => `Meu nome é ${nome}`;

const soma = (num1, num2) => num1 + num2;

const somaNumPequenos = (num1, num2) => {
    if (num1 || num2 > 9) {
        return 'Somente números de 1 a 9';
    } else {
        return num1 + num2;
    }
}