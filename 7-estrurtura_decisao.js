/*
===========================================================
Arquivo: ifelse.js
Assunto: Estruturas Condicionais (if, else if, else)
===========================================================

O `if` é usado para executar blocos de código apenas se a condição for verdadeira.

-----------------------------------------------------------
1️⃣ if simples
-----------------------------------------------------------
let idade = 18;
if (idade >= 18) {
  console.log("Pode dirigir!");
}

-----------------------------------------------------------
2️⃣ if/else
-----------------------------------------------------------
let hora = 13;
if (hora < 12) {
  console.log("Bom dia!");
} else {
  console.log("Boa tarde!");
}

-----------------------------------------------------------
3️⃣ if / else if / else
-----------------------------------------------------------
let nota = 5;
if (nota >= 9) {
  console.log("Excelente!");
} else if (nota >= 7) {
  console.log("Aprovado!");
} else {
  console.log("Reprovado!");
}

-----------------------------------------------------------
4️⃣ if aninhado e encadeado
-----------------------------------------------------------
let usuario = "admin";
let senha = "1234";
if (usuario === "admin") {
  if (senha === "1234") {
    console.log("Acesso permitido!");
  } else {
    console.log("Senha incorreta!");
  }
}
  if (usuario === "admin") {
  if (senha === "1234") {
    console.log("Acesso permitido!");
  } else {
    console.log("Senha incorreta!");
  }
}

-----------------------------------------------------------
5️⃣ Condições booleanas
-----------------------------------------------------------
let ativo = true;
if (ativo) {
  console.log("Usuário ativo!");
}

-----------------------------------------------------------
🔟 Boas práticas
-----------------------------------------------------------
✅ Use `===` em comparações.  
✅ Evite ifs muito aninhados (use funções para clareza).  
✅ Se possível, prefira ternário para condições simples.  

*/
