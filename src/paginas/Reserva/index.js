import { Link } from 'react-router-dom';
import './style.css';
import React from 'react';
import './style.css';
import Header from '../../componentes/Header';
import Carrossel from '../Home/componentes/Carrossel';
import Rodape from '../../componentes/Rodape';


function Cancelar (){
    alert('Tem certeza que deseja cancelar?')
}
         
function Enviar (){
    alert('Compra efetuada com sucesso!')
}

function Reserva (){
    return (
    <div>
            <Header/>
            <Carrossel/>
         
        <div className="container">
            <main className="text-info">
                <h1>Sua viagem ao seu alcance!</h1>
                    <p className="lead"><b>Agora é hora de cadastrar os dados da sua compra.</b></p>
            </main>
         
            <form-group>
                    <label for="nome">Nome Completo</label>
                    <input type="text" className="form-control"/>
           
                    <label for="nome">Data de nascimento</label>
                    <input type="date" className="form-control"/>
           
                    <label for="nome">CPF</label>
                    <input type="text" maxlenght="11" class="form-control border-primary" placeholder="CPF"/>
           
                    <label for="nome">Nome Completo 2</label>
                    <input type="text" className="form-control"/>
           
                    <label for="nome">Data de nascimento 2</label>
                    <input type="date" className="form-control" placeholder=""/>
           
                    <label for="nome">Nome Completo 3</label>
                    <input type="text" className="form-control"/>
           
                    <label for="nome">Data de nascimento 3</label>
                    <input type="date" className="form-control" placeholder=""/>
           
                    <label for="nome">Nome Completo 4</label>
                    <input type="text" className="form-control"/>
           
                    <label for="nome">Data de nascimento 4</label>
                    <input type="date" className="form-control" placeholder=""/>
            </form-group>
                <br/>
         
            <div className="container">
                    <label for="pagamento" class="text-primary"><b>Forma de pagamento</b></label>
                    <select id="pagamento" name="pagamento">
                        <option value="cc">Cartão de crédito</option>
                        <option value="cd">Cartão de débito</option>
                        <option value="px">Pix</option>
                        <option value="tr">Transferência bancária on-line</option>
                        <option value="mc">Boleto à vista</option>
                        <option value="rj">Boleto parcelado</option>
                    </select>
                    <br/><br/>
<nav-link>
{/* <button className="btn btn-primary" href="reserva.html" onclick={Enviar}/> */} 
<Link class="nav-link" button className="btn btn-primary" to=".\paginas\Home" onclick={Enviar}>Home</Link>      
{/* <button className="btn btn-outline-warning float-right" onclick={Cancelar}/> */} 
 <Link class="nav-link" button className="btn btn-outline-warning float-right" to=".\paginas\Home" onclick={Cancelar}>Home</Link>
</nav-link>              
        </div>
        </div>
            <Rodape/>
</div>
    );
}
export default Reserva;