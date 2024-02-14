const path = require('path')
const fs = require('fs')
const axios = require('axios')
const { isToday } = require("date-fns")

const directory = path.join('/', 'usr', 'src', 'app', 'files')
const filePath = path.join(directory, 'image.jpg')

const fileAlreadyExists = async () => new Promise(res => {
  fs.stat(filePath, (err, stats) => {
    if (err || !stats) {
      return res(false)
    } else if (!isToday(stats.mtime)) {      
      return res(false)
    } else {
      return res(true)
    }
  })
})

const saveActualImage = async () => {
  if (await fileAlreadyExists()) return

  await new Promise(res => fs.mkdir(directory, (err) => res()))
  const response = await axios.get('https://picsum.photos/1200', { responseType: 'stream' })
  response.data.pipe(fs.createWriteStream(filePath))
}



module.exports = { saveActualImage, directory}


