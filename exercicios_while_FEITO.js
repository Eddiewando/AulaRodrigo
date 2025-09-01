/*
===========================================================
Exercícios Práticos - While
===========================================================
*/

// 1. Use um while para imprimir números de 1 a 10.

let i = 1;

while (i <= 10) {
  console.log(i);
  i++;
}

// 2. Use um while para imprimir números pares até 20.

let numero = 2;

while (numero <= 20) {
  console.log(numero);
  numero += 2;
}

// 3. Some números de 1 a 100 usando while.

let contador = 1;
let soma = 0;

while (contador <= 100) {
  soma = soma + contador;
  contador++;
}

console.log("A soma dos números de 1 a 100 é: " + soma);


// 4. Crie um while que conte de 10 até 1.

let i = 10;

while (i >= 1) {
  console.log(i);
  i--;
}

// 5. Crie um while que peça senha até ser igual a "1234".


let senhaCorreta = '1234';
let senhaDigitada = '';

while (senhaDigitada !== senhaCorreta) {
  senhaDigitada = 'senhaErrada'; 
  if (senhaDigitada === 'senhaErrada') {
    console.log('Senha incorreta. Tente novamente.');
    senhaDigitada = senhaCorreta;
  }
}

console.log('Senha correta! Acesso liberado.');

// 6. Crie um while que calcule a tabuada do 5.

let numero = 5;
let contador = 1;

console.log("Tabuada do 5:");

while (contador <= 10) {
  let resultado = numero * contador;
  console.log(numero + " x " + contador + " = " + resultado);
  contador++;
}

// 7. Crie um while que exiba os caracteres da string "JavaScript".

let palavra = "JavaScript";
let i = 0;

while (i < palavra.length) {
  console.log(palavra[i]);
  i++;
}

// 8. Use while para calcular o fatorial de 5.

let numero = 5;
let fatorial = 1;

console.log("Calculando o fatorial de " + numero + ":");

while (numero > 0) {
  fatorial = fatorial * numero;
  numero--;
}

console.log("O resultado é: " + fatorial);

// 9. Peça para o aluno prever o resultado:
// let i = 0;
// while (i < 3) {
//   console.log(i);
//   i++;
// }


// 10. Crie um while que só termina quando um número aleatório for 7.

let numeroSorteado = 0;
let tentativas = 0;

console.log("Tentando encontrar o número 7...");

while (numeroSorteado !== 7) {
  numeroSorteado = Math.floor(Math.random() * 10) + 1;
  tentativas++;
  console.log(`Tentativa ${tentativas}: O número sorteado foi ${numeroSorteado}.`);
}

console.log(`\nParabéns! O número 7 foi encontrado na ${tentativas}ª tentativa.`);

