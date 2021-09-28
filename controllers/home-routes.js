const router = require('express').Router();
const sequelize = require('../config/connection');
const { Recipe, User, Comment } = require('../models');


//Home page route 
router.get('/', (req, res) => {
  console.log("home route called")
   console.log(req.session)
 
    Recipe.findAll({
         attributes: [
            'id',
            'title',
            'description',         
            'category',
            'ingredients',
            'imageUrl'
        ],
    })
        .then(dbPostData => {
          const recipes = dbPostData.map(recipe => recipe.get({ plain: true }));
          console.log("recipes", recipes);

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

// get single recipe
router.get('/singleRecipe/:id', (req,res) => {
  Recipe.findOne({
      where: {
        id: req.params.id
      },
      attributes: [
        'id',
        'title',
        'category',
        'imageUrl',
        'description',
        'instructions',
        'ingredients'
      ]
  })
  .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      const recipe = dbPostData.get({ plain: true });
      res.render('singleRecipe', {
        recipe,
        loggedIn: req.session.loggedIn
      });
  })
  .catch(err => {
      console.log(err);
      res.status(500).json(err);
  });
})

//login / signup page
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/signup', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
