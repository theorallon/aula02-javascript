const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Insira um número");
rl.question("Número: ", (numero) => {
    if (numero % 2 == 0) {
        console.log("Par");
    } else {
        console.log("Ímpar");
    }
    rl.close();
});
