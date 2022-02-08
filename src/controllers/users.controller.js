const UsersService = require('../services/users.service')

const find = async (req, res) => {
  try {
    const data = await UsersService.find({})

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const search = async (req, res) => {
  try {
    const data = await UsersService.find({ name: req.params.query })

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const findById = async (req, res) => {
  try {
    const data = await UsersService.findOne({ _id: req.params.id })

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const create = async (req, res) => {
  try {
    const data = await UsersService.create(req)

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const update = async (req, res) => {
  try {
    const data = await UsersService.update(req.params.id, {
      name: req.body.name,
      email: req.body.email
    })

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const remove = async (req, res) => {
  try {
    const data = await UsersService.remove(req.params.id)

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

module.exports = {
  find,
  search,
  findById,
  create,
  update,
  remove
}