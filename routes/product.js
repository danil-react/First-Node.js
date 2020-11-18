const express = require('express')
const controller = require('../controllers/product')
const router = express.Router()

//http://localhost:5000/api/product/getAll
router.get('/', controller.getAll)

//http://localhost:5000/api/product/getOne
router.get('/:id', controller.getOne)

//http://localhost:5000/api/product/update
router.patch('/:id', controller.update)

module.exports = router