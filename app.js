require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')
const  mongoose  = require('mongoose')
const swaggerUi = require('swagger-ui-express')
const swaggerJsDoc = require('swagger-jsdoc')

const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "lateBlackHole",
      version: "1.0.0",
      description: "My Personal API collections"
    },
    servers: [
      {
        url: "http://localhost:3004/"
      }
    ],
  },
  apis: ["./routes/*.js"]
}

const specs = swaggerJsDoc(options)


const app = express()

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs))

app.use(express.json())

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json());

const servicePageRoutes = require('./routes/service')

app.use('/service', () => servicePageRoutes)

const PORT = 3004

app.listen(PORT, console.log(`server started on port ${PORT}`))

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true}).then(result => {
  console.log('Database connected')
})
.catch(err => {
  console.log(err)
})