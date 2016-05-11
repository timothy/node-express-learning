/**
 * Created by tabradford on 4/13/2016.
 */
var express = require('express');
var bookRouter = express.Router();
var mongodb = require('mongodb').MongoClient;
var objectID = require('mongodb').ObjectID;


var router = function (nav) {
    var bookController = require('../controllers/bookController')(null, nav);

    bookRouter.use(bookController.middleware);

    bookRouter.route('/')
        .get(bookController.getIndex);

    bookRouter.route('/:id')
        .get(bookController.getById);

    return bookRouter;
};

module.exports = router;