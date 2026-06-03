

function saludar()
{
    console.log("Hola Mundo....")
}

function saludarDos(nombre,apellido)
{
    console.log("Hola Mundo....",nombre," ",apellido)
}

function logger(error)
{
        console.log("Se produjo un error: ",error)
}

saludar();
saludarDos("Nicolas","Fernandez");
logger("No se pudo conectar....");
logger("Cliente no apto.....");
logger("No tiene cuenta activa");




// -------------------------------------------

// function sumar(valor1,valor2)
// {
//     let result=valor1+valor2

//     return result;
// }

function sumar(valor1,valor2)
{ 
    return valor1+valor2;
}



let resultado=sumar(31,20);

console.log("El resultado es: ",resultado)



// -----


let numero=parseInt("25a"); 
console.log(numero);

console.log("nicolas".toUpperCase());

console.log(Math.random());

















