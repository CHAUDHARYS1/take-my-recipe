const { User } = require('../models');

const userdata = [
  {
<<<<<<< HEAD
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
=======
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
>>>>>>> c3ecd7dd55d42cab2d71d296e89ca786467512e6
    password: 'password9'
  }
  

];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;