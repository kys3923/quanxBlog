const User = require('../models/User')
const ErrorResponse = require('../utils/errorResponse')
const crypto = require('crypto')

exports.register = async (req, res, next) => {

  const { username, email, password, address, contact } = req.body

  try {
    let foundAccount = await User.findOne({email: email})
    if(foundAccount) {
      return res.status(403).json({
        success: false,
        message: 'Requested email already exist.'
      })
    }

    const user = await User.create({
      name: username,
      email: email,
      password: password,
      address: address,
      contact: contact,
    })

    // Send Email

    sendToken(user, 201, res)
  } catch (error) {
    console.log(error)
    return res.status(400).json({
      success: false,
      message: 'Error at creating account on MongoDB'
    })
  }
}

exports.login = async (req, res, next) => {
  const { email, password } = req.body

  try {
    const user = await User.findOne({email: email}).select("+password")
    if(!user) {
      return next(new ErrorResponse('Can not find provided email address', 401))
    }

    const isMatch = await user.matchPasswords(password)

    if(!isMatch) {
      return next(new ErrorResponse('Please check your password again', 401))
    }

    sendToken(user, 200, res)
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }

}

const sendToken = (user, statusCode, res) => {
  const token = user.getSignedToken()
  res.status(statusCode).json({
    success: true,
    token,
    userId: user._id,
    role: user.role
  })
}