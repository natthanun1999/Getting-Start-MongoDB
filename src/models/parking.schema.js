const mongoose = require('mongoose')

const ParkingSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: ''
  },
  distance: {
    type: Number,
    default: 0
  },
  available: {
    type: Number,
    default: 0
  },
  lat: {
    type: Number,
    default: 0
  },
  lng: {
    type: Number,
    default: 0
  },
  photo: {
    type: String,
    default: ''
  },
  shared_by: {
    type: String,
    default: ''
  },
  shared_photo: {
    type: String,
    default: ''
  },
  shared_phone: {
    type: String,
    default: ''
  },
  shared_date: {
    type: String,
    default: ''
  }
}, { timestamps: true, collection: 'parkingdb', strict: true })

module.exports = mongoose.model('parkingdb', ParkingSchema)