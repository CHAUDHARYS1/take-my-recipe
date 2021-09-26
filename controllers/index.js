const router = require('express').Router();

const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes');
const addRecipe =  require('./single-recipe-routes')

router.use('/', homeRoutes);
router.use('/', addRecipe)
router.use('/api', apiRoutes);


module.exports = router;
