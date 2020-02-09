const express = require('express')
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const app = express()
const PORT = process.env.NODE_PORT || 3000

app.get('/', function (req,res){
    res.sendFile(path.resolve('./html/index.html'))
})

app.get('/sobre', function(req, res){
    res.sendFile(path.resolve('./html/sobre.html'))
})

app.get('/blog', function(req, res){
    res.send('Sobre')
})

app.use(cors())

app.listen(PORT, () =>{
    console.log(`Server running on PORT: ${PORT}`);
})

module.exports = app;