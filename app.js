var express = require('express');

var app = express();

var port = process.env.PORT || 5000;

app.use(express.static('public'));
app.set('views', './src/views');
app.set('view engine', 'jade');

app.get('/', function (req, res) {
    //res.send('Hellow World');
    res.render('index' ,{list:['a','b']});
});

app.get('/books', function (req, res) {
    res.send('Hellow Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});