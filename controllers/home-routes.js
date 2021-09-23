
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');

//Home page route 

router.get('/', (req, res) => {
  console.log("home route called")
 /*   console.log(req.session)
    console.log("home route called")
    Recipe.findAll({
         attributes: [
            'id',
            'title',
            'description',         
            'category',
            'ingredients'
        ],
    })
        .then(dbPostData => {
          const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));
          console.log("recipes", recipes);
          res.render('index', {
            recipes
           // loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        }); */
        res.render('index');
}); 




module.exports = router;
