const mongoose = require('mongoose')

const postSchema = new mongoose.Schema({
  author: {
    type: mongoose.ObjectId,
    required: [true, 'User id is required']
  },
  title: {
    type: String,
    required: [true, 'Please provide a title']
  },
  body: {
    type: String,
    required: [true, 'Post requires a body']
  },
  views: {
    default: 0,
    type: Number
  }
}, { timestamps: true })

module.exports = mongoose.model('Post', postSchema)
