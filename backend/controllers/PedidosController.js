const Pedido = require('../models/Pedido');

exports.store = (req, res) => {
  let pedido = {};
  console.log(req);
  pedido.nombre = req.body.nombre;
  pedido.estado = "Salida-de-Planta";
  Pedido.create(pedido).then((id) => {
    console.log('Pedido created with id: ', id);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      Pedido.find(id).then((pedido) => res.json(pedido));
    } else {
      res.redirect('/');
    }
  });
}

exports.done = (req, res) => {
  let pedido = {};
  pedidoId = req.body.id;
  pedido.id = req.body.id;
  pedido.estado = req.body.estado;
  let updatePedido = {
    estado: req.body.estado
  }

  Pedido.update(pedidoId, updatePedido).then((id) => {
    console.log('Pedido created with id: ', pedidoId);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      Pedido.find(pedidoId).then((pedido) => res.json(pedido));
    } else {
      res.redirect('/');
    }
  });
}

//check
exports.update = (req, res) => {
  console.log(req);
  let pedido = {};
  pedidoId = req.body.id;
  pedido.id = req.body.id
  let updatePedido = {
    estado: req.body.nuevoEstado
  }
  console.log('Pedido created with id: ', pedidoId);
  Pedido.update(pedidoId, updatePedido).then((id) => {
    
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      console.log('Pedido updated with id: ', pedidoId);
      Pedido.find(pedidoId).then((pedido) => res.json(pedido));
    } else {
      res.redirect('/');
    }
  });
}


exports.delete = (req, res) => {
  console.log(req);
  let pedido = {};
  pedidoId = req.body.id;
  pedido.id = req.body.id;
  pedido.description = req.body.description;
  Pedido.delete(pedido).then((id) => {
    console.log('Pedido deleted with id: ', pedidoId);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      res.json(pedido);
    } else {
      res.redirect('/');
    }
  });
}