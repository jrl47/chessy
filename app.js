// A minimal node.js server for static html, css, and javascript files adapted from:
// https://developer.mozilla.org/en-US/docs/Learn/Server-side/Node_server_without_framework

// TODO the index.html file here will need to be adjusted, I think, if I want to run this server

const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = process.env.PORT || 13854;

http.createServer((request, response) => {
    console.log('request ', request.url);

    let filePath = '.' + request.url;
    if (filePath == './' || filePath == './?authuser=0' /* for google's Web Preview feature */) {
        filePath = './index.html';
    } else {
        filePath = '.' + request.url;
    }

    let extname = String(path.extname(filePath)).toLowerCase();
    let mimeTypes = {
        '.html': 'text/html',
        '.js': 'text/javascript',
        '.css': 'text/css'
    };
    let contentType = mimeTypes[extname];

    fs.readFile(filePath, (error, content) => {
        if (error) {
            response.writeHead(500);
            response.end('Error with code: ' + error.code + '.\n');
        } else {
            response.writeHead(200, { 'Content-Type': contentType });
            response.end(content, 'utf-8');
        }
    });

}).listen(PORT);
console.log('App listening on port ' + PORT);



// DATABASE STUFF BELOW

// const sqlite3 = require('sqlite3').verbose();

// // open database in memory
// let db = new sqlite3.Database(':memory:', (err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Connected to the in-memory SQlite database.');
// });

// // close the database connection
// db.close((err) => {
//     if (err) {
//         return console.error(err.message);
//     }
//     console.log('Close the database connection.');
// });