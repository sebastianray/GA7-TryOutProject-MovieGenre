'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Movie extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Movie.belongsToMany(models.Genre, { through: 'models.Library' });
    }
  };
  Movie.init({
    title: {
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          msg : "Title must be filled thanks."
        }
      }
    },
    year: {
      type : DataTypes.INTEGER,
      validate : {
        notEmpty: {
          msg : "Year must be filled thanks."
        },
        isNumeric : {
          msg : "Year must be a number."
        }
      }
    },
    rating: {
      type : DataTypes.INTEGER,
      validate : {
        min: 0,
        max: 100,
        notEmpty: {
          msg : "Rating must be filled thanks."
        },
        isNumeric : {
          msg : "Rating must be a number from 0 to 100."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Movie',
  });
  return Movie;
};