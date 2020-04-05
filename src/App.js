import React, { Fragment, useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Producto from './components/Producto';
import Carrito from './components/Carrito';

function App() {


  // Crear lista de productos
  const [ productos, guardarProductos ] = useState([
    { id: 1, nombre: "Camisa ReacJS", precio: 50},
    { id: 2, nombre: "Camisa VueJS", precio: 20},
    { id: 3, nombre: "Camisa JavaScript", precio: 10},
    { id: 4, nombre: "Camisa Ruby", precio: 40},
    { id: 5, nombre: "Camisa C++", precio: 30},
  ]);
    

  // State para un carrito
  const [ carrito, agregarProducto] =useState([])

  // Obtener la fecha
  const fecha = new Date().getFullYear();

  return (
    <Fragment>
      <Header 
        titulo='Online Store'
      />

      <h1>Lista de Productos</h1>
      {productos.map(producto => ( 
        <Producto 
          key={producto.id}
          producto={producto} 
          carrito={carrito}
          productos={productos}
          agregarProducto={agregarProducto}
        />
      ))}

      <Carrito 
        carrito={carrito}
      />

      <Footer 
        fecha={fecha}
      />
    </Fragment>
  );
}

export default App;
