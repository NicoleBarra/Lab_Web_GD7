import React, { useState } from 'react';

const Create = ({addPedido}) => {

    const [pedido, setPedido] = useState('');

    const handlePedidoChange = (event) => {
      let val = event.target.value;
      setPedido(val);
    }
    
    // el evento de creación es envíado al padre
    const handleCreateClick = (event) => {
      addPedido(pedido);
      setPedido('');
    }


  return (
    <div class="container">
      <h1>Pedidos</h1>
      <label htmlFor="create-form"></label>
      <input 
        type="text" 
        value={pedido} 
        id="create-form"
        onChange={handlePedidoChange}/>
      <input type="button" value="Crear pedido" onClick={handleCreateClick} />
      
    </div>
  )
}

export default Create;