// tipo de dado
// booleanos

// conversão implicita

const numero = 456;
const numeroString = '456';

console.log(numero == numeroString);

console.log(numero + numeroString);


// conversão explicita
//Number()
//String()
//.toString()

console.log(numero + Number(numeroString))

const stringNumero = '456a'

console.log(numero + Number(stringNumero));

let telefone = 12341234;
console.log("O telefone é " + String(telefone));

let usuarioConectado = false;
console.log(String(usuarioConectado));
usuarioConectado = true;
console.log(String(usuarioConectado));