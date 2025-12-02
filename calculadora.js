const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("=== Calculadora Básica ===");
console.log("Operações permitidas: +  -  *  /");

rl.question("Digite uma expressão: ", (expressao) => {
    try {
        let resultado = eval(expressao);
        console.log("Resultado:", resultado);
    } catch (erro) {
        console.log("Expressão inválida!");
    }
    rl.close();
});