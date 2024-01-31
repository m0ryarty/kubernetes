const express = require('express')
const { v4: uuidv4 } = require('uuid')
const app = express()
const path = require('path')
const fs = require('fs')
const PORT = process.env.PORT || 3001

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'dateAndHash.txt')
 
fs.mkdir(directory, { recursive: true }, (err) => {
  if (err) throw err;
  
})

const saveDateFile = () => {
  fs.writeFile(filePath, `${new Date().toISOString()} : ${uuidv4()}`, function (err) {
    if (err) throw err;
    
  }); 
  
}

setInterval(saveDateFile, 5000)


