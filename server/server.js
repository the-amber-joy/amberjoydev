var express = require('express');
var path = require('path');
var app = express();

app.use(express.static('server/public/'));

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../server/public/views/index.html'));
});

var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('Listening on Port:', port)
});