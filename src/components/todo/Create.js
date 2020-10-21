import React, { useState } from 'react';

const Create = () => {

    const [pedido, setPedido] = useState('');


  return (
    <div>
      <label htmlFor="create-form"></label>
      <input 
        type="text" 
        value={pedido} 
        id="create-form"/>
      <input type="button" value="Crear pedido" />
      
    </div>
  )
}

export default Create;