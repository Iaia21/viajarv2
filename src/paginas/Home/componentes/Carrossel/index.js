import React, {Component} from 'react';
import './style.css';

function Carrossel() {
    return(
        
<div class="Container container-fluid">
<div id="carouselExampleSlidesOnly" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img src="..\..\imgscar\Salvadorc.png" alt="Primeiro Slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="..\..\imgscar\RJcopia.png" alt="Segundo Slide"/>
    </div>

    <div class="carousel-item">
      <img class="d-block w-100" src="..\..\imgscar\SPcopia.png" alt="Terceiro Slide"/>
    </div>
    
  </div>
</div>
</div>
    );
}

export default Carrossel; 