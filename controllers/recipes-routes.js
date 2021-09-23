const router = require("express").Router();
const fs = require('fs');
const path = require('path');
//const uniqid = require('uniqid');
const { recipes } = require("../db/db.json");


// api/recipes/?search_query=burgers
// api/recipes/?id=23456543
// api/recipes/?category=lunch


router.get("/", (req,res) => {
  // get query parameters from req.headers
  console.log(req.query.category);

  // if query.id is not null then call function getRecipeById(query.id) ==> array of recipes
  // if search query is not null then call function searchRecipesByQuery(string)
  // category
  console.log("Hello recipes!")
  res.render('main');
})

router.get("/recipes/", (req,res) => {
  // get query parameters from req.headers
  console.log(req.query.category);

  // if query.id is not null then call function getRecipeById(query.id) ==> array of recipes
  // if search query is not null then call function searchRecipesByQuery(string)
  // category
  console.log("Hello recipes!")
  //res.json(recipes);

})

// Added by Jaya
router.get("/recipes/category/:category", (req,res) => {
  // get query parameters from req.headers
  console.log(req.query.category);
  
  // if query.id is not null then call function getRecipeById(query.id) ==> array of recipes
  // if search query is not null then call function searchRecipesByQuery(string)
  // category
  console.log("Hello category recipes!", req.params.category);
  // res.json(recipes);
  res.json(recipes);
})


module.exports = router;