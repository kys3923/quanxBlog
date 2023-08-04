const express = require('express')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser')
const connectDb = require('./db/db')

const app = express()
connectDb()

app.use(cors())
app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.json({
    message: 'server is running'
  })
})

app.use('/auth', require('./routes/auth'))
app.use('/todos', require('./routes/todos'))

let server = app.listen(process.env.PORT || 8000, () => console.log(`server is runnding at 8000`))

module.exports = server