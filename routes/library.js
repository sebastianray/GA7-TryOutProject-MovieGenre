const { Router } = require('express');
const router = Router();
const LibraryController = require('../controllers/Library')

router.get('/', LibraryController.getLibrary);
router.get('/add', LibraryController.addFormLibrary)
router.post('/add', LibraryController.addLibrary)
router.delete('/delete/:id', LibraryController.deleteLibrary)
router.get('/edit/:id', LibraryController.editFormLibrary)
router.post('/edit/:id', LibraryController.editLibrary)

module.exports = router;