/*
===========================================================
Exercícios Práticos - Funções
===========================================================
*/

// 1. Crie uma função tradicional que receba dois números e retorne a soma.

function somar(num1, num2) {
  return num1 + num2;
}


let resultado = somar(5, 3);
console.log(resultado); 

// 2. Crie uma função de seta (arrow function) que receba uma string e retorne ela em maiúsculas.
const converterParaMaiusculas = (texto) => {
  return texto.toUpperCase();
};


let mensagem = converterParaMaiusculas("olá, mundo!");
console.log(mensagem); 

// 3. Crie uma função que recebe um parâmetro opcional com valor padrão e retorne uma saudação.

function cumprimentar(nome = "Mundo") {
  return `Olá, ${nome}!`;
}


console.log(cumprimentar()); 


console.log(cumprimentar("Ana")); 

// 4. Crie uma função que receba um número indefinido de argumentos e retorne a média deles.

function calcularMedia(...numeros) {
  
  if (numeros.length === 0) {
    return 0;
  }


  let soma = 0;
  for (let i = 0; i < numeros.length; i++) {
    soma += numeros[i];
  }


  return soma / numeros.length;
}

:
console.log(calcularMedia(10, 20, 30)); 
console.log(calcularMedia(5, 5, 5, 5)); 
console.log(calcularMedia(100)); 
console.log(calcularMedia()); 

// 5. Crie uma função que retorna outra função que adiciona um número fixo.

function criarAdicionador(numeroFixo) {

  return function(outroNumero) {
    return numeroFixo + outroNumero;
  };
}


const adicionarCinco = criarAdicionador(5);


console.log(adicionarCinco(10)); 
console.log(adicionarCinco(20)); 


const adicionarCem = criarAdicionador(100);

console.log(adicionarCem(50)); 

// 6. Escreva uma IIFE que imprima "Função autoexecutada".

(function() {
  console.log("Função autoexecutada.");
})();

// 7. Crie uma função que usa `this` e explique a diferença entre função tradicional e arrow function no contexto do `this`.

const cliente = {
  primeiroNome: "João",
  ultimoNome: "Silva",
  
  saudacao: function() {
    return `Olá, meu nome é ${this.primeiroNome} ${this.ultimoNome}.`;
  }
};

console.log(cliente.saudacao()); 

// 8. Crie uma função que recebe um objeto e imprime seus valores usando destructuring.

function imprimirDadosCliente(cliente) {
  
  const { nome, idade, cidade } = cliente;

  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade}`);
  console.log(`Cidade: ${cidade}`);
}

const meuCliente = {
  nome: "Lucas Johnson",
  idade: 35,
  cidade: "São Paulo"
};

imprimirDadosCliente(meuCliente);



// 9. Crie uma função que troca os valores de duas variáveis usando destructuring.

function trocarValores(a, b) {
  [a, b] = [b, a];

  return [a, b];
}

let x = 10;
let y = 20;

console.log(`Valores originais: x = ${x}, y = ${y}`);

[x, y] = trocarValores(x, y);

console.log(`Valores após a troca: x = ${x}, y = ${y}`);


// 10. Crie uma função recursiva que calcula o fatorial de um número.

function calcularFatorial(numero) {
  if (numero === 0 || numero === 1) {
    return 1;
  }
  
  return numero * calcularFatorial(numero - 1);
}

console.log(calcularFatorial(5));  
console.log(calcularFatorial(7));  
console.log(calcularFatorial(0));  
