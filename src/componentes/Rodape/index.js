import React from 'react';
import "./style.css";

function Rodape () {//todo o componente tem a primeira letra em maiúsculo

    return (
  
<footer id="rodape">
    <div class="jumbotron"></div>
    
    <div class="row um">
        <div id="footerLogo" class="col-lg-6">
            <div class="row">
                <div class="col-lg-6 col-md-6 mb-lg-0">
                    <img src="..\..\imgrod\Viajar.png" alt="logo" class="img-fluid dois"/>
                </div>
                <div id="socialIcons" class="col-lg-6 col-md-6 mb-5 mb-lg-0 tres">
                    <div id="socialIcons1" class="text-uppercase-expanded text-xs mb-4">
                        <center> {/*os inputs e imagens fecham nelas mesmas*/}
                        <img src="..\..\imgrod\yout.png" alt="youtube"/>
                        <img src="..\..\imgrod\face.png" alt="facebook" class="img-fluid img "/>
                        <img src="..\..\imgrod\insta.png" alt="instagram" class="img-fluid img "/>
                    </center></div>
                </div>
            </div>
        </div>
        <div class="col-lg-6">
            <div class="row text-dark">
                <center>
                <div class="col-lg-12">VIAJAR Brasil Operadora e Agência de Viagens S.A.</div>
                <div class="col-lg-12">CNPJ: 12.345.678/0001-00</div>
                <div class="col-lg-12">Rua Gregory, 321, 11ª andar - São Paulo - SP</div>
                <div class="col-lg-12">CEP: 02121-123</div>
                </center>
            </div>
        </div>
    </div>
    <div class="destaque">
        <p> &copy; Viajar</p>
    </div>
    

</footer>

    );
}
    export default Rodape;