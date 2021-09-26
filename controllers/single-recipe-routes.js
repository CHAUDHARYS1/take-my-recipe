const router = require('express').Router();
const sequelize = require('../config/connection');

// add a recipe route
router.get('/addRecipe', ( req, res) => {
    if(req.session.loggedIn) {
        res.redirect('/');
        return;
    }
    res.render('addRecipe');
})


module.exports = router;