const router = require('express').Router();

const userRoutes = require('./user-routes');
const recipeRoutes = require('./recipes-routes');
const commentRoutes = require('./comment-routes');


router.use('/', recipeRoutes);
router.use('/comments', commentRoutes)
router.use('/users', userRoutes);

module.exports = router;