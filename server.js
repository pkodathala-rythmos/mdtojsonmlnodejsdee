var express = require('express');
var markdown = require( "./src/markdown" );
var model = require('nodejs-model');
var request = require('request');

var MdFile = model("MdFile").attr('filePath', {
    validations: {
        presence: {
          message: 'Name is required!'
        }
      }
  });

var fs = require('fs');
var bodyParser = require('body-parser').json();
//path = require('path'),    
//filePath = path.join('https://googledocmdstorage.blob.core.windows.net/sukhiimages/md_start.txt');

var app = express();
app.post('/convert',bodyParser, function(req, res) {
    console.log('received data: ' + req.body);
    request.get(req.body.filePath, function (error, response, body) {
        if (!error && response.statusCode == 200) {
            var content = body;
            res.send( markdown.toHTMLTree( content.toString() ) );
            // Continue with your processing here.
        }
    });
    // fs.readlink(req.body.filePath, {encoding: 'utf-8'}, function(err,data){
    //     if (!err) {
    //        // console.log('received data: ' + data);
    //        res.send( markdown.toHTMLTree( data.toString() ) );
    //        // response.writeHead(200, {'Content-Type': 'text/html'});
    //        // response.write(data);
    //        // response.end();
    //     } else {
    //         console.log(err);
    //     }
    // });
    
 // res.send('Hello Seattle\n');
//  var mdFormat="Basic useful feature list:"+
 
//  " * Ctrl+S / Cmd+S to save the file"+
//  " * Ctrl+Shift+S / Cmd+Shift+S to choose to save as Markdown or HTML"+
//  " * Drag and drop a file into here to load it"+
//  " * File contents are saved in the URL so you can share files"+
 
 
//  " I'm no good at writing sample / filler text, so go write something yourself."+
 
//  " Look, a list!"+
 
//  " * foo"+
//  " * bar"+
//  " * baz"+
 
//  " And here's some code! :+1:";
 
});
app.listen(3001);
console.log('Listening on port 3001...');