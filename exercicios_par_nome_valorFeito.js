/*
===========================================================
Exercícios Práticos - Par Nome/Valor
===========================================================
*/

// 1. Declare uma variável string e exiba seu valor no console.

let nomeDoBanco = "Banco Vitória";

console.log(nomeDoBanco);

// 2. Crie um objeto com pelo menos 3 pares nome/valor e exiba uma das propriedades.

const colaborador = {
  primeiroNome: "Lucas",
  ultimoNome: "Johnson",
  cargo: "Analista de Dados"
};

console.log(colaborador.primeiroNome);

// 3. Crie um array com 5 elementos e exiba o terceiro elemento.

const agencias = ["Matriz", "Tatuapé", "Campinas", "Osasco", "Rio de Janeiro"];

console.log(agencias[2]);

// 4. Crie um objeto e adicione uma nova propriedade dinamicamente.

const cliente = {
  nome: "Sofia Oliveira",
  idade: 45
};

cliente.cargo = "CEO";

let novaPropriedade = "departamento";
cliente[novaPropriedade] = "Liderança";

console.log(cliente);

// 5. Mostre como acessar um valor de um objeto usando colchetes e uma variável.

const cliente = {
  nome: "Lucas Johnson",
  idade: 35,
  cargo: "Analista de Dados"
};

let chave = "cargo";

console.log(cliente[chave]);


// 6. Crie uma função que recebe um objeto e exibe as chaves e valores (usando for...in).

function exibirChavesValores(objeto) {
  for (const chave in objeto) {
    const valor = objeto[chave];
    console.log(`${chave}: ${valor}`);
  }
}

const dadosAgencia = {
  nome: "Agência Matriz",
  cidade: "São Paulo",
  uf: "SP",
  dataAbertura: "2010-01-01"
};

exibirChavesValores(dadosAgencia);

// 7. Declare um objeto aninhado (objeto dentro de objeto) e exiba um valor profundo.

const colaborador = {
  nome: "André Tech",
  cargo: "Diretor de Tecnologia",

  contato: {
    email: "andre.t@banvic.com",
    telefone: "99876-5432"
  },
  
  localizacao: {
    cidade: "São Paulo",
    uf: "SP"
  }
};

console.log(colaborador.contato.email);

console.log(colaborador.localizacao.cidade);

// 8. Crie um array e mostre que o índice é o nome e o valor é o conteúdo.

const banco = {
  nome: "Banco Vitória S.A.",
  diretor: "Sofia Oliveira",
  fundacao: 2010
};

console.log(banco.nome);

console.log(banco["diretor"]);

// 9. Crie uma variável com escopo global e outra local dentro de função e mostre seus valores.

let nomeGlobal = "Banco Vitória";

function exibirEscopo() {
  let nomeLocal = "Analista de Dados";
  
  console.log(`Variável local: ${nomeLocal}`);
  console.log(`Acessando a variável global de dentro da função: ${nomeGlobal}`);
}


exibirEscopo();


console.log(`\nAcessando a variável global de fora da função: ${nomeGlobal}`);

// 10. Modifique o valor de uma propriedade de um objeto e exiba antes e depois.

const cliente = {
  nome: "Lucas Johnson",
  idade: 35,
  cargo: "Analista de Dados"
};

console.log("Objeto antes da modificação:");
console.log(cliente);

cliente.cargo = "Diretor de Dados";

console.log("\nObjeto após a modificação:");
console.log(cliente);
