let num= 5;
let esprimo= true;

for ( let i=2; i<num; i++) {
    if(num % i == 0) {
        esprimo = false;
    }
}

if (num<=1) {
    esprimo=false;  
}

if (esprimo) {
console.log(num+ " esprimo");
}else{
    console.log(num +  " noo es primo ");
}