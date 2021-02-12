import React, {Fragment, useState, useEffect} from 'react';

import Formulario from './components/Formulario'
import Cita from './components/Cita'

function App() {

  //Citas en localstorage
  let citasIniciales=JSON.parse(localStorage.getItem('TodasCitas'));
    if(!citasIniciales){
      citasIniciales=[];
    }


  //Arreglo de las citas
  const [TodasCitas, setTodasCitas] = useState(citasIniciales ? citasIniciales : []);

  //Hacer operaciones cuando el state cambia
  useEffect(()=>{
    if(citasIniciales){
      localStorage.setItem('citas', JSON.stringify(TodasCitas));
    }else{
      localStorage.setItem('citas',JSON.stringify([]));
    }

  },[TodasCitas, citasIniciales]); //lo de citas es par decirle que cada vez que cambie citas haga algo

  //funcion para crear la nueva cita
  const crearCita= cita =>{
      setTodasCitas([
        ...TodasCitas,
        cita
      
      ])
  }

  //funcion elimina cita por id
  const eliminarCita = id =>{
    const nuevasCitas= TodasCitas.filter(cita => cita.id !== id);
    setTodasCitas(nuevasCitas) //hace el cambio creando un nuevo arreglo y borra el elemento
  }

  //Mensaje condicional
    const titulo=TodasCitas.length === 0 ? 'No hay citas' : 'Administra tus Citas'


  return (
    <Fragment>
      <h1>Administrador de Citas</h1>
      <div className="container">
          <div className="row">
            <div className="one-half column">
              <Formulario 
              crearCita={crearCita}
              />
            </div>
            <div className="one-half column">
              <h2>{titulo}</h2>
              {TodasCitas.map(cita =>(
                <Cita 
                  key={cita.id}
                  cita={cita}
                  eliminarCita={eliminarCita}
                />
              ))}
            </div>
          </div>
      </div>

    </Fragment>
  );
}

export default App;
