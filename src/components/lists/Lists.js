import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import Create from '../todo/Create';

const Lists= () => {
    var React = require('react');
    var dragula = require('react-dragula');


    useEffect(() =>{
      if ($('En-local-delivery-center').children.length > 0) {
        $('display').innerHTML = $('En-local-delivery-center').innerHTML;
      }
        function $(id) {
            return document.getElementById(id);
          }

          var containers = [
            $('Salida-de-Planta'),
            $('En-local-delivery-center'),
            $('En-proceso-de-entrega'),
            $('Entregado'),
            $('Fallida')

          ]
          
          dragula(containers, {
            revertOnSpill: true
          }).on('drop', function(el) {
            if ($('En-local-delivery-center').children.length > 0) {
              $('display').innerHTML = $('En-local-delivery-center').innerHTML;
            } else {
              $('display').innerHTML = "Display";
            }
          });
    },[])

    return(
<div class="container">
  <h1>Drag and Drop</h1>
  <p>Trying out <code>dragula.js</code>. Source <a href="https://github.com/bevacqua/dragula">here</a>.</p>
  <div class="left">
    <p>Salida de Planta</p>
    <div id="Salida-de-Planta">
      
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </div>

    <p>En local devliver center</p>
    <div id="En-local-delivery-center">
      
      <div>Element 4</div>
      <div>Element 5</div>
      <div>Element 6</div>
    </div>

    <p>En proceso de entrega</p>
    <div id="En-proceso-de-entrega">
      
    </div>

    <p>Entregado</p>
    <div id="Entregado">
      
    </div>

      <p>Fallida</p>
    <div id="Fallida">
      
    </div>
  </div>
  <div class="right">
    <div id="display">Display</div>
  </div>
</div>
    )}

      export default Lists;

