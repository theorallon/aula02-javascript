/* Não usar var (obsoleto) (usar somente quando precisar de uma variável global(que não fica presa dentro de um escopo como um "if"))
var nome = "Théo";
var idade = 16;
var peso = 73;
var altura = 1.83;
var imc = peso / (altura * altura);
console.log(nome, idade, peso, altura, imc);
*/

/* Usar let (pode mudar)
let nome = "Théo";
let idade = 16;
let peso = 73;
let altura = 1.83;
let imc = peso / (altura * altura);
console.log(nome, idade, peso, altura, imc);
*/

/* Usar const (não pode mudar)
const nome = "Théo";
const idade = 16;
const peso = 73;
const altura = 1.83;
const imc = peso / (altura * altura);
console.log(nome, idade, peso, altura, imc);
*/


/*
O typeof serve para mostrar o tipo de variável
console.log(typeof nome)
Nesse caso, o typeof nome vai mostrar que o tipo de variável é string
*/

/*
Para verificar a igualdade existem 2 tipos de comparação:
1. (5 == "5") Verifica a igualdade de valor
2. (5 === "5") Verifica a igualdade de valor e tipo
o "=" sozinho é utilizado para atribuir um valor a algo
*/

/*
Estrutura if/else
    
    if  (idade >= 18) {
        console.log("Maior idade")
    } else {
        console.log("Menor idade")
    }
*/

/*
Estrutura Ternária

    const status = idade >= 18 ? "Maior idade" : "Menor idade";
    console.log(status);

*/