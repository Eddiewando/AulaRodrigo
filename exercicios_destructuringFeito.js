/*
===========================================================
Exercícios Práticos - Destructuring
===========================================================
*/

// 1. Usando destructuring, pegue os dois primeiros valores de um array.

const cores = ['vermelho', 'azul', 'verde', 'amarelo'];

const [primeiraCor, segundaCor] = cores;

console.log(primeiraCor);
console.log(segundaCor);

// 2. Use destructuring para extrair propriedades nome e idade de um objeto.

const pessoa = {
  nome: 'Ana',
  idade: 30,
  cidade: 'São Paulo'
};

const { nome, idade } = pessoa;

console.log(nome);
console.log(idade);

// 3. Use destructuring para extrair uma propriedade que não existe e defina um valor padrão.

const carro = {
  marca: 'Toyota',
  modelo: 'Corolla'
};

const { marca, cor = 'preto' } = carro;

console.log(marca); 
console.log(cor);   

// 4. Use destructuring aninhado para extrair propriedades de um objeto dentro de outro.

const usuario = {
  id: 1,
  nome: 'Alice',
  endereco: {
    rua: 'Rua Principal',
    cidade: 'Rio de Janeiro',
    cep: '20000-000'
  }
};

const { nome, endereco: { cidade } } = usuario;

console.log(nome);  
console.log(cidade);

// 5. Use rest operator para pegar os elementos restantes de um array depois de extrair alguns.

const frutas = ['maçã', 'banana', 'laranja', 'morango', 'uva'];

const [primeiraFruta, segundaFruta, ...restoDasFrutas] = frutas;

console.log(primeiraFruta);      
console.log(segundaFruta);      
console.log(restoDasFrutas);   

// 6. Troque os valores de duas variáveis usando destructuring.

let a = 10;
let b = 20;

console.log(`Antes da troca: a = ${a}, b = ${b}`);

[a, b] = [b, a];

console.log(`Depois da troca: a = ${a}, b = ${b}`);

// 7. Destructure os parâmetros de uma função que recebe um objeto com nome e idade.

const pessoa = {
  nome: 'Pedro',
  idade: 28
};

function exibirDetalhesPessoa({ nome, idade }) {
  console.log(`Nome: ${nome}`);
  console.log(`Idade: ${idade}`);
}

exibirDetalhesPessoa(pessoa);

// 8. Use destructuring para extrair chaves e valores de um objeto dentro de uma função.

const produtos = {
  arroz: 5.50,
  feijao: 8.00,
  macarrao: 3.25
};

function exibirPrecos(objeto) {
  for (const [nomeProduto, preco] of Object.entries(objeto)) {
    console.log(`O preço do(a) ${nomeProduto} é R$ ${preco.toFixed(2)}`);
  }
}

exibirPrecos(produtos);

// 9. Extraia propriedades de um objeto e renomeie as variáveis usando destructuring.

const produto = {
  id: 123,
  name: 'Smartphone X',
  price: 999.99
};

const { name: nomeDoProduto, price: precoProduto } = produto;

console.log(nomeDoProduto); 
console.log(precoProduto);  

// 10. Use destructuring para extrair elementos de um array retornado por uma função.

function getUserInfo() {
  return ['Maria', 35];
}

const [nome, idade] = getUserInfo();

console.log(nome);  
console.log(idade); 