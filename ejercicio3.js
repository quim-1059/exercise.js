const prompt=require("prompt-sync")();
let num= Number(prompt("ingresa un numero del 1 al 10:"));
let factorial= 1;
let operacion= "";


for (let i=1; i<=num; i++) {
    factorial= factorial * i;
    operacion= operacion + i;
    if (i < num){
        operacion=operacion + " * ";
    }
}
console.log(operacion + " * " + factorial);