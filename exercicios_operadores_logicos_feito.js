/*
===========================================================
Exercícios Práticos - Operadores Lógicos
===========================================================
*/

// 1. Crie p = true e q = false. Exiba p && q.
let p = true;
let q = false;


console.log(p && q); 

// 2. Exiba p || q.

console.log(p || q);

// 3. Exiba !p e !q.

console.log(!p);
console.log(!q);

// 4. Verifique se idade > 18 E temCarteira == true.
let idade = 18;
let temCarteira = false;

if (idade >= 18 && temCarteira === true) {
  console.log("Habilitado");
} else {
  console.log("Não Habilitado");
}

// 5. Use || para definir um valor padrão se uma variável for undefined.
let nomeUsuario

const nomeParaExibir = nomeUsuario || "Visitante";

console.log(nomeParaExibir); 


// 6. Teste (5 > 3 && 10 < 20).
console.log(5 > 3 && 10 < 20);

// 7. Teste (false || (true && true)).
console.log(false || (true && true));

// 8. Crie um if que só roda se usuario == "admin" E senha == "1234".
let usuario = "admin";
let senha = "1234";

if (usuario === "admin" && senha === "1234") {
  console.log("Acesso concedido: Bem-vindo, Administrador.");
} else {
  console.log("Acesso negado: Usuário ou senha incorretos.");
}

// 9. Crie uma expressão com !(nota >= 7).
let nota = 8.5;

if (!(nota >= 7)) {
  console.log("Aluno reprovado!");
} else {
  console.log("Aluno aprovado!");
}

// 10. Peça para o aluno prever o resultado de:
let x = false, y = true, z = false;
console.log(x || y && !z);
