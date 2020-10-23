const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const pedidosController = require('../controllers/PedidosController');
const cambioEstadoController = require('../controllers/CambioEstadoController')

router.get('/', homepageController.index);


router.post('/pedido/create', pedidosController.store);
router.post('/pedido/update', pedidosController.update);
router.post('/cambioestado/create', cambioEstadoController.store);

module.exports = router;
