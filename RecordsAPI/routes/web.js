const router = require('express').Router();
const homepageController = require('../controllers/HomepageController');
const recordsController = require('../controllers/RecordsController');

router.get('/', homepageController.index);
router.get('/api/records', recordsController.index);
router.get('/api/records/:id', recordsController.show);
router.post('/api/records', recordsController.create);
router.put('/api/records/:id', recordsController.update);
router.delete('/api/records/:id', recordsController.destroy);

module.exports = router;
