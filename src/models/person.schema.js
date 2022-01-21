const mongoose = require('mongoose')

const PersonSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  }
}, { timestamps: true, collection: 'selectTopic', strict: true })

module.exports = mongoose.model('selectTopic', PersonSchema)