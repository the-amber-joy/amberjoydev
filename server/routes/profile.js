var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response){
    response.sendFile(path.join(__dirname, '../public/views/profile.html'));
});

module.exports = router;