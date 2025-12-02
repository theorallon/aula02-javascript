const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("Insira um número");
rl.question("Número: ", (numero) => {
    for (let i = 1; i <= 10; i++) {
        console.log(numero + " x " + i + " = " + numero * i);
    }
    rl.close();
});
