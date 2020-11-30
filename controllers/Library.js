const { Library, Movie, Genre } = require('../models')

class LibraryController {
    static async getLibrary(req, res) {
        try {
            const result = await Library.findAll({
                order: [
                    ['id', 'ASC']
                ],
                include : [
                    Movie,Genre
                ]
            })
            // res.status(200).json(result);
            res.render('libraries.ejs', { libraries: result });

        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static addFormLibrary(req, res) {
        res.render('addLibrary.ejs');
    }
    static async addLibrary(req, res) {
        const { MovieId, GenreId } = req.body;
        try {
            const library = await Library.create({
                MovieId, GenreId
            })
            // res.status(201).json(library)
            res.redirect('/libraries')

        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async deleteLibrary(req, res) {
        const id = req.params.id;
        try {
            const found = await Library.findOne({
                where: {
                    id
                }
            })
            if (found) {
                Library.destroy({
                    where: { id }
                })
                .then(() => {
                    res.redirect('/Libraries')
                    })
                } 
        } catch (err) {
                res.status(500).json(err)
        }
    }

    static editFormLibrary(req, res) {
        const id = req.params.id;
        Library.findOne({
            where: { id }
        })
            .then(result => {
                console.log(result)
                res.render('editLibrary.ejs', { library: result });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static editLibrary(req, res) {
        const id = req.params.id;
        const { MovieId, GenreId } = req.body;
        Movie.update({
            MovieId, GenreId
        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1) {
                    res.redirect('/libraries')
                } else {
                    res.send('Update not done!')
                }
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = LibraryController; 