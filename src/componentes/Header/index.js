import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';
//import Carrossel from "../../paginas/Home/componentes/Carrossel";
 
export function Header() {
    return(
    
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            <img src="..\..\imgrod\Viajar.png" alt="logo" widht="100%" height="100px" href="#"/>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>

            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav mr-auto">
                <li class="nav-item active">
                <Link class="nav-link" to="#">Home</Link>  
                </li>
                
                <li class="nav-item">
                <Link class="nav-link" to='".\paginas\Destinos"'>Destinos</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" to=".\paginas\Cadastro">Cadastro</Link>
                </li>

                <li class="nav-item">
                <Link class="nav-link" to=".\paginas\Contato">Fale Conosco</Link>
                </li>
               
                </ul>
                <form class="form-inline my-2 my-lg-0">
                <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search"/>
                <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Pesquisar</button>
                </form>
            </div>
            
        </nav>
    );
}
 
export default Header; 