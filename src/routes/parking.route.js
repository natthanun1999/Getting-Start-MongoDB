const express = require('express')
const router = express.Router()
const { create, findById, find, search } = require('../controllers/parking.controller')

router.get('/', find)
router.get('/search/:query', search)
router.get('/get/:id', findById)
router.post('/add', create)

module.exports = router