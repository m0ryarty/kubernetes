const express = require('express')
const app = express()
const {  connectToDatabase} = require('./util/db')
const { PORT } = require('./util/config')
const { directory } = require('./middlewares/image_finder')
const cors = require('cors')



const todosRouter = require('./controllers/todos')

app.use(express.json())

app.use(cors())

app.use(express.static(directory))



app.use('/api/todos', todosRouter)

const start = async () => {
  /* await connectToDatabase() */
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()
  