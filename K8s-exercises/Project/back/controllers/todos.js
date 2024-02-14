const router = require('express').Router()

const allTodos = require('../data/todosData')

const { saveActualImage } = require('../middlewares/image_finder')
const Todo = require('../models/todos')



router.get('/',  async (req, res) => {
      
    await saveActualImage()
    
    const todos = allTodos
   /*  const todos = await Todo.findAll() */
    res.send(todos)
})


router.post('/', async (req, res) => {
    
    const todo = await Todo.create(req.body)
    res.json(todo)
})


router.put('/:id', async (req, res) => {
     req.todo = await Todo.findByPk(req.params.id)
    if (req.todo) {
        req.todo.checked = req.body.checked
        await req.todo.save()
        res.json(
            req.todo.dataValues
        )
    } else {
        res.status(404).end()
    }
})


router.delete('/:id', async (req, res) => {
    req.todo = await Todo.findByPk(req.params.id)
    await req.todo.destroy()
})


module.exports = router