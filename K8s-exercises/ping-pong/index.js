const express = require('express')
const app = express()
const  PORT  = process.env.PORT || 3000


let pong = 0
const pongCount = () => {
  return pong++
}


app.get('/pingpong', (req, res) => {
    res.send(`pong ${pongCount()}`)
})


const start = async () => {
  
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()

