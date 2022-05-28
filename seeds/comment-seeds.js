const { Comment } = require('../models');

const commentData = [
  {
    id: 1,
    comment_text: "I have forced myself to contradict myself in order to avoid conforming to my own taste.",
    post_id: 1,
    user_id: 4
  },
  {
    id: 2,
    comment_text: "As beautiful as the chance encounter of a sewing machine and an umbrella on an operating table.",
    post_id: 1,
    user_id: 2
  },
  {
    id: 3,
    comment_text: "The challenge of escaping is finding the door again.",
    post_id: 2,
    user_id: 3
  },
  {
    id: 4,
    comment_text: "Nothing that surrounds us is object, all is subject.",
    post_id: 3,
    user_id: 2
  },
  {
    id: 5,
    comment_text: "Cine n-ar dori să moară visând că moare?",
    post_id: 3,
    user_id: 4
  },
  {
    id: 6,
    comment_text: "Exit, pursued by a bear.",
    post_id: 4,
    user_id: 2
  },
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;