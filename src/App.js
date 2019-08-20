import React from 'react';
import './App.css';
import IconList from './components/IconList';





function App() {

  return (
    <div className="App">
      <header className="App-header">
        
        <h1>
          Biblioteca de ícones
        </h1>
        <p>Versão 0.1.0</p>
      </header>

      <div id="modalPath">
        <h4>Copie o path abaixo para usar o ícone:</h4>
        <div id="pathShowBox"></div>
      </div>
        
    <IconList></IconList>
     
       
        
        
      
    </div>
  );
}

export default App;
