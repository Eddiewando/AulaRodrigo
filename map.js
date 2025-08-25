/*
===========================================================
Arquivo: map.js
Assunto: Método map em JavaScript
===========================================================
*/

// -------------------------------
// 1️⃣ O que é o map?
// -------------------------------
// O método `map` percorre um array e retorna um NOVO array
// com os resultados da função callback aplicada a cada item.

// Sintaxe:
let numeros = [1, 2, 3];
let dobrados = numeros.map(n => n * 2);

console.log(dobrados); // [2, 4, 6]

// -------------------------------
// 2️⃣ Função Callback
// -------------------------------
// Recebe até 3 parâmetros (iguais ao forEach):
// - elemento: valor atual
// - índice: posição do valor
// - array: o array original

let nomes = ["Ana", "Bruno", "Carlos"];
let nomesMaiusculos = nomes.map((nome, i) => `${i} - ${nome.toUpperCase()}`);
console.log(nomesMaiusculos);

// -------------------------------
// 3️⃣ Diferença para forEach
// -------------------------------
// - map cria um novo array
// - forEach apenas executa ações, sem retorno

let resultadoForEach = numeros.forEach(n => n * 2);
console.log(resultadoForEach); // undefined
