const express = require('express')
const app = express()
const path = require ('path')

app.use('/public', express.static(path.join(__dirname, '/public')))

app.get('/', function(req, res){
  var fileLink = path.join(__dirname, 'home.html')
  res.sendFile(fileLink)
})

app.listen(3000, function(){
    console.log('Server is running on http://localhost:3000');
})