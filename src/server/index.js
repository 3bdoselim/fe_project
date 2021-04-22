var path = require('path')
const express = require('express')
const mockAPIResponse = require('./mockAPI.js')
var bodyParser = require('body-parser')
var cors = require('cors')
const dotenv = require('dotenv')
const fetch = require('node-fetch')

dotenv.config()

var json = {
    'title': 'test json response',
    'message': 'this is a message',
    'time': 'now'
}

const app = express()
app.use(cors())
app.use(express.json({ extended: false }))
// to use json
app.use(bodyParser.json())
// to use url encoded values
app.use(bodyParser.urlencoded({
  extended: true
}))

app.use(express.static('dist'))

console.log(JSON.stringify(mockAPIResponse))

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

app.post('/checklang', function (req, res) {
    const sentData = {
        key: process.env['API_KEY'],
        txt: req.body.txt,
    }
    console.log(req.body.inputText)
    console.log(req, res)
    console.log(sentData)
    const queryParams = new URLSearchParams(sentData).toString()
    const url = 'https://api.meaningcloud.com/lang-2.0?'+queryParams
    fetch(url)
        .then(result => result.json() )
        .then(result => res.send(result) )
        .catch(err => res.status(500).send(err))
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})
