const mongoose = require('mongoose');


const comments = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    
  },
  message: {
    type: String,
    required: true,

  },
  commentedAt: {
    type: Date,
    default: Date.now,
  },
});


const blogposts = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
   
  },
  content: {
    type: String,
    required: true,
    minlength: 50,
  
  },
  author: {
    type: String,
    required: true,
  
  },
  tags: {
    type: [String],
    default: [],
  },
  category: {
    type: String,
    default: 'General',
  
  },
  likes: {
    type: [String],
    default: [],
  },
  comments:{
    type:[comments],
    default: [],

  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: null,
  },
});

const BlogPosts = mongoose.model('BlogPosts', blogposts);


module.exports = BlogPosts;