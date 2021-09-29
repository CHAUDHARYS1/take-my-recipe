const seedComments = require('./comment-seeds');
const seedRecipe = require('./recipe-seeds');
const seedUsers = require('./user-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');

  await seedUsers();
  console.log('--------------');

  await seedRecipe();
  console.log('--------------');
  
<<<<<<< HEAD
  // await seedComments();
  // console.log('--------------');



  process.exit(0);
=======
 process.exit(0);
>>>>>>> c3ecd7dd55d42cab2d71d296e89ca786467512e6
};

seedAll();