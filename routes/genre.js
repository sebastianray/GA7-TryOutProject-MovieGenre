const { Router } = require('express');
const router = Router();
const GenreController = require('../controllers/Genre')

router.get('/', GenreController.getGenre);
router.get('/add', GenreController.addFormGenre);
router.post('/add', GenreController.addGenre);
router.delete('/delete/:id', GenreController.deleteGenre)
router.get('/edit/:id', GenreController.editFormGenre)
router.post('/edit/:id', GenreController.editGenre)

module.exports = router;