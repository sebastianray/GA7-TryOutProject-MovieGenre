const { Genre } = require('../models')

class GenreController {
    static async getGenre(req, res) {
        try {
            const result = await Genre.findAll({
                order: [
                    ['id', 'ASC']
                ],
            })
            // res.status(200).json(result);
            res.render('genres.ejs', { genres: result });
        }
        catch (err) {
            res.status(500).json(err);
        }
    }

    static addFormGenre(req, res) {
        res.render('addGenres.ejs');
    }
    static async addGenre(req, res) {
        const { type } = req.body;
        try {
            const found = await Genre.findOne({
                where: {
                    type
                }
            })
            if (found) {
                res.status(409).json({
                    msg: "That genre is already exist! Try another movie."
                })
            } else {
                const genre = await Genre.create({
                    type
                })
                res.redirect('/genres')
                // res.status(201).json(genre)
            }
        } catch (err) {
            res.status(500).json(err)
        }
    }

    static async deleteGenre(req, res) {
        const id = req.params.id;
        try {
            const found = await Genre.findOne({
                where: {
                    id
                }
            })
            if (found) {
                Genre.destroy({
                    where: { id }
                })
                .then(() => {
                    res.redirect('/genres')
                    })
                } 
        } catch (err) {
                res.status(500).json(err)
        }
    }

    static editFormGenre(req, res) {
        const id = req.params.id;
        Genre.findOne({
            where: { id }
        })
            .then(result => {
                console.log(result)
                res.render('editGenres.ejs', { genre: result });
            })
            .catch(err => {
                res.send(err);
            })
    }

    static editGenre(req, res) {
        const id = req.params.id;
        const { type } = req.body;
        Genre.update({
            type
        }, {
            where: { id }
        })
            .then(result => {
                if (result[0] === 1) {
                    res.redirect('/genres')
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

module.exports = GenreController; 