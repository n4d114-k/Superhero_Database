const express = require('express')
const cors = require('cors')
const config = require('config')
const mongoose = require('mongoose')

const app = express()

const PORT = config.get('port') || 5000
const MONGO_URI = config.get('mongoURI')

async function start() {
  try {

    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true
    })

    app.use(cors())
    app.use(express.json())
    app.listen(PORT, () => console.log(`App has been started on port ${PORT}...`))

  } catch (e) {
    console.log(`Server Error: ${e.message}`)
    process.exit(1)
  }
}

start()
