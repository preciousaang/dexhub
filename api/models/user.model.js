const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  role: {
    type: String,
    required: [true, 'Choose a role'],
    enum: ['superuser', 'admin', 'manager']
  },
  username: {
    type: String,
    required: [true, 'Please provide a username'],
    unique: true
  },
  password: {
    type: String,
    required: [true, 'Please provide a password']
  },
  email: {
    type: String,
    required: true,
    unique: true
  }
}, { timestamps: true })

module.exports = mongoose.model('User', userSchema)
