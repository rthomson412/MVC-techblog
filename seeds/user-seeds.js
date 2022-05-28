const { User } = require('../models');

const userData = [
  {
    id: 1,
    name: "Marcel",
    email: "marcel@email.com",
    password: "pear1234",
  },
  {
    id: 2,
    name: "Andre",
    email: "andre@email.com",
    password: "pear1234",
  },
  {
    id: 3,
    name: "Blaise",
    email: "blaise@email.com",
    password: "pear1234",
  },
  {
    id: 4,
    name: "Alfred",
    email: "alfred@email.com",
    password: "pear1234",
  }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;