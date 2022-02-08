const mongoose = require('mongoose')

const UsersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
}, { timestamps: true, collection: 'users', strict: true })

module.exports = mongoose.model('users', UsersSchema)