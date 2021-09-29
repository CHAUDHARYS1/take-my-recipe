const { User } = require('../models');

const userdata = [
  {
    firstName: 'first1',
    lastName: 'last1',
    email: 'test1@gmail.com',
    password: 'password1'
  },
  {
    firstName: 'first2',
    lastName: 'last2',
    email: 'test2@gmail.com',
    password: 'password2'
  },
  {
    firstName: 'first3',
    lastName: 'last3',
    email: 'test3@gmail.com',
    password: 'password3'
  },
  {
    firstName: 'first4',
    lastName: 'last4',
    email: 'test4@gmail.com',
    password: 'password4'
  },
  {
    firstName: 'first5',
    lastName: 'last5',
    email: 'test5@gmail.com',
    password: 'password5'
  },
  {
    firstName: 'first6',
    lastName: 'last6',
    email: 'test6@gmail.com',
    password: 'password6'
  },
  {
    firstName: 'first7',
    lastName: 'last7',
    email: 'test7@gmail.com',
    password: 'password7'
  },
  {
    firstName: 'first8',
    lastName: 'last8',
    email: 'test8@gmail.com',
    password: 'password8'
  },
  {
    firstName: 'first9',
    lastName: 'last9',
    email: 'test9@gmail.com',
    password: 'password9'
  }
  

];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;