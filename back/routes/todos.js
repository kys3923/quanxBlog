const express = require('express')
const router = express.Router()

const { register, viewAll } = require('../controllers/todos')

router.route('/register').post(register)
router.route('/viewAll').get(viewAll)

module.exports = router