/**
 * Created by tabradford on 4/15/2016.
 */
var express = require('express');

var adminRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var books = [
    {
        title: 'A tale of New places',
        genre: 'Fun',
        author: 'Not me',
        bookId: 656,
        read: false
    },
    {
        title: 'Sound King',
        genre: 'Sci Fi',
        bookId: 24280,
        author: 'Not me',
        read: false
    },
    {
        title: 'Find an Island',
        genre: 'Fict',
        author: 'Not me',
        read: false
    },
    {
        title: 'if(it_is_Comp_Sci){cout << "Studying is Fun!";} ',
        genre: 'Comp Sci',
        author: 'My made up book',
        read: false
    }
];

var router = function (nav) {

    adminRouter.route('/addBooks')
        .get(function (req, res) {
            var url = 'mongodb://localhost:27017/libraryApp';

            mongodb.connect(url, function (err, db) {
                var collection = db.collection('books');
                collection.insertMany(books, function (err, results) {
                    res.send(results);
                    db.close();
                });
            });

        });

    return adminRouter;
};

module.exports = router;