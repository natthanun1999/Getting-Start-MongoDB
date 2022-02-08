require('dotenv').config()
const express = require('express')
const cors = require('cors')
const app = express()
const mongooseConnection = require('./src/providers/mongoose.provider')
const UsersRoute = require('./src/routes/users.route')

mongooseConnection()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.use('/users', UsersRoute)
app.use('/', (req, res) => res.send('Hello World!'))

app.listen(process.env.PORT, () => {
  console.log("Server is running on port", process.env.PORT)
})