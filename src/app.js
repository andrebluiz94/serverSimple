const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.PORT

app.get('/', function (req,res){
    res.sendFile(__dirname + '/html/index.html')
})

app.get('/sobre', function(req, res){
    res.sendFile(__dirname + '/html/sobre.html')
})

app.get('/blog', function(req, res){
    res.send('Sobre')
})

app.use(cors())

app.listen(PORT, () =>{
    console.log(`Server running on PORT: ${PORT}`);
})

module.exports = app;