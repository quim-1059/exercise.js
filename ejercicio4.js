const prompt=require("prompt-sync")();

let a = Number( prompt("ingresa el valor de a: "));
let b= Number(prompt("ingresa el valor de b: "));
let c= Number(prompt("ingresa el valor de c:"));

let x1= (-b + (b*b -4*a*c)**0.5)/(2*a);
let x2= (-b - (b*b -4*a*c)**0.5)/(2*a);
console.log("el resultado de x1 es: " + x1);
console.log("el resultado de x1 es: " + x2);