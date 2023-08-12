const express = require('express')
const { connectMongoDb } = require('./connect')
const urlRoute = require('./routes/url.js')

const PORT = 5000
const app = express()

// Connect to Mongo Db
connectMongoDb('mongodb://127.0.0.1:27017/short-url').then(() =>
  console.log('MongoDb connected'),
)

app.use(express.urlencoded({ extended: false }))

app.use('/url', urlRoute)

app.listen(PORT, (req, res) => console.log(`Server started on port: ${PORT}`))
