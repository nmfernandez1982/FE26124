// --------------------Operadores de Aritmeticos
let a="15";
let b="15";

console.log("Suma",a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);

// --------------------Operadores de comparacion

console.log(10<5);//false   < menor >mayor
console.log(a<b);

console.log(10==10);//true
console.log(10=="10");//false
console.log(10==="10");//false

/*
= asigna
== compara
=== compracion total
*/ 

/*operadores logicos*/

let tieneUsuario=false;
let tienePass=false;

console.log("Operador logico &&: ",tieneUsuario && tienePass);

/*
V V =V
F V =F
V F =F
F F =F
*/

console.log("Operador logico ||: ",tieneUsuario || tienePass);

/*
V V =V
F V =V
V F =V
F F =F
*/