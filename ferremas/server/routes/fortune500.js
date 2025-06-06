const express = require('express');
const router = express.Router();
const FortuneController = require('../controllers/fortuneController');
const productoController = require('../controllers/productoController');

// Rutas principales
router.get('/companies', FortuneController.getAllCompanies);
router.get('/company/:rank', FortuneController.getCompanyByRank);
router.get('/search', FortuneController.searchCompanies);
router.get('/top-revenue', FortuneController.getTopByRevenue);


// Ruta de prueba
router.get('/test', (req, res) => {
    res.json({
    success: true,
    message: 'API Fortune 500 funcionando correctamente',
    timestamp: new Date().toISOString()
    });
});

// Rutas de productos
router.get('/', productoController.getProducts);

module.exports = router;