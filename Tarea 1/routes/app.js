// routes/app.js
// De express obtiene una instancia del componente Router
let router = require('express').Router();
// Importa el controlador que creamos
let PagesController = require('../controllers/PagesController');

// Establece que al hacer una petición GET a la ruta / se conteste
// con las palabras "Hello World!"
router.get('/', PagesController.homepage);

// Identifica la ruta "/about" y la respuesta de la ruta
router.get('/about', PagesController.about);

// Identifica las rutas del CRUD y la respuesta de la ruta
router.get('/createProduct', PagesController.createProduct);
router.post('/createProduct', PagesController.postCreateProduct);

router.get("/editProduct/:id", PagesController.editProduct);
router.post("/editProduct/:id", PagesController.postEditProduct);

router.post('/seeProduct/:id', PagesController.deleteProduct);

router.get('/seeProduct/:id', PagesController.seeProduct);

// Exporta las configuraciones
module.exports = router;