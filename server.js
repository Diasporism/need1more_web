var express = require('express');
var app     = express();

app.use(express.static(__dirname + '/dist'));

app.get('/', function (request, response) {
    return response.sendfile('index.html');
});

app.listen(process.env.PORT || 8080, function(){
    console.log("Server listening on port %d in %s mode", this.address().port, app.settings.env);
});
