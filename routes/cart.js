const express = require('express')
const controller = require('../controllers/cart')
const router = express.Router()

//http://localhost:5000/api/cart/checkOut
router.get('/', controller.getAll)

//http://localhost:5000/api/cart/checkOut
router.post('/:id', controller.postOne)

//http://localhost:5000/api/cart/checkOut
router.delete('/:id', controller.remove)

//http://localhost:5000/api/cart/checkOut
router.checkout('/', controller.checkOut)


module.exports = router