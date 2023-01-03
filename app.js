require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const  mongoose  = require('mongoose')


const app = express()

const PORT = 3004

app.listen(PORT, console.log(`server started on port ${PORT}`))

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
  console.log('Database connected')
})
.catch(err => {
  console.log(err)
})