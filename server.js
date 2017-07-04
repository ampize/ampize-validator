'use strict';
var amphtmlValidator = require('amphtml-validator');
var bodyParser = require('body-parser');
var express = require('express');
var app = express();

var port = 3000;

app.use(bodyParser.text());

app.get('/', function(req, res) {
    res.send("Ampize Validator")
});

app.post('/', function (req, res) {
    amphtmlValidator.getInstance().then(function (validator) {
        if(req.body && Object.keys(req.body).length !== 0) {
            var result = validator.validateString(req.body);
            res.json(result);
        } else {
            res.status(400).send('Bad Request');
        }
    });
});

app.listen(port, function () {
    console.log('Ampize Validator is running on port ' + port);
});