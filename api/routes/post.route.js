const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
  res.json({ d: 1, x: 2 })
})

module.exports = router
