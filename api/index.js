import express from 'express'
require('./config/dbConn.js')
const passport = require('passport')
require('./passport-init')(passport)

const authRoutes = require('./routes/auth.route')

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

export default {
  path: '/api',
  handler: router
}
