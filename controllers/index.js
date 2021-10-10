const router = require('express').Router();

const apiRoutes = require('./api');
const homeRoutes = require('./home-routes');
const dashboardRoutes = require('./dashboard-routes');
// const addRecipe =  require('./single-recipe-routes')

router.use('/', homeRoutes);
// router.use('/', addRecipe)
router.use('/api', apiRoutes);
router.use('/dashboard', dashboardRoutes);


module.exports = router;
