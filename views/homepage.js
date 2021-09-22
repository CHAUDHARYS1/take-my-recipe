const path = require('path');
const router = require("express").Router();


router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  
//   router.get('/notes', (req, res) => {
//     res.sendFile(path.join(__dirname, '../../public/notes.html'));
//   });
  
  //Wildcard route: The * will act as a wildcard, meaning any route that wasn't previously defined will fall under this request and will receive the homepage as the response.
  router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../public/index.html'));
  });

  module.exports = router;