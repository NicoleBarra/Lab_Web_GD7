const CambioEstado = require('../models/CambioEstado');

exports.store = (req, res) => {
  let cambioestado = {};
  cambioestado.pedido = req.body.pedido;
  cambioestado.estadoAnterior = req.body.estadoAnterior;
  cambioestado.estadoPosterior = req.body.estadoPosterior;

  CambioEstado.create(cambioestado).then((id) => {
    console.log('CambioEstado created with id: ', id);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      CambioEstado.find(id).then((cambioestado) => res.json(cambioestado));
    } else {
      res.redirect('/');
    }
  });
}



exports.update = (req, res) => {
  let cambioestado = {};
  cambioestadoId = req.body.id;
  cambioestado.id = req.body.id;
  let updateCambioEstado = {
    estadoAnterior: req.body.estadoAnterior,
    estadoPosterior: req.body.estadoPosterior
  }
  console.log('CambioEstado created with id: ', cambioestadoId);
  CambioEstado.update(cambioestadoId, updateCambioEstado).then((id) => {
    console.log('CambioEstado created with id: ', cambioestadoId);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      CambioEstado.find(cambioestadoId).then((cambioestado) => res.json(cambioestado));
    } else {
      res.redirect('/');
    }
  });
}

exports.delete = (req, res) => {
  console.log(req);
  let cambioestado = {};
  cambioestadoId = req.body.id;
  cambioestado.id = req.body.id;
  cambioestado.description = req.body.description;
  CambioEstado.delete(cambioestado).then((id) => {
    console.log('CambioEstado deleted with id: ', cambioestadoId);
    if (req.xhr || req.headers.accept.indexOf('json') > -1) {
      res.json(cambioestado);
    } else {
      res.redirect('/');
    }
  });
}