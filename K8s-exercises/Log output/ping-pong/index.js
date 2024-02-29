const express = require('express')
const app = express()
const PORT = process.env.PORT || 3000
const axios = require('axios')
require('dotenv').config()


const helloMessage = process.env.HELLO_MESSAGE
const hashFile = async () => {
  const { data } = await axios.get('http://localhost:3001/')
  return data
}



let pong = 0
const pongCount = () => {
  return pong++
}



app.get('/pingpong', async (req, res) => { 
  
  res.send(`<div>${helloMessage}</div><div>${await hashFile()}</div><div>Pong: ${pongCount()}</div>`) 
}) 


const start = async () => {
  
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()

