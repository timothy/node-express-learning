/**
 * Created by  on 4/27/2016.
 */
var express = require('express');
var authRouter = express.Router();
var mongodb = require('mongodb').MongoClient;

var router = function () {
        authRouter.route('/signUp')
            .post(function (req, res) {
                console.log(req.body);
            });
    return authRouter;
};

module.exports = router;