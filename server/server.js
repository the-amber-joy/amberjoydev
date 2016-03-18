var express = require('express');
var app = express();

var index = require('./routes/index');
var main = require('./routes/main');
var resume = require('./routes/resume');
var contact = require('./routes/contact');
var profile = require('./routes/profile');

app.use(express.static('server/public/'));

app.use('/', index);
app.use('/main', main);
app.use('/resume', resume);
app.use('/contact', contact);
app.use('/profile', profile);


var server = app.listen(process.env.PORT || 3000, function(){
    var port = server.address().port;
    console.log('Listening on Port:', port)
});