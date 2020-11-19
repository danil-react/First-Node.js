const express = require('express')
const mongoose = require('mongoose')
const passport = require('passport')
const bodyParser = require('body-parser')
const authRoutes = require('./routes/auth')
const cartRoutes = require('./routes/cart')
const productRoutes = require('./routes/product')
const keys = require('./config/keys')

mongoose.connect(keys.mongoURI)
  .then(() => console.log('MongoDB connected'))
  .catch(error => console.log(error))

const app = express()

app.use(passport.initialize())
require('./middleware/passport')(passport)

app.use(require('cors')())
app.use(require('morgan')('dev'))
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/cart', cartRoutes)
app.use('/api/product', productRoutes)


module.exports = app