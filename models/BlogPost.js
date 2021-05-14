const mongoose = require('mongoose')

const BlogPostSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  }
})

module.exports = mongoose.model('posts', BlogPostSchema)