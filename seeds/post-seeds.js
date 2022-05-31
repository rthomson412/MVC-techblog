const { Post } = require('../models');

const postData = [
  {
    id: 1,
    title: "Code is code, and a cup of tea is a cup of tea.",
    post_text: "Perfect nonsense goes on in the world. Sometimes there is no plausibility at all.",
    // user_id: 1 
  },
  { id: 2,
    title: "If the cow says moo, don't shoot it in the head.",
    post_text: "The imaginary is what tends to become real.",
    // user_id: 2
  },
  {
    id: 3,
    title: "Feel good, feel nice, feel chicken soup and rice.",
    post_text: "People in elastic houses shouldnt throw stones.",
    // user_id: 3
  },
  {
    id: 4,
    title: "My cookies are not disabled. But my code is far from perfect.",
    post_text: "We write the earth we stand upon.",
    // user_id: 4
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;