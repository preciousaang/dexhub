const mongoose = require('mongoose')
mongoose.connect('mongodb://127.0.0.1/dexhub', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
})

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected')
})

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err)
})

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected.')
})

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination.')
    process.exit(0)
  })
})
