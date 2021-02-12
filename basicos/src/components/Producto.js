import React from 'react';

//imp
//sfc

const Producto = ({producto, carrito, agregarProducto, productos}) => {

    const {nombre,precio,id}=producto

    const seleccionarProducto= (id) => {
        // console.log("Comprando", id)
        const producto=productos.filter(producto => producto.id === id)[0];
        //console.log(producto[0])
        agregarProducto([
            ...carrito,
            producto  //se saca una copia del carrito y se agrega un nuevo producto
        ]);
    }

    const eliminarProducto= (id) => {
        // console.log("Eliminar", id)
        const productos=carrito.filter(producto => producto.id !== id);
        agregarProducto(productos)
       
    }

    return ( 
        <div>
            <h2>{nombre}</h2>
            <p>${precio}</p>
          
            {productos
            ?
                (
                    <button
                    type="button"
                    onClick={() =>  seleccionarProducto(id)}
                    
                    >
                        Comprar
                    </button>
                )
                :
                (
                    <button
                    type="button"
                    onClick={() =>  eliminarProducto(id)}
                    
                    >
                        Eliminar
                    </button>
                )
            
            }



        </div>
     );
}
 
export default Producto;