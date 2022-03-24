import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Header from '../../componentes/Header';
import Rodape from '../../componentes/Rodape';


function Destinos() {
    return(
        <div>
        <Header/>
        
<div class="container">
<main class="text-info"><h1>Pronto(a) para escolher o seu próximo destino?!</h1></main>
<p class="lead">Programar uma viagem pode ser um momento único para planejar, visualizar e sentir
a experiência que está próximo de ser realizada. Esse é o seu momento, escolha agora a sua próxima aventura:</p>                

    <div class="container">
        <div class="box_destino bonito">
        <img src="viajar\public\imgs\Bonito.png" alt=""/>
        <br/><br/> 
        <Link to="./paginas/Reserva">Bonito</Link>
    </div>
        
        <br/><br/> 
        
    <div class="box_destino fortaleza">
        <img src="viajar\public\imgs\Fortaleza.png" alt=""/>
        <br/><br/>  
        <Link to="/Reserva">Fortaleza</Link>
    </div>
        
        <br/><br/> 
        
    <div class="box_destino gramado">
        <img src="viajar\public\imgs\Gramado.png" alt=""/>
        <br/><br/>  
        <Link to="/Reserva">Gramado</Link>
    </div>
        
        <br/><br/> 
       
    <div class="box_destino maceio">
        <img src="viajar\public\imgs\Maceio.png" alt=""/>
        <br/><br/>  
        <Link to="/Reserva">Maceió</Link>
    </div>
        
        <br/><br/> 
    
    <div class="box_destino rj">
        <img src="viajar\public\imgs\RJ.png" alt=""/>
        <br/><br/>  
        <Link to="/Reserva">Rio de Janeiro</Link>
    </div>
        
        <br/><br/> 
         
    <div class="box_destino salvador">
        <img src="viajar\public\imgs\Salvador.png" alt=""/>
        <br/><br/> 
        <Link to="/Reserva">Salvador</Link>
        </div>
    </div>
        
        <br/><br/> 
         
    <div class="box_destino sp">
       {/*<div class="valign">*/}
        <img src="viajar\public\imgs\SP.png" alt=""/>
        <br/><br/>  
        <Link to="/Reserva">São Paulo</Link>
    </div>
    <div>
            <h1>Home</h1>
            <Link to="/Home">retornar a página inicial</Link>
        </div>

        <br/><br/>  

</div>
<Rodape/>
</div>
    );
}
export default Destinos;