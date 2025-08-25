/*
===========================================================
Arquivo: lacos_forof.js
Assunto: Estrutura de repetição for...of
===========================================================

O `for...of` percorre valores de arrays, strings, etc.

-----------------------------------------------------------
1️⃣ Exemplo com array
-----------------------------------------------------------
let numeros = [10, 20, 30];
for (let n of numeros) {
  console.log(n);
}

-----------------------------------------------------------
2️⃣ Exemplo com string
-----------------------------------------------------------
for (let letra of "JS") {
  console.log(letra);
}

-----------------------------------------------------------
🔟 Boas práticas
-----------------------------------------------------------
✅ Use for...of quando precisar apenas dos valores.  
✅ Prefira for...in se precisar dos índices.  

*/
