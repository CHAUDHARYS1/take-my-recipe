const router = require("express").Router();
const sequelize = require("../config/connection");
const { Recipe, User, Comment } = require("../models");
const withAuth = require("../utils/auth");

//Home page route
router.get("/", (req, res) => {
  Recipe.findAll({
    attributes: [
      "id",
      "title",
      "description",
      "category",
      "ingredients",
      "imageUrl",
      "instructions",
    ],
    order: [["created_at", "DESC"]],
    include: [
      {
        model: User,
        attributes: ["email"], //add all attributes
      },
    ],
  })
    .then((dbPostData) => {
      const recipes = dbPostData.map((recipe) => recipe.get({ plain: true }));
      console.log("recipes", recipes);
      res.render("index", {
        recipes,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get single recipe
router.get("/singleRecipe/:id", (req, res) => {
  Recipe.findOne({
    where: {
      id: req.params.id,
    },
    attributes: [
      "id",
      "title",
      "category",
      "imageUrl",
      "description",
      "instructions",
      "ingredients",
    ],
    include: [
      {
        model: Comment,
        attributes: [
          "id",
          "user_id",
          "comment_text",
          "created_at",
          "updated_at",
        ],
        include: [
          {
            model: User,
            attributes: ["first_name", "last_name"],
          },
        ],
      },
    ],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this id" });
        return;
      }
      const recipe = dbPostData.get({ plain: true });
      recipe.comments.map((comment) => {
        comment.nickname =
          comment.user.first_name[0].toUpperCase() +
          comment.user.last_name[0].toUpperCase();
        // console.log(comment);
      });
      // console.log(recipe.comments[0])
      res.render("singleRecipe", {
        recipe,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

router.get("/category/:category", (req, res) => {
  // console.log(req.params.category)
  Recipe.findAll({
    where: {
      category: req.params.category,
    },
    attributes: ["id", "title", "category", "imageUrl"],
    order: [["created_at", "DESC"]],
  })
    .then((dbPostData) => {
      if (!dbPostData) {
        res.status(404).json({ message: "No post found with this category" });
        return;
      }
      const recipes = dbPostData.map((recipe) => recipe.get({ plain: true }));
      const category = req.params.category;
      res.render("category", {
        recipes,
        category,
        loggedIn: req.session.loggedIn,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// add a recipe route
router.get("/addRecipe", (req, res) => {
  if (!req.session.loggedIn) {
    res.redirect("/login");
    return;
  }
  res.render("createRecipe");
});

// when clicking on edit post, will be redirected to this page
router.get("/editMyRecipe/:id", withAuth, (req, res) => {
  Recipe.findByPk(req.params.id, {
    attributes: [
      "id",
      "title",
      "ingredients",
      "instructions",
      "category",
      "imageUrl",
    ],
    include: [
      {
        model: User,
        attributes: ["email"],
      },
    ],
  })
    .then((dbPostData) => {
      const recipe = dbPostData.get({ plain: true });

      res.render("editMyRecipe", {
        recipe,
        loggedIn: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

//login / signup page
router.get("/login", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }
  res.render("login");
});

router.get("/signup", (req, res) => {
  if (req.session.loggedIn) {
    res.redirect("/");
    return;
  }

  res.render("signup");
});

module.exports = router;
