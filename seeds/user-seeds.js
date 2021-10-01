const { User } = require('../models');

const userdata = [
  {
    firstName:"testuser1",
    lastName:"testLast1",
    email: 'test1@',
    password: 'password1'
  },
  {
    firstName:"testuser2",
    lastName:"testLast2",
    email: 'test2@',
    password: 'password2'
  },
  {
    firstName:"testuser3",
    lastName:"testLast3",
    email: 'test3@',
    password: 'password3'
  },
  {
    firstName:"testuser4",
    lastName:"testLast4",
    email: 'test4@',
    password: 'password4'
  },
  {
    firstName:"testuser5",
    lastName:"testLast5",
    email: 'test5@',
    password: 'password5'
  },
  {
    firstName:"testuser6",
    lastName:"testLast6",
    email: 'test6@',
    password: 'password6'
  },
  {
    firstName:"testuser7",
    lastName:"testLast7",
    email: 'test7@',
    password: 'password7'
  },
  {
    firstName:"testuser8",
    lastName:"testLast8",
    email: 'test8@',
    password: 'password8'
  },
  {
    firstName:"testuser9",
    lastName:"testLast9",
    email: 'test9@',
    password: 'password9'
  },
  {
    firstName:"testuser10",
    lastName:"testLast10",
    email: 'test10@',
    password: 'password10'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;