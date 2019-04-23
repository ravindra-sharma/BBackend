var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.static(__dirname + '\\public\\'))
app.use(cors())

app.get('/',function(req,res){
    res.sendFile(__dirname + '\\index.html');
});

app.get('/hello',function(req,res){
    res.send('Hello Heroku!!');
})