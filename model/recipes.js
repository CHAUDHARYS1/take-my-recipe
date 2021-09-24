const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

// create our User model
class Recipes extends Model {}

// define table columns and configuration
Recipes.init(
  {
    // TABLE COLUMN DEFINITIONS GO HERE
    id: {
      type: DataTypes.INTEGER,
      allowNull:  false,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
     type: DataTypes.STRING,
     allowNull:  false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull:  false,
    },
    category: {
      type: DataTypes.STRING,
      allowNull:  false,
    },
    imageUrl: {
      type: DataTypes.STRING,
      allowNull: true
    },
    instructions: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    // pass in our imported sequelize connection (the direct connection to our database)
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'recipes'
  }
);

module.exports = Recipes;