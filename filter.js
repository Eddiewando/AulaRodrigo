/*
===========================================================
Arquivo: filter.js
Assunto: Método filter em JavaScript
===========================================================
*/

// -------------------------------
// 1️⃣ O que é o filter?
// -------------------------------
// O método `filter` percorre o array e retorna um NOVO array
// contendo apenas os elementos que atendem a uma condição (true).

// Sintaxe:
let numeros = [1, 2, 3, 4, 5, 6];
let pares = numeros.filter(n => n % 2 === 0);

console.log(pares); // [2, 4, 6]

// -------------------------------
// 2️⃣ Função Callback
// -------------------------------
// Recebe até 3 parâmetros (valor, índice, array).
// Retorna true -> mantém o elemento
// Retorna false -> descarta o elemento

let nomes = ["Ana", "Carlos", "Bea", "Daniel"];
let nomesGrandes = nomes.filter(nome => nome.length > 3);

console.log(nomesGrandes); // ["Carlos", "Daniel"]

// -------------------------------
// 3️⃣ Diferença para map
// -------------------------------
// - filter: reduz a quantidade de elementos
// - map: transforma cada elemento
