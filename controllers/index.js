const router = require('express').Router();

const recipeRoutes = require('./recipes-routes');

router.use('/', recipeRoutes);

module.exports = router;