var express = require('express');
var path = require('path');
var router = express.Router();

router.get('/', function(request, response){
    console.log('resume route hit');
    response.sendFile(path.join(__dirname, '../public/views/resume.html'));
});

module.exports = router;