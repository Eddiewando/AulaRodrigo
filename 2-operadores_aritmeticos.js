/*
===========================================================
Arquivo: operadores_aritmeticos.js
Assunto: Operadores Aritméticos em JavaScript
===========================================================

Os operadores aritméticos permitem realizar cálculos matemáticos.
Eles funcionam sobre valores numéricos e retornam resultados numéricos.

-----------------------------------------------------------
1️⃣ Adição (+)
-----------------------------------------------------------
Soma valores numéricos ou concatena strings.

let a = 10, b = 5;
console.log(a + b); // 15

let nome = "Rodrigo";
console.log("Olá " + nome); // "Olá Rodrigo"

-----------------------------------------------------------
2️⃣ Subtração (-)
-----------------------------------------------------------
Subtrai valores numéricos.

console.log(10 - 4); // 6

-----------------------------------------------------------
3️⃣ Multiplicação (*)
-----------------------------------------------------------
Multiplica valores numéricos.

console.log(6 * 7); // 42

-----------------------------------------------------------
4️⃣ Divisão (/)
-----------------------------------------------------------
Divide valores numéricos.

console.log(20 / 4); // 5
console.log(7 / 2);  // 3.5

-----------------------------------------------------------
5️⃣ Módulo (%)
-----------------------------------------------------------
Retorna o resto da divisão.

console.log(10 % 3); // 1
console.log(15 % 5); // 0

-----------------------------------------------------------
6️⃣ Exponenciação (**)
-----------------------------------------------------------
Eleva um número à potência de outro.

console.log(2 ** 3); // 8
console.log(5 ** 2); // 25

-----------------------------------------------------------
7️⃣ Incremento (++)
-----------------------------------------------------------
Aumenta o valor da variável em 1.

let x = 5;
x++;
console.log(x); // 6

-----------------------------------------------------------
8️⃣ Decremento (--)
-----------------------------------------------------------
Diminui o valor da variável em 1.

let y = 8;
y--;
console.log(y); // 7

-----------------------------------------------------------
9️⃣ Precedência de operadores
-----------------------------------------------------------
A ordem de execução segue regras:
1. Parênteses
2. Exponenciação
3. Multiplicação, Divisão, Módulo
4. Adição e Subtração

Exemplo:
console.log(2 + 3 * 4);     // 14 (multiplicação primeiro)
console.log((2 + 3) * 4);   // 20 (parênteses primeiro)

-----------------------------------------------------------
🔟 Boas práticas
-----------------------------------------------------------
✅ Use parênteses para deixar a intenção clara.  
✅ Evite usar `%` sem saber se o divisor pode ser 0.  
✅ Prefira nomes de variáveis descritivos em cálculos complexos.  

*/
