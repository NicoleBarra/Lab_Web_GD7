import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const Lists= ({pedidos, updateEstado, updatePedido}) => {
    var React = require('react');
    var dragula = require('react-dragula');


    useEffect(() =>{
     /* if ($('2').children.length > 0) {
        $('display').innerHTML = $('En-local-delivery-center').innerHTML;
      }*/
        function $(id) {
            return document.getElementById(id);
          }

          var containers = [
            $('1'),
            $('2'),
            $('3'),
            $('4'),
            $('5')

          ]
          
          var drake = dragula(containers, {
            revertOnSpill: true
          });

          
          
          drake.on('drop', function(el, target,source,sibling) {

           /* if ($('2').children.length > 0) {
              $('display').innerHTML = $('2').innerHTML;
            } else {
              $('display').innerHTML = "Display";
            }*/

            if (target.id === '1' || source.id === '4'){
              drake.cancel();
            }else{
              var elId = el.id;
              var sourceId = Number(source.id);
              var targetId = Number(target.id);
  
              updateEstado(elId,sourceId,targetId);
              updatePedido(elId,targetId);
            }

          });
    },[])

    return(
<div class="container">
  
  <div class="left">
    <p>Salida-de-Planta</p>
    <div id='1' class="Salida-de-Planta">
      {
        pedidos
        .filter(p => p.estado === 1)
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>

    <p>En-local-delivery-center</p>
    <div id='2' class="En-local-delivery-center">
    {
        pedidos
        .filter(p => p.estado === 2)
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>

    <p>En-proceso-de-entrega</p>
    <div id='3' class="En-proceso-de-entrega">
    {
        pedidos
        .filter(p => p.estado === 3)
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>
  </div>
  <div class="right">
    <p>Completado</p>
    <div class="one">
      <p>Entregado</p>
      <div id='4' class="Entregado">
      {
          pedidos
          .filter(p => p.estado === 4)
          .map((p,i)=> (
          <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
          ))
        }
      </div>

        <p>Fallida</p>
      <div id='5' class="Fallida">
      {
          pedidos
          .filter(p => p.estado === 5)
          .map((p,i)=> (
          <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
          ))
        }
      </div>
    </div>
  </div>
  
</div>
    )}

      export default Lists;

