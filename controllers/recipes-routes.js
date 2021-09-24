const router = require("express").Router();
const { Recipes } = require('../model');

// api/recipes/?search_query=burgers
// api/recipes/?id=23456543
// api/recipes/?category=lunch

router.get("/", (req,res,next) => {
  res.render('main');
})

router.get("/recipes/", (req,res) => {

  Recipes.findAll()
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
  
})

// GET /api/users/1
router.get('/recipes/:id', (req, res) => {
  Recipes.findOne({
    where: {
      id: req.params.id
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
//Recipes by category
router.get('/recipes/:category/:name', (req, res) => {
  Recipes.findAll({
    where: {
      category: req.params.name
    }
  })
    .then(dbUserData => {
      if (!dbUserData) {
        res.status(404).json({ message: 'No user found with this id' });
        return;
      }
      res.json(dbUserData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



//Create new recipes
router.post('/recipes/', (req, res) => {

  Recipes.create({
    title: req.body.title,
    description: req.body.description,
    category: req.body.category,
    imageUrl: req.body.image_url,
    instructions: req.body.instructions
  })
    .then(dbUserData => res.json(dbUserData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});



function findRecipesBySearchQuery(query){

}

module.exports = router;