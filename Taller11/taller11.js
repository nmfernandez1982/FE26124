// function saludar()
// {
//     console.log("Hola mundo...."," Nicolas");
// }

// function saludar(nombre)
// {
//     console.log("Hola mundo...",nombre);
//     var edad=45;    
// }


// function login(usuario,pass)
// {
//     if(usuario=="admin"&&pass==1234)
//     {
//         return true;
//     }
//     else
//     {
//         return false;
//     }
// }

// habilitado=login("Nicolas","1234");




function calcularTotal(precio,cantidad)
{
    var subtotal=precio*cantidad;
    var Pdescuento=0;
    var descuento=0

     

    if(subtotal>=10000)
    {
        Pdescuento=0.10;
        descuento=subtotal*Pdescuento;
    }

    return subtotal=(subtotal-descuento);
}

precioFinal=calcularTotal(100,8);


console.log("Precio FInal: ",precioFinal);



