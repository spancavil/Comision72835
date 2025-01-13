const express = require('express')
const app = express()
const port = 3000
const path = require('path')

app.get('/saludo', (req, res) => {
  // res.send('Hola mundooo!')
})

app.get('/home', (req, res) => {
  // res.sendFile(path.join(__dirname, './home/index.html'))
})

app.listen(port, () => {
  // console.log(`Example app listening on port ${port}`)
})
