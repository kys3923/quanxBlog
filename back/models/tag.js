const mongoose = require('mongoose')

const TagSchema = new mongoose.Schema({
  tag: String,
  addedCount: Number,
  todos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Todo'
    }
  ]
}, {timestamps: true})

const Tag = mongoose.model('Tag', TagSchema)

module.exports = Tag