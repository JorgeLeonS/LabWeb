const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const todosController = require('../controllers/TodosController');

router.get('/', homepageController.index);

router.post('/todos', todosController.create);

module.exports = router;
