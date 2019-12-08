import React from 'react';
import Header from './component/Header';
import Formulario from './component/Formulario';

function App() {
  return (
    <div className="App">
      <Header
      titulo='Clima React App'
      />
      <div className="contenedor-form">
        <div className="contanier">
          <div className="row">
            <div className="col s12 m6">
              <Formulario />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
