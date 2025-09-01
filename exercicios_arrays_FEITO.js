/*
===========================================================
Exercícios Práticos - Arrays
===========================================================
*/

// 1. Crie um array com 5 elementos e exiba o terceiro.

const meuArray = ["elemento1", "elemento2", "elemento3", "elemento4", "elemento5"];

console.log(meuArray[2]);

// 2. Adicione um elemento ao final do array.

meuArray.push("elemento6");

// 3. Remova o primeiro elemento do array.

meuArray.shift();

// 4. Use map para transformar todos os elementos em strings maiúsculas.

const arrayMaiusculo = meuArray.map(elemento => elemento.toUpperCase());

console.log(arrayMaiusculo);

// 5. Use filter para criar um novo array apenas com números pares.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const numerosPares = numeros.filter(numero => numero % 2 === 0);

console.log(numerosPares);

// 6. Use reduce para somar todos os números de um array.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const somaTotal = numeros.reduce((acumulador, numeroAtual) => acumulador + numeroAtual, 0);

console.log(somaTotal);


// 7. Use find para encontrar o primeiro elemento maior que 10.

const numeros = [5, 8, 12, 4, 15, 20];

const primeiroMaiorQueDez = numeros.find(numero => numero > 10);

console.log(primeiroMaiorQueDez);

// 8. Ordene um array de números em ordem crescente.

const numeros = [25, 10, 5, 20, 15];

numeros.sort((a, b) => a - b);

console.log(numeros);

// 9. Inverta a ordem dos elementos de um array.

const letras = ['a', 'b', 'c', 'd', 'e'];

letras.reverse();

console.log(letras);


// 10. Faça a troca de valores entre dois índices usando destructuring.

const frutas = ['maçã', 'banana', 'laranja', 'uva'];

[frutas[0], frutas[2]] = [frutas[2], frutas[0]];

console.log(frutas);
