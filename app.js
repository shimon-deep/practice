const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');

unicodeUTF8 = 'UTF-8';
var iCount = 0;
const index_page = fs.readFileSync('./index.ejs','utf8');
const other_page = fs.readFileSync('./other.ejs','utf8');
const style_css = fs.readFileSync('./style.css','utf8');

var server = http.createServer(GetFromClient);

server.listen(3000);
trace("Server Starts.");
trace("...");

// ここまでメインプログラム=================

/**
 * 機能概要：createSreverの処理
 * @param {?} req リクエスト
 * @param {?} res レスポンス
 */
function GetFromClient(request, response) {
    var url_parts = url.parse(request.url, true);
    trace(url_parts);

    switch (url_parts.pathname) {
        case '/':
            var query = url_parts.query;
            var content = "test...";

            if (query.msg != void 0) {
                content += 'Your message is ' + query.msg + '.';
            }
            var content = ejs.render(index_page, {
                title:"suzuki",
                content:content,
            });
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(content);
            response.end();
            break;

        case '/other':
            var content = ejs.render(other_page, {
                title:"other",
                content:"new satoru",
            });
            response.writeHead(200, {'Content-Type': 'text/html'})
            response.write(content);
            response.end();
            break;
        
        case '/style.css':
            response.writeHead(200, {'Content-Type': 'text/css'})
            response.write(style_css);
            response.end();
            break;
        
        deafult:
            response.writeHead(200, {'Content-Type': 'text/plain'})
            response.end('no page...');
            break;
    }
    iCount++;
    trace("Someone accesses me. [" + iCount + "番目のアクセスです]");
}

/**
 * 機能概要：readFile完了後の処理
 * @param {?} error [正常] -
 *                  [異常] エラーに関する情報をまとめたオブジェクトを格納
 * @param {?} data  ファイルから読み込んだデータ
 */
function WriteToResponse(error, data) {
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(data);
    response.end();
}

/**
 * 機能概要：createSreverの処理
 * @param {?} req リクエスト
 * @param {?} res レスポンス
 */
function GetFromClient_01(req, res) {
    request = req;
    response = res;
    fs.readFile('./index.html', 'UTF-8', WriteToResponse);
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

/** デバッグモードかどうか。本番公開時にはfalseにする */
var DEBUG_MODE = true;

/** デバッグモードでConsoleAPIが有効な場合にログを出力する */ 
function trace(s) {
    if (DEBUG_MODE && this.console && typeof console.log != "undefined") {
        console.log(s);
    }
}