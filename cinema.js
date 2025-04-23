const readline = require("readline-sync")

let idade = parseInt(readline.question("qual sua idade?"));
let carteirinha = readline.question("você é estudante ou idoso? s/n");

if (idade <16) {
    console.log("não permitido")
}else if(idade <18 || idade >=65 || carteirinha=="s"){
    console.log("meia")
}else {
    console.log("inteira")
}



