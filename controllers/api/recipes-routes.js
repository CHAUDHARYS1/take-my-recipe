const router = require("express").Router();
const { Recipe, User, Comment } = require("../../models");

router.get("/", (req, res) => {
  console.log(req.session);
  console.log("recipe route called");
  Recipe.findAll({
    where: {
      id: {
        [sequelize.between]: [1, 6],
      },
    },
    attributes: ["id", "title", "description", "category", "ingredients"],
  })
    .then((dbRecipeData) => {
      res.json(dbRecipeData);
    })
    .catch((err) => {
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
    image_url: req.body.image_url,
  })
    .then((dbPostData) => res.json(dbPostData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
