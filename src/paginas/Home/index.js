import React from 'react';//jsx
import './style.css';
import Header from '../../componentes/Header';
import Carrossel from '../Home/componentes/Carrossel';
import Rodape from '../../componentes/Rodape';
import Conteudo from  './componentes/Conteudo';


function Home() {
    return(
        <div>
            <Header/>
           <Carrossel/>
            <Conteudo/>
            <Rodape/>
        </div>
    );
}

export default Home;