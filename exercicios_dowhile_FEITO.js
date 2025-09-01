/*
===========================================================
Exercícios Práticos - Do...While
===========================================================
*/

// 1. Use do...while para imprimir números de 1 a 5.

let i = 1;

do {
  console.log(i);
  i++;
} while (i <= 5);

// 2. Use do...while para pedir senha até ser "1234".

let senha;

do {
  senha = prompt("Digite a senha:");
} while (senha !== "1234");

alert("Senha correta!");

// 3. Use do...while para imprimir pares até 20.

let numero = 0;

do {
  console.log(numero);
  numero += 2;
} while (numero <= 20);


// 4. Use do...while para exibir uma mensagem pelo menos uma vez, mesmo que a condição seja falsa.

let numero = 10;

do {
  console.log("Esta mensagem será exibida pelo menos uma vez.");
  console.log(`O valor de 'numero' é ${numero}.`);
  numero++;
} while (numero < 5);

// 5. Crie um do...while que conte de 10 até 1.

let i = 10;

do {
  console.log(i);
  i--;
} while (i >= 1);


// 6. Crie um do...while que exiba os caracteres de uma string.

const palavra = "Hello";
let i = 0; 
do {
  console.log(palavra[i]);
  i++;
} while (i < palavra.length);

// 7. Use do...while para calcular soma de 1 a 100.

let numero = 1;
let soma = 0;

do {
  soma += numero; 
  numero++;       
} while (numero <= 100);

console.log(`A soma dos números de 1 a 100 é: ${soma}`);


// 8. Use do...while para gerar números aleatórios até sair 0.

let numeroAleatorio;
let tentativas = 0;

do {
  numeroAleatorio = Math.floor(Math.random() * 11);
  tentativas++;
  console.log(`Tentativa ${tentativas}: ${numeroAleatorio}`);
} while (numeroAleatorio !== 0);

console.log(`\nO número 0 foi gerado na ${tentativas}ª tentativa.`);


// 9. Peça para o aluno prever o resultado:
let i = 0;
 do {
 console.log(i);
 i++;
} while (i < 3);


// 10. Crie um do...while que calcule o fatorial de 6.

let numero = 6;
let fatorial = 1;

do {
  fatorial *= numero; 
  numero--;          
} while (numero > 0);

console.log(`O fatorial de 6 é ${fatorial}`);