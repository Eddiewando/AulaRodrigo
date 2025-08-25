/*
===========================================================
Exercícios Práticos - If/Else
===========================================================
*/

// 1. Crie uma variável idade. Se idade >= 18 exiba "Maior de idade", senão "Menor de idade".
let idade = 23; 
if (idade >= 18) {
  console.log("Maior de idade");
} else {
  console.log("Menor de idade");
}

// 2. Crie uma variável hora. Se hora < 12 → "Bom dia", senão → "Boa tarde".
let hora = 14; 

if (hora < 12) {
  console.log("Bom dia");
} else {
  console.log("Boa tarde");
}

// 3. Crie uma variável nota. Se >= 7 → "Aprovado", senão → "Reprovado".
let nota = 5;
if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// 4. Crie uma variável temperatura. Se >= 30 → "Quente", se >= 20 → "Agradável", senão → "Frio".
let temperatura = 25; 
if (temperatura >= 30) {
  console.log("Quente");
} else if (temperatura >= 20) {
  console.log("Agradável");
} else {
  console.log("Frio");
}

// 5. Verifique se um número é par ou ímpar.
let numero = 7; 

if (numero % 2 === 0) {
  console.log("O número é par.");
} else {
  console.log("O número é ímpar.");

// 6. Crie duas variáveis usuario e senha. Verifique se usuario == "admin" e senha == "1234".
let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Acesso concedido: Bem-vindo, administrador!");
} else {
  console.log("Acesso negado: Usuário ou senha incorretos.");
}

// 7. Crie uma condição que só exiba mensagem se uma variável ativo == true.


// 8. Crie um programa que verifique se ano é bissexto (divisível por 4 e não por 100, ou divisível por 400).

let ativo = false; 
if (ativo) {
  console.log("O usuário está ativo no sistema.");
}
// 9. Peça para o aluno prever o resultado:
// let x = 5;
// if (x > 10) { console.log("Maior que 10"); }
// else if (x > 3) { console.log("Maior que 3"); }
// else { console.log("Outro caso"); }


// 10. Crie um programa que receba 3 notas e calcule a média.
// Se média >= 7 → "Aprovado"
// Se média >= 5 → "Recuperação"
// Senão → "Reprovado".
