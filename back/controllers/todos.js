const { create } = require('../models/User')
const Tag = require('../models/tag')
const Todo = require('../models/todo')

exports.register = async (req, res) => {

  const { title, dueDate, tags, description } = req.body

  try {
    let tempTags = []
    let createdTodo

    createdTodo = await Todo.create({
      title: title,
      dueDate: dueDate,
      description
    })

    if(createdTodo) {
      
    }

    // tags.forEach( async tag => {
    //   let foundTag = await Tag.findOne({tag: tag.tag})
    //   if(foundTag == null) {
    //     let newTag = await Tag.create({
    //       tag: tag.tag,
    //       addedCount: 1,
    //     })
    //     await tempTags.push(newTag._id)

    //     if(tempTags.length === tags.length) {
    //       await registerTodo()
    //       tag.todos = createdTodo._id
    //       await tag.save()
    //       return res.status(200).json({
    //         success: true,

    //       })
    //     }
    //   } else {
    //     let newCount = foundTag.addedCount +1
    //     let newTag = await Tag.findByIdAndUpdate({tag: tag.tag}, {addedCount: newCount})
    //     await tempTags.push(newTag._id)
    //     // run register todo
    //     registerTodo()
    //   }
    // })

    // const registerTodo = async () => {
    //   let newTodo = await Todo.create({
    //     title: title,
    //     dueDate: dueDate,
    //     tags: tempTags,
    //     description: description
    //   })
    //   createdTodo = newTodo
    // }
    // res.status(200).json({
    //   success: true,
    //   todo: newTodo,
    // })
  } catch (error) {
    console.log(error)
  }
}

// register Todo
// Todo has many Tags
// Tag has many Todos
// Loop => create Todo without any Todo id added
// if found tag in DB, addCount +1 
// if reached tags.length === search count 
// after register, add registered Todo._id to tags.todos

exports.viewAll = async (req, res) => {
  console.log('reached')

  return res.status(200).json({
    success: true
  })
}