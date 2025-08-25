/*
===========================================================
Arquivo: lacos_forin.js
Assunto: Estrutura de repetição for...in
===========================================================

O `for...in` percorre propriedades de objetos.

-----------------------------------------------------------
1️⃣ Exemplo com objeto
-----------------------------------------------------------
let pessoa = { nome: "Ana", idade: 25 };
for (let chave in pessoa) {
  console.log(chave, pessoa[chave]);
}

-----------------------------------------------------------
2️⃣ Exemplo com array (pega índices)
-----------------------------------------------------------
let frutas = ["maçã", "banana"];
for (let i in frutas) {
  console.log(i, frutas[i]);
}

-----------------------------------------------------------
🔟 Boas práticas
-----------------------------------------------------------
✅ Use for...in para objetos.  
⚠️ Para arrays prefira for...of.  

*/
