const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
const PORT = process.env.PORT || 3001



app.get('/', (req, res) => {
  res.send(`${new Date().toISOString()} : ${uuidv4()}`)
})

const start = async () => {
  
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()


