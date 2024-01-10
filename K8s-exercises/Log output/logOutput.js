const { v4: uuidv4 } = require('uuid');

const string = uuidv4()

const message = () => {
    console.log(`${new Date().toISOString()} : ${string}`)
}

const myTimeout = () => { setInterval(message, 5000) }


myTimeout()