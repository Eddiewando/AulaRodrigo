/*
===========================================================
Exercícios Práticos - For
===========================================================
*/

// 1. Use um for para imprimir números de 1 a 10.

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

// 2. Use um for para imprimir números pares de 0 a 20.

for (let i = 0; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }}

// 3. Use um for para imprimir números ímpares de 1 a 15.

for (let i = 1; i <= 15; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

// 4. Calcule a soma dos números de 1 a 100 usando for.

let soma = 0; 

for (let i = 1; i <= 100; i++) {
  soma = soma + i; 
}

console.log(soma);

// 5. Crie um array com 5 frutas e percorra com for exibindo cada uma.

const frutas = ['maçã', 'banana', 'laranja', 'uva', 'morango'];

for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}


// 6. Crie um for que mostre a tabuada do 7.

const numero = 7;

for (let i = 1; i <= 10; i++) {
  const resultado = numero * i;
  console.log(`${numero} x ${i} = ${resultado}`);
}


// 7. Use um for para percorrer uma string e exibir cada caractere.

const palavra = "JavaScript";

for (let i = 0; i < palavra.length; i++) {
  console.log(palavra[i]);
}

// 8. Use um for decrescente para contar de 10 até 1.

for (let i = 10; i >= 1; i--) {
  console.log(i);
}

// 9. Peça para o aluno prever o resultado:
// for (let i = 0; i < 5; i++) {
//   console.log("i =", i);
// }


// 10. Crie um for que calcule o fatorial de 5.

const numero = 5;
let fatorial = 1;

for (let i = 1; i <= numero; i++) {
  fatorial = fatorial * i; // ou fatorial *= i;
}

console.log(`O fatorial de ${numero} é ${fatorial}`);
