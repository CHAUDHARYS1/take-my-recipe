const express = require('express');
const routes = require('./controllers');


const sequelize = require('./config/connection');
const path = require('path');
const exphbs = require('express-handlebars');
const session = require('express-session');

const PORT = process.env.PORT || 3001;
const app = express();

const hbs = exphbs.create({});

// middleware
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);
 

// turn on connection to db and server
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}!`);
});