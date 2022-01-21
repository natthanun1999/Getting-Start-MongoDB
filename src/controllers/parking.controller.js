const ParkingService = require('../services/parking.service')

const find = async (req, res) => {
  try {
    const data = await ParkingService.find({})

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const search = async (req, res) => {
  try {
    const data = await ParkingService.find({ name: req.params.query })

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const findById = async (req, res) => {
  try {
    const data = await ParkingService.findOne({ _id: req.params.id })

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

const create = async (req, res) => {
  try {
    const data = await ParkingService.create(req)

    return res.status(200).json({ data })
  } catch (error) {
    return res.status(500).json({ message: error })
  }
}

module.exports = {
  find,
  search,
  findById,
  create
}