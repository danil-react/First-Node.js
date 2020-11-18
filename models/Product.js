const mongoose = require('mongoose')
const Schema = mongoose.Schema

const productSchema = new Schema({
  id: {
    type: Number,
    required: true
  },
  img: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  info: {
    type: String,
    required: true
  },
  total: {
    type: String,
    required: true
  },
})

module.exports = mongoose.model('products', productSchema)