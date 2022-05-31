const User = require('./User');
const Post = require('./Post');
const Comment = require('./Comment');

// Create associations between the models
// User-Post relationship

//Post-User relationship
Post.belongsTo(User, {
  foreignKey: 'user_id',
  onDelete: 'CASCADE'
});

// Comment-User relationship
Comment.belongsTo(User, {
  foreignKey: 'user_id',
   onDelete: 'CASCADE'
  // hooks:true
});

// Comment-Post relationship
// User-Comment relationsihp

// Post-Comment relationship
Post.hasMany(Comment, {
  foreignKey: 'post_id',
  onDelete: 'CASCADE',
  // hooks:true
})

module.exports = { User, Post, Comment };