const express = require('express')
const { connectMongoDb } = require('./connect')

const PORT = 8001
const app = express()

// Connect to Mongo Db
connectMongoDb('mongodb://127.0.0.1:27017/short-url').then(() =>
  console.log('MongoDb connected'),
)

app.use(express.urlencoded({ extended: false }))

app.listen(PORT, (req, res) => console.log(`Server started on port: ${PORT}`))
