const router = require('express').Router();
const { User, Recipe} = require('../../models');

router.get('/', (req, res) => {
    console.log('Hi');
    User.findAll({
        // attributes: { exclude: ['password'] }
    })
        .then(dbUserData => res.json(dbUserData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

// Create a new user
router.post('/', (req, res) => {
    console.log(req.body);
    User.create({
        firstName: req.body.firstName,
        lastName: req.body.lastName, 
        email: req.body.email,
        password: req.body.password
    })
    .then(dbUserData => {
      req.session.save(() => {
        req.session.user_id = dbUserData.id;
        req.session.email = dbUserData.email;
        req.session.loggedIn = true;

        res.json(dbUserData);
      })
    })
    .catch(err => {
        console.log(err)
        res.status(500).json(err);
    })
});

module.exports = router;