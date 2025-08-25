/*
===========================================================
Arquivo: reduce.js
Assunto: Método reduce em JavaScript
===========================================================
*/

// -------------------------------
// 1️⃣ O que é o reduce?
// -------------------------------
// O método `reduce` reduz um array a um único valor,
// aplicando uma função acumuladora em cada elemento.

// Sintaxe:
let numeros = [1, 2, 3, 4];
let soma = numeros.reduce((acumulador, valor) => acumulador + valor, 0);

console.log(soma); // 10

// -------------------------------
// 2️⃣ Callback do reduce
// -------------------------------
// Recebe:
// - acumulador: valor acumulado até o momento
// - elemento: valor atual do array
// - índice: posição
// - array: o array original

let multiplicacao = numeros.reduce((acum, n) => acum * n, 1);
console.log(multiplicacao); // 24

// -------------------------------
// 3️⃣ Quando usar reduce?
// -------------------------------
// - Somar valores
// - Multiplicar valores
// - Contar elementos
// - Agrupar em objetos
// - Transformar arrays em valores únicos
