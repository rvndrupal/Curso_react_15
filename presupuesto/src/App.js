import React, {Fragment, useState} from 'react';

import Pregunta from './components/Pregunta'
import Formulario from './components/Formulario'

function App() {

  //definir state
const [presupuesto, setPresupuesto] = useState(0);
const [restante, setRestante] = useState(0)
const [mostrapregunta, setMostrapregunta] = useState(true);


  return (
    <div className="App">
      <div className="container">
        <header>
          <h1>Gasto Semanal</h1>
          <div className="contenido-principal contenido">
            { mostrapregunta ?
              <Pregunta 
                setPresupuesto={setPresupuesto}
                setRestante={setRestante}
                setMostrapregunta={setMostrapregunta}
              />
              :
              <div className="row">
                  <div className="one-half column">
                  <Formulario />
                  </div>
                  <div className="one-half column">
                   2 
                  </div>
              </div>
            }


          </div>
        </header>
      </div>
    </div>
  );
}

export default App;
