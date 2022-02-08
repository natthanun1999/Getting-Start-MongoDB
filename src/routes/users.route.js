const express = require('express')
const router = express.Router()
const { create, update, remove, findById, find, search } = require('../controllers/users.controller')

router.get('/', find)
router.get('/search/:query', search)
router.get('/:id', findById)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

module.exports = router