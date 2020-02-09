const http = require('http');
const fs = require('fs');
const indexHtmlFile = './index.html';
const unicodeUTF8 = 'UTF-8';
var server = http.createServer(GetFromClient);

server.listen(3000);
console.log("Server Starts.");
console.log("...");

/**
 * 機能概要：createSreverの処理
 * @params {string} req
 * @params {string} res
 */
function GetFromClient(req, res) {
    var request = req;
    var resonse = res;
    fs.readFile(indexHtmlFile, unicodeUTF8, WriteToResponse);
}

function WriteToResponse(error, data) {
    response.setHeader('Content-Type','text.html');
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();    
}

function TestArrayOfFor() {
    var array = new Array;
    var array2 = new Array;
    // var array = [];

    array = { "test":10, "test1":30 };

    const loopLen = 10;

    for (var ele in array ) {
        var cha = ele;
        //var num = array[ele];
    }
    return cha;
}

var server1 = http.createServer(
    (request, response) => {
        fs.readFile('./index.html', 'UTF-8',
        (error, data) =>{
            
        })
        response.setHeader('Content-Type','text.html');
        response.write('<!DOCTYPE html><html lang="ja">');
        response.write('<head> <meta charset="utf-8"> ');
        response.write('<title> Hello </title></head>')
        response.write('<body><h1> Hello First Server </h1>');
        response.write('<p> Hello First Server </p>');
        response.write('</body></html>');
        response.end(TestArrayOfFor());
    }
);