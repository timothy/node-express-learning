/**
 * Created by tabradford on 4/13/2016.
 */
var express = require('express');
var app = express();

var bookRouter = express.Router();

var router = function (nav) {
    var books = [
        {
            title: 'Book Two Test',
            genre: 'Fun',
            author: 'Not me',
            read: false
        },
        {
            title: 'Book one Test',
            genre: 'Sci Fi',
            author: 'Not me',
            read: false
        },
        {
            title: 'Book 39 Test',
            genre: 'Fict',
            author: 'Not me',
            read: false
        },
        {
            title: 'Book 15 Test',
            genre: 'Comp sci',
            author: 'Not me',
            read: false
        }
    ];

    bookRouter.route('/')
        .get(function (req, res) {
            res.render('bookListView', {
                title: 'Books',
                nav: nav,
                books: books
            });
        });

    bookRouter.route('/:id')
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books',
                nav: nav,
                book: books[id]
            });
        });

    return bookRouter;
};

module.exports = router;