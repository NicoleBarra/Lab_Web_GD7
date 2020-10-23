import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const Lists= ({pedidos, updateEstado, updatePedido}) => {
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
          
          var drake = dragula(containers, {
            revertOnSpill: true
          });

          
          
          drake.on('drop', function(el, target,source,sibling) {

            if (target.id === 'Salida-de-Planta'){
              drake.cancel();
            }

            if (source.id === 'Entregado'){
              drake.cancel();
            }

            if ($('En-local-delivery-center').children.length > 0) {
              $('display').innerHTML = $('En-local-delivery-center').innerHTML;
            } else {
              $('display').innerHTML = "Display";
            }

            var elId = el.id;
            var sourceId = source.id;
            var targetId = target.id;

            updateEstado(elId,sourceId,targetId);
            updatePedido(elId,targetId);
          });
    },[])

    return(
<div class="container">
  <h1>Drag and Drop</h1>
  <p>Trying out <code>dragula.js</code>. Source <a href="https://github.com/bevacqua/dragula">here</a>.</p>
  <div class="left">
    <p>Salida-de-Planta</p>
    <div id="Salida-de-Planta">
      {
        pedidos
        .filter(p => p.estado === "Salida-de-Planta")
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>

    <p>En-local-delivery-center</p>
    <div id="En-local-delivery-center">
    {
        pedidos
        .filter(p => p.estado === "En-local-delivery-center")
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>

    <p>En-proceso-de-entrega</p>
    <div id="En-proceso-de-entrega">
    {
        pedidos
        .filter(p => p.estado === "En-proceso-de-entrega")
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>

    <p>Entregado</p>
    <div id="Entregado">
    {
        pedidos
        .filter(p => p.estado === "Entregado")
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>

      <p>Fallida</p>
    <div id="Fallida">
    {
        pedidos
        .filter(p => p.estado === "Fallida")
        .map((p,i)=> (
        <div key={p.id} id={p.id}>#{p.id} {p.nombre}</div>
        ))
      }
    </div>
  </div>
  <div class="right">
    <div id="display">Display</div>
  </div>
</div>
    )}

      export default Lists;

