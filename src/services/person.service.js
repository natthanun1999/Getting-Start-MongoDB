const mongoose = require('mongoose')
const PersonModel = require('../models/person.schema')

const find = async (condition) => {
  return await PersonModel.find(condition)
}

const findOne = async (condition) => {
  return await PersonModel.findOne(condition)
}

const create = async (req) => {
  const doc = new PersonModel(req.body)

  return await doc.save()
}

const update = async (id, body) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return req.status(400).send('Invalid ID!')

  return await PersonModel.findByIdAndUpdate(id, body)
}

const remove = async (id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return req.status(400).send('Invalid ID!')

  return await PersonModel.deleteOne({ _id: id })
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
}