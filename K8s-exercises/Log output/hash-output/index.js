const { v4: uuidv4 } = require('uuid')
const axios = require('axios').default

const express = require('express')
const app = express()
const path = require('path')
const fs = require('fs')

const  PORT  = process.env.PORT || 3000

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'dateFile.txt')

const getFile = async () => new Promise(res => {
  fs.readFile(filePath, (err, buffer) => {
    if (err) return console.log('FAILED TO READ FILE', '----------------', err)
    res(buffer)
  })
})


app.get('/', async(req, res) => {

  const dateNow = await getFile()
  const outputString = `${dateNow} : ${uuidv4()}`
    res.send(outputString)
})


const start = async () => {
  
  app.listen(PORT, () => {
  
  console.log(`Server running on port ${PORT}`)
  })

}

start()

