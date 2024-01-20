const { v4: uuidv4 } = require('uuid')

const express = require('express')
const app = express()
const  PORT  = process.env.PORT || 3000

/* app.use(express.json()) */

const string = uuidv4()

const message = () => {
  let newLog = `${new Date().toISOString()} : ${string}`
  return newLog
}


app.get('/', (req, res) => {
    res.send(`${message()}`)
})


const start = async () => {
  
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()

