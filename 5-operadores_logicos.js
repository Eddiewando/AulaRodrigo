/*
===========================================================
Arquivo: operadores_logicos.js
Assunto: Operadores Lógicos em JavaScript
===========================================================

Usados para combinar expressões booleanas.

-----------------------------------------------------------
1️⃣ AND lógico (&&)
-----------------------------------------------------------
Retorna true se **todos** forem verdadeiros.
var n = 2
var n1 = 2
var N2 = 2
console.log(n == 2 && n1 == 2 && n2 == 2 );  // true
console.log(true && false); // false

-----------------------------------------------------------
2️⃣ OR lógico (||)
-----------------------------------------------------------
var n = 2
var n1 = 4
var N2 = 3
Retorna true se **pelo menos um** for verdadeiro.
console.log(n == 2 || n1 == 2 || n2 == 2 );  // true

-----------------------------------------------------------
3️⃣ NOT lógico (!)
-----------------------------------------------------------
Inverte o valor booleano.
console.log(!(4-6));
console.log(!(2-2));

-----------------------------------------------------------
4️⃣ Combinações
-----------------------------------------------------------
console.log(5 > 3 && 10 < 20); // true
console.log(5 > 10 || 3 < 8); // true
console.log(!(7 > 5)); // false

-----------------------------------------------------------
5️⃣ Valor padrão com ||
-----------------------------------------------------------
let nome;
console.log(nome || "Usuário desconhecido"); // "Usuário desconhecido"

-----------------------------------------------------------
🔟 Boas práticas
-----------------------------------------------------------
✅ Use && para garantir condições múltiplas.  
✅ Use || para definir valores padrão.  
✅ Use ! para inverter expressões booleanas.  

*/
    