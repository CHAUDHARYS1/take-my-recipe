const router = require("express").Router();
const { Recipe, User, Comment } = require("../../models");

router.get("/", (req, res) => {
  console.log(req.session);
  console.log("recipe route called");
  Recipe.findAll({
    attributes: ["id", "title", "description", "category", "imageUrl", "ingredients", "instructions"],
  })
    .then((dbRecipeData) => {
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all recipes by category
router.get('/:category', (req, res) => {
  Recipe.findAll({
      where: {
        category: req.params.category
      },
      attributes: ["id", "title", "description", "category", "imageUrl", "ingredients", "instructions"],
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});


//get one recipe
router.get('/singleRecipe/:id', (req, res) => {
  console.log("params id", req.params.id)
  Recipe.findOne({   
    where: {
      id: req.params.id
    },
    attributes: [ "id", "title", "imageUrl", "description", "category", "ingredients", "instructions"],
  })
    .then(singleReceipe => {
      console.log("single recipe ", singleReceipe)
      if (!singleReceipe) {
        res.status(404).json({ message: 'No post found with this id' });
        return;
      }
      res.json(singleReceipe);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


//post a recipe

router.post("/", (req, res) => {
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    description: req.body.description,
    category: req.body.category,
    instructions: req.body.instructions,
    imageUrl: req.body.imageUrl,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});


// update by id
router.put('/update/:id',  (req, res) => {
  Recipe.update(req.body,
    {
      where: {
        id: req.params.id
      }
    }
  )
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No recipe found with this id' });
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
