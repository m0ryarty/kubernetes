const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const  PORT  = process.env.PORT || 3000

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const pongsPath = path.join(directory, 'pongs.txt')
const dateAndHashPath = path.join(directory, 'dateAndHash.txt')

fs.mkdir(directory, { recursive: true }, (err) => {
  if (err) throw err;
  
})

let pong = 0
const pongCount = () => {
  return pong++
}

const getPongFile = async () => new Promise(res => {
  fs.readFile(pongsPath, (err, buffer) => {
    if (err) return console.log('FAILED TO READ FILE', '----------------', err)
    res(buffer)
  })
})

const getDateAndHashFile = async () => new Promise(res => {
  fs.readFile(dateAndHashPath, (err, buffer) => {
    if (err) return console.log('FAILED TO READ FILE', '----------------', err)
    res(buffer)
  })
})


app.get('/pingpong', async (req, res) => {

fs.writeFile(pongsPath,' Ping / Pongs: : ' + `${pongCount()}`, function (err) {
  if (err) throw err;  
  });  

  
    res.send(`${await getDateAndHashFile()} ` + '\n' + `${await getPongFile()}`) 
}) 


const start = async () => {
  
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()

