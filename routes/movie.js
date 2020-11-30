const { Router } = require('express');
const router = Router();
const MovieController = require('../controllers/Movie')

router.get('/', MovieController.getMovie);
router.get('/add', MovieController.addFormMovie)
router.post('/add', MovieController.addMovie)
router.delete('/delete/:id', MovieController.deleteMovie)
router.get('/edit/:id', MovieController.editFormMovie)
router.post('/edit/:id', MovieController.editMovie)

module.exports = router;