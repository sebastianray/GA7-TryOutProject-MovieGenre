const { Movie } = require('../models')

class MovieController {
    static async getMovie(req, res) {
        try {
            const result = await Movie.findAll({
                order: [
                    ['id', 'ASC']
                ],
            })
            // res.status(200).json(result);
            res.render('movies.ejs', { movies: result });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static addFormMovie(req, res) {
        res.render('addMovie.ejs');
    }
    static async addMovie(req, res) {
        const { title, year, rating } = req.body;
        try {
            const found = await Movie.findOne({
                where: {
                    title
                }
            })
            if (found) {
                res.status(409).json({
                    msg: "That movie is already exist! Try another movie."
                })
            } else {
                const movie = await Movie.create({
                    title, year, rating
                })
                res.redirect('/movies')
                // res.status(201).json(movie)
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async deleteMovie(req, res) {
        const id = req.params.id;
        try {
            const found = await Movie.findOne({
                where: {
                    id
                }
            })
            if (found) {
                Movie.destroy({
                    where: { id }
                })
                .then(() => {
                    res.redirect('/Movies')
                    })
                } 
        } catch (err) {
                res.status(500).json(err)
        }
    }

    static editFormMovie(req, res) {
        const id = req.params.id;
        Movie.findOne({
            where: { id }
        })
            .then(result => {
                console.log(result)
                res.render('editMovies.ejs', { movie: result });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static editMovie(req, res) {
        const id = req.params.id;
        const { title, year, rating } = req.body;
        Movie.update({
            title, year, rating
        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1) {
                    res.redirect('/movies')
                } else {
                    res.send('Update not done!')
                }
                // res.send(result)
            })
            .catch(err => {
                res.send(err)
            })
    }
}

module.exports = MovieController; 