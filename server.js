var express = require('express');
var app = express();

app.use(express.static(__dirname + '/public'));
app.use('/', express.static(__dirname + '/public/index.html'));

var port = process.env.PORT || 3030;
app.listen(port, function() {
    console.log('Listening on port ' + port);
});

