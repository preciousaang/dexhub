const { Strategy: JwtStrategy, ExtractJwt } = require('passport-jwt')

const User = require('./models/user.model')
module.exports = (passport) => {
  const opts = {
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.secretOrKey
  }
  passport.use(new JwtStrategy(opts, (jwtPayload, done) => {
    User.findOne({ _id: jwtPayload.sub }, (err, user) => {
      if (err) {
        return done(err, false)
      }
      if (user) {
        return done(null, user)
      } else {
        return done(null, false)
        // He or she could create a new account
        // Will get to that later
      }
    })
  }))
}
