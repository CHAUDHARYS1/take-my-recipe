const router = require("express").Router();
const withAuth = require('../../utils/auth');
const { Recipe, User, Comment } = require("../../models");

// get all recipes
router.get("/", (req, res) => {
 // console.log('res recipes-routes',res);
  //console.log("recipe route called");
  Recipe.findAll({
    attributes: ["id", "title", "description", "category", "imageUrl", "ingredients"],
  })
    .then((dbRecipeData) => {
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get one recipe
router.get('/getRecipe/:id', (req, res) => {
 // console.log("params id", req.params.id)
  Recipe.findOne({   
    where: {
      id: req.params.id
    },
    attributes: [ "id", "title", "imageUrl", "description", "category", "ingredients"],
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

// get all recipes by category
router.get('/:category', (req, res) => {
  Recipe.findAll({
      where: {
        category: req.params.category
      },
      attributes: ["id", "title", "description", "category", "imageUrl", "ingredients"],
  })
  .then(dbCategoryData => res.json(dbCategoryData))
  .catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

/*post a recipe
router.post("/", (req, res) => {
  const body = req.body;
  Recipe.create({
  ...body, userId: req.session.userId
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});*/

router.post('/', withAuth, (req, res) => {
  console.log("user_id", req.session.user_id)
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    description:req.body.description,
    instructions: req.body.instructions,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    user_id: req.session.user_id
  })
    .then(dbPostData => {
      res.json(dbPostData)
      console.log(dbPostData)
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.put('/update/:id', withAuth, (req, res) => {
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


// delete by user_id
router.delete('/:id', withAuth, (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id
    }
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({ message: 'No post found with this id' });
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
