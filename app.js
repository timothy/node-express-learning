var express = require('express');

var app = express();
//Microsoft sql
var sql = require('mssql');
var config = {
    user: 'books',
    password: 'YourPword@',
    server: 'YourAzure.database.windows.net', // You can use 'localhost\\instance' to connect to named instance
    database: 'YourDB',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
};
//Remember to connect to your sql server
sql.connect(config, function (err) {
    console.log(err);
});

var port = process.env.PORT || 5000;
var nav = [{
    Link: '/Books',
    Text: 'Book'
}, {
    Link: '/Authors',
    Text: 'Author'
}];

var bookRouter = require('./src/routes/bookRoutes')(nav);

app.use(express.static('public'));
app.set('views', './src/views');

app.set('view engine', 'ejs');

app.use('/Books', bookRouter);

app.get('/', function (req, res) {
    res.render('index', {
        title: 'Hello From Render',
        nav: nav
    });
});

app.get('/books', function (req, res) {
    res.send('Hello Books');
});

app.listen(port, function (err) {
    console.log('running server on port ' + port);
});

