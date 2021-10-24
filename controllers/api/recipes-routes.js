const router = require("express").Router();
const withAuth = require("../../utils/auth");
const { Recipe, User, Comment } = require("../../models");

// get all recipes
router.get("/", (req, res) => {
  Recipe.findAll({
    attributes: [
      "id",
      "title",
      "description",
      "category",
      "imageUrl",
      "ingredients",
    ],
  })
    .then((dbRecipeData) => {
      res.json(dbRecipeData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//get single recipe
router.get("/getRecipe/:id", (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "imageUrl",
      "description",
      "category",
      "ingredients",
    ],
  })
    .then((singleReceipe) => {
      if (!singleReceipe) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(singleReceipe);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get recipes by category
router.get("/:category", (req, res) => {
  Recipe.findAll({
    where: {
      category: req.params.category,
    },
    attributes: [
      "id",
      "title",
      "description",
      "category",
      "imageUrl",
      "ingredients",
    ],
  })
    .then((dbCategoryData) => res.json(dbCategoryData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* Create Recipes */
router.post("/", withAuth, (req, res) => {
  Recipe.create({
    title: req.body.title,
    ingredients: req.body.ingredients,
    description: req.body.description,
    instructions: req.body.instructions,
    category: req.body.category,
    imageUrl: req.body.imageUrl,
    user_id: req.session.user_id,
  })
    .then((dbPostData) => {
      res.json(dbPostData);
      console.log(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

/* Update a Recipe by User_id*/
router.put("/update/:id", withAuth, (req, res) => {
  Recipe.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No recipe found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a recipe by user_id
router.delete("/:id", withAuth, (req, res) => {
  Recipe.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      res.json(dbPostData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
