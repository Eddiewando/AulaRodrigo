/*
===========================================================
Exercícios Práticos - Operadores de Atribuição
===========================================================
*/

// 1. Crie uma variável `n = 10`. Aplique `n += 5` e exiba.

let n = 10;

console.log(n += 5);


// 2. Continue com o mesmo `n`. Aplique `n -= 3` e exiba.

console.log(n -= 3);

// 3. Continue com o mesmo `n`. Aplique `n *= 2` e exiba.

console.log(n *= 2);

// 4. Continue com o mesmo `n`. Aplique `n /= 4` e exiba.

console.log(n /= 4);

// 5. Continue com o mesmo `n`. Aplique `n %= 3` e exiba.

console.log(n %= 3);

// 6. Continue com o mesmo `n`. Aplique `n **= 2` e exiba.

console.log(n **= 2);

// 7. Mostre que `n = n + 1` é equivalente a `n += 1`.

console.log(n += 1);
console.log(n = n + 1);

// 8. Crie `a = 5` e `b = 2`. Atualize `a` usando `a *= b`. Exiba o resultado.

let a = 5;
let b = 2;
console.log(a *= b)

// 9. Crie uma variável `saldo = 1000`. Desconte 15% usando operador de atribuição.

let saldo = 1000;
saldo -= saldo * 0.15;
console.log(saldo);

// 10. Peça para o aluno prever o resultado antes de rodar:
// let x = 2;
// x += 3;
// x *= 2;
// x -= 4;
// console.log(x);
