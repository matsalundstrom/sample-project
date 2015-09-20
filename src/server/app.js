/*jshint node:true*/
'use strict';

var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var favicon = require('serve-favicon');
var logger = require('morgan');
var port = process.env.PORT || 7200;

var environment = process.env.NODE_ENV;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(logger('dev'));
app.use(favicon(__dirname + '/favicon.ico'));

console.log('About to crank up node');
console.log('PORT=' + port);
console.log('NODE_ENV=' + environment);

app.get('/ping', function(req, res, next) {
  console.log(req.body);
  res.send('pong');
});

switch (environment){
  case 'production':
    console.log('** PRODUCTION ON AZURE **');
    console.log('serving from ' + './build/');
    process.chdir('./../../');
    app.use('/', express.static('./build/'));
    break;
  case 'stage':
  case 'build':
    console.log('** BUILD **');
    console.log('serving from ' + './build/');
    app.use('/', express.static('./build/'));
    break;
  default:
    console.log('** DEV **');
    console.log('serving from ' + './src/client/ and ./');
    app.use('/', express.static('./src/client/'));
    app.use('/', express.static('./'));
    break;
}

app.listen(port, function() {
  console.log('Express server listening on port ' + port);
  console.log('env = ' + app.get('env') +
    '\n__dirname = ' + __dirname  +
    '\nprocess.cwd = ' + process.cwd());
});
