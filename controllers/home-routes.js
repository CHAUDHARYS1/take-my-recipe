const router = require('express').Router();
const { Op } = require('sequelize');
const { Recipe, User, Comment } = require('../models');

/* Home page route */

router.get('/', (req, res) => {
    console.log(req.session)
    Recipe.findAll({
        where: {
          id: {
            [Op.between]: [1,6]
          }
        },
        attributes: [
            'id',
            'title',
            'ingredients',
            'recipe_steps',
            'category',
            'image_url'
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
          res.render('homepage', {
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