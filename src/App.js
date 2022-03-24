import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import Home from './paginas/Home/index.js';
import Contato from './paginas/Contato/index.js';
import Destinos from './paginas/Destinos/index.js';
import Cadastro from './paginas/Cadastro/index.js';
import Reserva from './paginas/Reserva/index.js';

function App() {
  return (
<App>
    <BrowserRouter>
      <Router>
        <Route exact path="/" element={<App/>}/> 
       {/*<Route exact path="/home" element={ Home }/>*/}
        <Route path="/contato" element={ <Contato/> }/>
        <Route path="/destinos" element={ <Destinos/> }/>
        <Route path="/cadastro" element={ <Cadastro/> }/>
        <Route path="/reserva" element={ <Reserva/> }/>
      </Router>
    </BrowserRouter>
    </App>
  );
}
export default App;
