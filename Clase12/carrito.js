let carrito=[];

function agregarProducto(producto){
    carrito.push(producto);
    //console.log( producto.nombre  +" agregado al carrito");
}


function calcularTotal()
{
    let total=0;

    for(let producto of carrito)
    {
        total+=producto.precio;
    }

    return total;
}

function mostrarCarrito()
{
    console.log("Detalle del carrito");

    for(let producto of carrito)
    {
        console.log("Producto: "+producto.nombre+" | $"+producto.precio);
    }
}

agregarProducto({
    nombre:"Teclado",
    precio:30000
});

agregarProducto({
    nombre:"Mouse",
    precio:75000
});

agregarProducto({
    nombre:"Monitor",
    precio:250000
});

mostrarCarrito();

console.log("EL total es: "+calcularTotal())
