const BlogPost = require('../models/BlogPost')

const AllPosts = async (req, res, next) => {
  const result = await BlogPost.find()

  res.send(result)
  next()
}

module.exports = AllPosts
