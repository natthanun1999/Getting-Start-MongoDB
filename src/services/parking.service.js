const ParkingModel = require('../models/parking.schema')

const find = async (condition) => {
  return await ParkingModel.find(condition)
}

const findOne = async (condition) => {
  return await ParkingModel.findOne(condition)
}

const create = async (req) => {
  const doc = new ParkingModel(req.body)

  return await doc.save()
}

module.exports = {
  find,
  findOne,
  create
}