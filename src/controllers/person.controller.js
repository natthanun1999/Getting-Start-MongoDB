const PersonService = require('../services/person.service')

const find = async (req, res) => {
  try {
    const data = await PersonService.find({})

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const findById = async (req, res) => {
  try {
    const data = await PersonService.findOne({ _id: req.params.id })

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const create = async (req, res) => {
  try {
    const data = await PersonService.create(req)

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const update = async (req, res) => {
  try {
    const data = await PersonService.update(req.params.id, req.body)

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const remove = async (req, res) => {
  try {
    const data = await PersonService.remove(req.params.id)

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

module.exports = {
  find,
  findById,
  create,
  update,
  remove
}