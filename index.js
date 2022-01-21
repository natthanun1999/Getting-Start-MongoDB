require('dotenv').config()
const express = require('express')
const app = express()
const mongooseConnection = require('./src/providers/mongoose.provider')
const PersonRoute = require('./src/routes/person.route')

mongooseConnection()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/person', PersonRoute)
app.use('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT)
})