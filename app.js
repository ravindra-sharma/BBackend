var express = require('express');
var cors = require('cors');

var app = express();

app.use(express.static(__dirname + '\\public\\'))
app.use(cors())

app.get('/',function(req,res){
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/hello',function(req,res){
    res.send('Hello Heroku!!');
})

app.listen(process.env.PORT || 5000,function(){
    console.log('app is runnig on 5000')
})