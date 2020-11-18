const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  cart: [
    {
      id:{
        type: Number,
      },
      total: {
        type: Number,
      },
    }
  ]
  // ref: 'products',
  // type: Schema.Types.ObjectId,
  // default: ''
})

module.exports = mongoose.model('users', userSchema)