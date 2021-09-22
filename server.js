const routes = require('./controllers/recipes-routes.js');
//const fs = require('fs');
//const path = require('path');
const express = require('express');
// const apiRoutes = require('./routes/apiRoutes/notesRoutes.js'); // had to uncomment this
// const htmlRoutes = require('./routes/htmlRoutes/notes.js');

const PORT = process.env.PORT || 3001;
const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded());

app.use('/api', routes);
//app.use('/', htmlRoutes);


app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});