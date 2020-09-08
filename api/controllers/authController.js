const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/user.model')
module.exports = {
  user: (req, res) => {
    const user = {
      _id: req.user.id,
      username: req.user.id,
      email: req.user.email
    }
    return res.status(201).json({ user })
  },
  register: (req, res) => {
    // Work on this implementation
    bcrypt.genSalt(10, (err, salt) => {
      if (err) {
        return res.status(500).json(err)
      }
      bcrypt.hash(req.body.password, salt, (error, hash) => {
        if (error) {
          return res.status(500).json(error)
        }
        User.create({ username: req.body.username, password: hash, email: req.body.email }, (err, user) => {
          if (err) {
            return res.status(422).json(err)
          }
          return res.status(200).json(user)
        })
      })
    })
  },
  login: (req, res) => {
    User.findOne({ username: req.body.username }, async function (err, user) {
      if (err) {
        return res.status(500).json(err)
      }
      if (!user) {
        return res.status(401).json('User does not exist')
      }
      const match = await bcrypt.compare(req.body.password, user.password)
      if (!match) {
        return res.status(401).json('Incorrect Credentials')
      }

      const data = {
        sub: user._id
      }
      const token = jwt.sign(data, process.env.secretOrKey, { expiresIn: process.env.expiresIn })
      return res.status(201).json({ token })
    })
  }
}
