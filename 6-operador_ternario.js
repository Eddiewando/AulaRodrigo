/*
===========================================================
Arquivo: operador_ternario.js
Assunto: Operador Condicional (Ternário) em JavaScript
===========================================================

O operador ternário é uma forma curta de escrever if/else.

Sintaxe:
condição ? valorSeVerdadeiro : valorSeFalso;

-----------------------------------------------------------
1️⃣ Exemplo simples
-----------------------------------------------------------
let idade = 20;
let status = idade >= 18 ? "Maior de idade" : "Menor de idade";
console.log(status); // "Maior de idade"

-----------------------------------------------------------
2️⃣ Usando em expressões
-----------------------------------------------------------
let nota = 7;
let resultado = nota >= 6 ? "Aprovado" : "Reprovado";

-----------------------------------------------------------
3️⃣ Ternário aninhado
-----------------------------------------------------------
if(true){
let nota = 8;
let conceito = nota >= 9 ? "Excelente" :
               nota >= 7 ? "Bom" :
               nota >= 5 ? "Regular" : "Reprovado";
               console.log(conceito); // "Bom"
}


-----------------------------------------------------------
4️⃣ Uso prático
-----------------------------------------------------------
if(true){
let usuario = "Rodrigo";
let nome = usuario ? usuario : "Convidado";
console.log(nome)
}


-----------------------------------------------------------
🔟 Boas práticas
-----------------------------------------------------------
✅ Bom para expressões curtas.  
⚠️ Evite ternários muito aninhados (prefira if/else para clareza).  

*/
