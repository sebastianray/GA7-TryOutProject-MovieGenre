const { Router } = require('express');
const router = Router();
const MovieRoutes = require('./movie')
const GenreRoutes = require('./genre')
const LibraryRoutes = require('./library')

router.get('/', (req,res)=>{
    res.render('index.ejs')
    // res.send('result')
});
router.use('/movies', MovieRoutes)
router.use('/genres', GenreRoutes)
router.use('/libraries', LibraryRoutes)

module.exports = router;