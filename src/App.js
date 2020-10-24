  
import React, {useState, useEffect} from 'react';
import Create from './components/todo/Create';
import Lists from './components/lists/Lists';
import './App.css';
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
const dotenv = require('dotenv');

dotenv.config();


function App() {

  var dbHost = process.env.BACKEND_PORT || 8000
  const [pedidos, setPedidos] = useState([]);


  useEffect(() => {
    fetchPedidos();
    console.log("FETCH");
  }, []);

  

  const fetchPedidos = async () => {
    await axios(`http://localhost:${dbHost}/`).then((res) => {
      console.log(res.data);
      setPedidos(res.data);
    });
    //setPedidos(result.data);
  };

  const addPedido = async (nombre) => {
    let cPedidos = Object.assign([], pedidos);

    await axios.post(`http://localhost:${dbHost}/pedido/create`, {
        nombre : nombre
      }
    )
      .then((result) => {
        console.log(result);
        cPedidos.push({
          id: result.data.id,
          nombre: result.data.nombre,
          estado: result.data.estado,
        });
        
      })
      .catch((error) => {
        console.log("There was an error: ", error);
      });
    
    setPedidos(cPedidos);
    console.log(pedidos);
    console.log(cPedidos);
  }

  const updateEstado = async (elId,sourceId,targetId) => {
    await axios
      .post(`http://localhost:${dbHost}/cambioestado/create`, { 
        pedido: elId,
        estadoAnterior: sourceId,
        estadoPosterior: targetId
      })
      .then((res) => {
        console.log("Cambio Estado creado");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const updatePedido = async (elId,targetId) => {
    await axios
      .post(`http://localhost:${dbHost}/pedido/update`, { 
        id: elId,
        nuevoEstado:targetId 
      })
      .then((res) => {
        console.log("Pedido actualizado");
        console.log(targetId);
      })
      .catch((err) => {
        console.log(err);
      });
  };





  return (
  <BrowserRouter>
    <div>
        <Switch>
        <Route exact path="/">
            
            <Create addPedido={addPedido}/>
            <Lists pedidos={pedidos} updateEstado={updateEstado} updatePedido={updatePedido}/>
      
        </Route>
        </Switch>
      
    </div>
  </BrowserRouter>
);
}

export default App;
