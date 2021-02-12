import React, { Fragment,  useState  } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import Producto from './components/Producto'
import Carrito  from './components/Carrito'

function App() {

  //listado de Productos
 const [ productos, guardarProductos ] = useState([
   { id: 1, nombre:'Pc', precio: 50},
   { id: 2, nombre:'Pantalla', precio: 80},
   { id: 3, nombre:'Monitor', precio: 90},
   { id: 4, nombre:'Mouse', precio: 40},
 ]);

 //state carrito
 const [ carrito, agregarProducto] = useState([]);

  const fecha=new Date().getFullYear();


  return (
    <Fragment>

      <Header
      titulo='Tienda virtual'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto =>(
        <Producto
          Key={producto.id}
          producto={producto} //iterar

          productos={productos} //pasar todos para filtrar

          carrito={carrito}
          agregarProducto={agregarProducto}
        />
      ))}
      
 
      <Carrito
      carrito={carrito}
      agregarProducto={agregarProducto}
      />


      <Footer
      fecha={fecha}
      />

    </Fragment>
    
  );
}

export default App;
