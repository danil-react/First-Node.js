const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const keys = require('../config/keys')
const User = require('../models/User')

module.exports.login = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if(candidate){
    const passwordResult = bcrypt.compareSync(req.body.password, candidate.password)
    if(passwordResult){
      const token = jwt.sign({
        email: candidate.email,
        userId: candidate._id
      }, keys.jwt, {expiresIn: 60 * 60})
      res.status(200).json({
        message: 'заебумбаб токен в деле',
        token: `Bearer ${token}`
      })
    } else {
      res.status(401).json({
        message: 'Пароли не совпали'
      })
    }
  } else {
    res.status(404).json({
      message: 'Такой пользователь не найден'
    })
  }
}

module.exports.register = async function (req, res) {
  const candidate = await User.findOne({email: req.body.email})

  if (candidate) {
    res.status(409).json({
      message: 'Этот email занят.'
    })
  } else {
    const salt = bcrypt.genSaltSync(10)
    const password = req.body.password
    const user = new User({
      name: req.body.name,
      email: req.body.email,
      password: bcrypt.hashSync(password, salt)
    })
    try {
      await user.save()
      res.status(201).json(user)
    } catch (e) {

    }
  }
}