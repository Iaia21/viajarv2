import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Header from '../src/componentes/Header';
import Carrossel from './paginas/Home/componentes/Carrossel';
import Conteudo from './paginas/Home/componentes/Carrossel';
import Rodape from '../src/componentes/Rodape';

ReactDOM.render(
  <div>
  <App/>,
  <Header/>,
  <Carrossel/>,
  <Conteudo/>,
  <Rodape/>,
  </div>
 ,
  document.getElementById('root')
);
