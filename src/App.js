  
import React, {useState, useEffect} from 'react';
import Create from './components/todo/Create';
import Lists from './components/lists/Lists';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
var dragula = require('react-dragula');

function App() {
  return (
  <BrowserRouter>
    <div>
        <Switch>
        <Route exact path="/">
            <h1>Pedidos</h1>
            <Create/>
            <Lists/>
      
        </Route>
        </Switch>
      
    </div>
  </BrowserRouter>
);
}

export default App;
