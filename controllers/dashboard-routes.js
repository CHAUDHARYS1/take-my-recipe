const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Get all recipes for a user
router.get("/", withAuth, (req, res) => {

  Recipe.findAll({
    where: {
      user_id: req.session.user_id,
    },
    attributes: [
      "id",
      "title",
      "ingredients",
      "instructions",
      "category",
      "imageUrl",
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: Comment,
        attributes: ["id", "comment_text", "user_id", "recipe_id"],
        include: {
          model: User,
          attributes: ["firstName", "lastName"],
        },
      },
      {
        model: User,
        attributes: ["firstName", "lastName"],
      },
    ],
  })
    .then((dbUserRecipeData) => {
      const recipes = dbUserRecipeData.map((recipe) =>
        recipe.get({ plain: true })
      );
      res.render("user-dashboard", { 
        recipes, 
        loggedIn: true,
        firstname: req.session.firstName,
        lastname: req.session.lastName
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
