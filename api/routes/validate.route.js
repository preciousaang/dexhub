const express = require('express')
const router = express.Router()

const User = require('../models/user.model')

router.get('/find-username/:username', (req, res) => {
  User.countDocuments({ username: req.params.username }, (err, count) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.json(count)
  })
})

router.get('/find-email/:email', (req, res) => {
  User.countDocuments({ email: req.params.email }, (err, count) => {
    if (err) {
      return res.status(500).json(err)
    }
    return res.json(count)
  })
})

module.exports = router
