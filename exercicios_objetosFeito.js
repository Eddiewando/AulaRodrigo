/*
===========================================================
Exercícios Práticos - Objetos
===========================================================
*/

// 1. Crie um objeto com 3 propriedades diferentes e exiba-o.


const cliente = {
  nome: "Lucas Johnson",
  idade: 35,
  cargo: "Analista de Dados"
};

console.log(cliente);

// 2. Acesse e exiba uma propriedade usando notação de ponto e colchetes.

console.log(cliente["cargo"]);

// 3. Adicione uma nova propriedade ao objeto depois de criado.

cliente.departamento = "Analytics";

// 4. Remova uma propriedade do objeto.

delete cliente.cargo;

// 5. Adicione um método que retorne uma string usando propriedades do objeto.

const cliente = {
  nome: "Lucas Johnson",
  idade: 35,
  cargo: "Analista de Dados",
  
  resumo: function() {
    return `${this.nome} é um(a) ${this.cargo} de ${this.idade} anos.`;
  }
};

console.log(cliente.resumo()); 



// 6. Crie um objeto aninhado (objeto dentro de objeto) e exiba um valor interno.

const cliente = {
  nome: "Lucas Johnson",
  idade: 35,
  
  contato: {
    email: "lucas.j@banvic.com",
    telefone: "98765-4321"
  },
  
  cargo: "Analista de Dados"
};

console.log(cliente.contato.email); 


// 7. Itere sobre as propriedades do objeto e exiba cada par nome/valor.

const cliente = {
  nome: "Lucas Johnson",
  idade: 35,
  cargo: "Analista de Dados",
  cidade: "São Paulo"
};


for (let propriedade in cliente) {
  console.log(`${propriedade}: ${cliente[propriedade]}`);
}



// 8. Clone um objeto usando spread e altere uma propriedade no clone.

const clienteOriginal = {
  nome: "Lucas Johnson",
  idade: 35,
  cargo: "Analista de Dados"
};

console.log("Objeto Original:");
console.log(clienteOriginal);

const clienteClone = {
  ...clienteOriginal,
  nome: "Sofia Oliveira"
};

console.log("\nObjeto Clonado:");
console.log(clienteClone);

console.log("\nVerificação do Objeto Original:");
console.log(clienteOriginal);

// 9. Compare dois objetos com mesmo conteúdo e explique o resultado da comparação.

const objetoA = {
  nome: "Lucas",
  idade: 35
};

const objetoB = {
  nome: "Lucas",
  idade: 35
};

console.log(objetoA == objetoB); 
console.log(objetoA === objetoB); 

// 10. Congele um objeto com Object.freeze e tente alterar uma propriedade.

const cliente = {
  nome: "Lucas Johnson",
  idade: 35
};

Object.freeze(cliente);

console.log("Objeto antes da tentativa de alteração:");
console.log(cliente);

cliente.nome = "Sofia Oliveira";

cliente.cargo = "Analista de Dados";

console.log("\nObjeto após as tentativas de alteração:");
console.log(cliente);
