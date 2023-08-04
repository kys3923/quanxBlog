const mongoose = require('mongoose')

const TodoSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  dueDate: String,
  tags: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Tag'
    }
  ],
  description: String,
  
}, {timestamps: true})

const Todo = mongoose.model('Todo', TodoSchema)

module.exports = Todo