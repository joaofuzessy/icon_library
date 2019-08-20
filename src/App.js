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
        <p>Versão 0.3.0</p>
      </header>

      <div id="modalPath">
        <h4>Clique no ícone desejado abaixo. O path será copiado automaticamente para a área de transferência.</h4>
        <div id="pathShowBox"></div>
        <span id="feedback"></span>
      </div>
        
    <IconList></IconList>
     
       
        
        
      
    </div>
  );
}

export default App;
