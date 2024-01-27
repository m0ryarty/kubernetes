const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 3001

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'dateFile.txt')
 
fs.mkdir(directory, { recursive: true }, (err) => {
  if (err) throw err;
  
})

const saveDateFile = () => {
  fs.writeFile(filePath, `${new Date().toISOString()}`, function (err) {
    if (err) throw err;
    
  }); 
  
}

setInterval(saveDateFile, 5000)

app.get('/', (req, res) => {
    res.send(`${new Date().toISOString()}`)
})

const start = async () => {
  
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()

