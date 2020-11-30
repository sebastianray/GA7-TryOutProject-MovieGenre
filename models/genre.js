'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Movie, { through: 'models.Library' });
    }
  };
  Genre.init({
    type:{
      type : DataTypes.STRING,
      validate : {
        notEmpty: {
          msg : "Genre type must be filled thanks."
        }
      }
    }
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};