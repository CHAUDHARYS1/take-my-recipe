/*
const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');

Home page route 

router.get('/', (req, res) => {
    console.log(req.session)
    Recipe.findAll({
        where: {
          id: {
            [sequelize.between]: [1,6]
          }
        },
        attributes: [
            'id',
            'title',
            'description',         
            'category',
            'ingredients'
        ],
        order: [['created_at', 'DESC']], 
        include: [
            {
              model: User,
              attributes: ['username']
            }
        ]
    })
        .then(dbPostData => {
          const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));
          res.render('index', {
            recipes,
            loggedIn: req.session.loggedIn
          });
        })
        .catch(err => {
          console.log(err);
          res.status(500).json(err);
        });
}); 
module.exports = router;
*/
const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

module.exports = router;