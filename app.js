var http = require('http');
var express = require('express');
var app = express();
var responseTime = require('response-time');

app.set('view engine', 'jade');

app.set('views', './views');
app.use(app.router);

// Mark the public dir as a static dir
app.use(express.static('./public'));
app.use(responseTime());
app.use(require('errorhandler')());




app.get('/', function(req, res) {
    res.send(app.get('env'));
    // fail();
});


app.get('/say-hello', function(req, res) {
    res.render('hello');
});

http.createServer(app).listen(3000, function() {
    console.log('App started');
});
