/*
===========================================================
Arquivo: lacos_for.js
Assunto: Estrutura de repetição for
===========================================================

O `for` é usado quando sabemos o número de repetições.

Sintaxe:
for (inicialização; condição; incremento) {
  // código
}

-----------------------------------------------------------
1️⃣ Exemplo simples
-----------------------------------------------------------
for (let i = 1; i <= 5; i++) {
  console.log("Número:", i);
}

-----------------------------------------------------------
2️⃣ Decremento
-----------------------------------------------------------
for (let i = 5; i > 0; i--) {
  console.log(i);
}

-----------------------------------------------------------
3️⃣ Loop sobre arrays
-----------------------------------------------------------
let frutas = ["maçã", "banana", "uva"];
for (let i = 0; i < frutas.length; i++) {
  console.log(frutas[i]);
}

-----------------------------------------------------------
🔟 Boas práticas
-----------------------------------------------------------
✅ Prefira `for...of` quando for apenas percorrer arrays.  
✅ Evite loops infinitos.  
✅ Use nomes descritivos para índices.  

*/
