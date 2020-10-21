import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';


const Lists= () => {
    var React = require('react');
    var dragula = require('react-dragula');


    useEffect(() =>{
        function $(id) {
            return document.getElementById(id);
          }
          
          dragula([$('drag-elements'), $('drop-target')], {
            revertOnSpill: true
          }).on('drop', function(el) {
            if ($('drop-target').children.length > 0) {
              $('display').innerHTML = $('drop-target').innerHTML;
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
    <div id="drag-elements">
      <div>Element 1</div>
      <div>Element 2</div>
      <div>Element 3</div>
    </div>

    <div id="drop-target">
    </div>
  </div>
  <div class="right">
    <div id="display">Display</div>
  </div>
</div>
    )}

      export default Lists;

