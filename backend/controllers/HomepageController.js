const Pedido = require('../models/Pedido');

exports.index = (req, res) => {
  let pedidos = Pedido.all().then((pedidos) => {
    res.json(pedidos);
  });
}
