const UsersModel = require('../models/users.schema')

const find = async (condition) => {
  return await UsersModel.find(condition)
}

const findOne = async (condition) => {
  return await UsersModel.findOne(condition)
}

const create = async (req) => {
  const doc = new UsersModel(req.body)

  return await doc.save()
}

const update = async (id, body) => {
  return await UsersModel.findByIdAndUpdate(id, body)
}

const remove = async (id) => {
  return await UsersModel.deleteOne({ _id: id })
}

module.exports = {
  find,
  findOne,
  create,
  update,
  remove
}