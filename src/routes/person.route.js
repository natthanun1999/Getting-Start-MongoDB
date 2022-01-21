const express = require('express')
const router = express.Router()
const { create, findById, find, update, remove } = require('../controllers/person.controller')

router.get('/', find)
router.get('/:id', findById)
router.post('/', create)
router.patch('/:id', update)
router.delete('/:id', remove)

module.exports = router