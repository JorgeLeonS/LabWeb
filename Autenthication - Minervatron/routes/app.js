let router = require('express').Router();
let dashboardController = require('../controllers/DashboardController');
let authContoller = require('../controllers/AuthController');
let authMiddleware = require('../middlewares/AuthMiddleware');

router.get('/dashboard', authMiddleware.isAuth, dashboardController.index);
router.get('/users', authMiddleware.isAuth, authMiddleware.isAuthAdmin, authContoller.index);

module.exports = router;
