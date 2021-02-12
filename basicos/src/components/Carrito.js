import React from 'react';
import './carrito.css';

import Producto from './Producto';

//imp
//sfc

const Carrito = ({carrito, agregarProducto}) => {
    return ( 
       <div className="carrito">
           <h1>Tu carrito de Compras</h1>

            {carrito.length === 0
                ? <h3>No hay elementos en el Carrito</h3>
                
                : carrito.map(producto => (
                    <Producto
                    Key={producto.id}
                    producto={producto}
                    carrito={carrito}
                    agregarProducto={agregarProducto}
                    />
                ))
            }
            
       </div> 
     );
}
 
export default Carrito;