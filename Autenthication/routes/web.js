let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidator');
let passport = require('passport');

router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

router.post('/register', authController.store);
router.post('/register', authValidator.store, authController.store);

router.get('/protected', (req, res) => {
    res.send('Usuario logueado con éxito');
  });
  router.get('/login-fail', (req, res) => {
    res.send('El usuario no tiene una sesión válida');
  });

module.exports = router;
