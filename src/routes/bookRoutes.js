/**
 * Created by tabradford on 4/13/2016.
 */
var express = require('express');
var app = express();

var bookRouter = express.Router();
var sql = require('mssql');

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
            var request = new sql.Request();

            request.query('select * from books',
                function (err, recordset) {
                    res.render('bookListView', {
                        title: 'Books',
                        nav: nav,
                        books: recordset
                    });
                });
        });

    bookRouter.route('/:id')

        //middle ware
        .all(function (req, res, next) {
            var id = req.params.id;
            var ps = new sql.PreparedStatement();
            ps.input('id', sql.Int);
            ps.prepare('select * from books where id = @id',
                function (err) {
                    ps.execute({
                            id: req.params.id
                        },
                        function (err, recordset) {
                            if (recordset.length === 0) {
                                res.status(404).send('Not Found');
                            } else {
                                req.book = recordset[0];
                                next();
                            }

                        });
                });
        })
        .get(function (req, res) {
            var id = req.params.id;
            res.render('bookView', {
                title: 'Books',
                nav: nav,
                book: req.book
            });
        });

    return bookRouter;
};

module.exports = router;