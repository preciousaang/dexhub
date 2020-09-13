import express from 'express'
require('./config/dbConn.js')
const passport = require('passport')
require('./passport-init')(passport)

const authRoutes = require('./routes/auth.route')
const validateRoutes = require('./routes/validate.route')
const postRoutes = require('./routes/post.route')

const router = express.Router()
const app = express()
router.use((req, res, next) => {
  Object.setPrototypeOf(req, app.request)
  Object.setPrototypeOf(res, app.response)
  req.res = res
  res.req = req
  next()
})

router.use('/auth', authRoutes)
router.use('/validator', validateRoutes)
router.use('/posts', postRoutes)

router.use((req, res) => {
  return res.status(404).json('resource not found')
})

export default {
  path: '/api',
  handler: router
}
