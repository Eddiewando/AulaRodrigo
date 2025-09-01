/*
===========================================================
Exercícios Práticos - forEach
===========================================================
*/

// 1. Crie um array com 5 nomes e exiba cada nome no console usando forEach.

const nomes = ['João', 'Maria', 'Pedro', 'Ana', 'Carlos'];

nomes.forEach(nome => {
  console.log(nome);
});

// 2. Crie um array com números e exiba o dobro de cada um usando forEach.

const numeros = [1, 2, 3, 4, 5];

numeros.forEach(numero => {
  const dobro = numero * 2;
  console.log(dobro);
});

// 3. Crie um array com frutas e exiba a posição (índice) de cada fruta usando forEach.

const frutas = ['maçã', 'banana', 'laranja', 'uva'];

frutas.forEach((fruta, indice) => {
  console.log(`A fruta ${fruta} está na posição ${indice}.`);
});

// 4. Some todos os números de um array usando forEach e exiba o resultado.

const numeros = [10, 20, 30, 40, 50];
let soma = 0; 

numeros.forEach(numero => {
  soma += numero; 
});

console.log(`A soma total dos números é: ${soma}`);

// 5. Conte quantas palavras em um array possuem mais de 5 letras usando forEach.

const palavras = ['casa', 'computador', 'sol', 'programação', 'lua', 'janela'];
let contador = 0; 

palavras.forEach(palavra => {
  if (palavra.length > 5) {
    contador++; 
  }
});

console.log(`Há ${contador} palavras com mais de 5 letras.`);

// 6. Crie um array de objetos (nome, idade) e exiba apenas os nomes usando forEach.

const pessoas = [
  { nome: 'Ana', idade: 25 },
  { nome: 'Bruno', idade: 30 },
  { nome: 'Carla', idade: 22 },
  { nome: 'Daniel', idade: 45 }
];

pessoas.forEach(pessoa => {
  console.log(pessoa.nome);
});

// 7. Crie um array de preços e exiba apenas os que forem maiores que 50 usando forEach.

const precos = [25.50, 60.00, 15.75, 80.25, 45.99];

precos.forEach(preco => {
  if (preco > 50) {
    console.log(preco);
  }
});

// 8. Crie um array de strings e exiba todas em letras maiúsculas usando forEach.

const palavras = ['javascript', 'web', 'programação', 'código'];

palavras.forEach(palavra => {
  console.log(palavra.toUpperCase());
});

// 9. Crie um array de números e exiba apenas os pares usando forEach.

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numeros.forEach(numero => {
  if (numero % 2 === 0) {
    console.log(numero);
  }
});

// 10. Crie um array de notas e exiba “Aprovado” para notas >= 7 e “Reprovado” para as demais usando forEach.


const notas = [8.5, 6.0, 7.5, 4.0, 9.2, 5.8];


notas.forEach(nota => {
  if (nota >= 7) {
    console.log(`Nota: ${nota} - Aprovado`);
  } else {
    console.log(`Nota: ${nota} - Reprovado`);
  }
});