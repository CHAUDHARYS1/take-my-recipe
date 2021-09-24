const { User } = require('../models');

const userdata = [
  {
    username: 'test1',
    password: 'password1'
  },
  {
    username: 'test2',
    password: 'password2'
  },
  {
    username: 'test3',
    password: 'password3'
  },
  {
    username: 'test4',
    password: 'password4'
  },
  {
    username: 'test5',
    password: 'password5'
  },
  {
    username: 'test6',
    password: 'password6'
  },
  {
    username: 'test7',
    password: 'password7'
  },
  {
    username: 'test8',
    password: 'password8'
  },
  {
    username: 'test9',
    password: 'password9'
  }
  

];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;