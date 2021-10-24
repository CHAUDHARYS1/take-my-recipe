const router = require("express").Router();
const { Comment } = require("../../models");

// get all comments
router.get("/all", (req, res) => {
  Comment.findAll({
    attributes: ["id", "recipe_id", "comment_text"],
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post a comment
router.post("/", (req, res) => {
  Comment.create({
    comment_text: req.body.comment_text,
    recipe_id: req.body.recipe_id,
    user_id: req.session.user_id,
  })
    .then((dbCommentData) => res.json(dbCommentData))
    .catch((err) => {
      console.log(err);
      res.status(400).json(err);
    });
});

// delete a comment
router.delete("/all/:id", (req, res) => {
  Comment.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then((dbCommentData) => {
      if (!dbCommentData) {
        res.status(404).json({
          message: "No comment found with this id!",
        });
        return;
      }
      res.json(dbCommentData);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;
