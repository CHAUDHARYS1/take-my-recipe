const { User } = require('../models');

const userdata = [
  {
    firstName:"Connor",
    lastName:"Werth",
    email: 'connor2werth@gmail.com',
    password: 'password1'
  },
  {
    firstName:"Shital",
    lastName:"Chaudhary",
    email: 'shitalchau10@gmail.com',
    password: 'password2'
  },
  {
    firstName:"Jaya",
    lastName:"Gudipalli",
    email: 'gudipallijaya@gmail.com',
    password: 'password3'
  },
  {
    firstName:"Tyler",
    lastName:"Arthur",
    email: 'tyler.f.arthur@gmail.com',
    password: 'password4'
  },
  {
    firstName:"Negin",
    lastName:"Tahvildary",
    email: 'negin@mail.fresnostate.edu',
    password: 'password5'
  },
  {
    firstName:"Jeffrey",
    lastName:"Susmarski",
    email: 'jsusmarski@bootcampspot.com',
    password: 'password6'
  },
  {
    firstName:"Alexis",
    lastName:"Virgen",
    email: 'ff98@fresnou.org',
    password: 'password7'
  },
  {
    firstName:"Anthony",
    lastName:"Sandez",
    email: 'jjgm721@wowzaconcepts.com',
    password: 'password8'
  },
  {
    firstName:"Lilly",
    lastName:"Vang",
    email: 'lillyv717@gmail.com',
    password: 'password9'
  },
  {
    firstName:"Ami",
    lastName:"Hyde-Mateo",
    email: 'jjgm492@wowzaconcepts.com',
    password: 'password10'
  }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true, returning: true });

module.exports = seedUsers;