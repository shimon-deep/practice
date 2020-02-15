const http = require('http');
const fs = require('fs');
const ejs = require('ejs');
const url = require('url');
const qs = require('querystring');

var iCount = 0;
const index_page = fs.readFileSync('./index.ejs','utf8');
const other_page = fs.readFileSync('./other.ejs','utf8');
const style_css = fs.readFileSync('./style.css','utf8');
const msgParseJson = JSON.parse(fs.readFileSync('./message.json', 'utf8'));

var server = http.createServer(GetFromClient);
server.listen(3000);
trace("Server Starts.");
trace("listen ...");

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
            response_index(request, response);
            break;
        case '/other':
            response_other(request, response);
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

var data = {
    'test1---':'test1msg---',
    'test2--':'test2msg--',
    'test3-':'test3msg-'
}
/**
 * 機能概要：indexのアクセス処理
 * @param {?} request
 * @param {?} response
 */
function response_index(request, response) {
    var msg = "これはIndexページです。";
    var content = ejs.render(index_page, {
        title:"Index",
        content:msg,
        data:data,
        filename:'data_item'
    });
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(content);
    response.end();
}

/**
 * 機能概要：otherのアクセス処理
 * @param {?} request
 * @param {?} response
 */
function response_other(request, response) {
    var msg = "これはOtherページです。";
    // POSTアクセス時の処理
    if (request.method == 'POST') {
        var body = '';
        
        // データ受信のイベント処理
        request.on('data', (data) => {
            body += data; 
        })
        
        // データ受信終了のイベント処理
        request.on('end', () => {
            var post_data = qs.parse(body); // データのパース
            msg +='あなた、「' + post_data.msg + '」と書きました。';
            var content = ejs.render(other_page, {
                title:"Other",
                content:msg,
            });
            response.writeHead(200, {'Content-Type': 'text/html'});
            response.write(content);
            response.end();
        })
    
    // GETアクセス時の処理
    } else {
        var msg ='ページがありません。';
        var content = ejs.render(other_page, {
            title:"Other",
            content:msg,
        });
        response.writeHead(200, {'Content-Type': 'text/html'});
        response.write(content);
        response.end();
    }
}

/**
 * 機能概要：デバッグモードでConsoleAPIが有効な場合にログを出力する
 * @param {any} any 出力したいログ
 */ 
function trace(any) {
    /**  */
    var DEBUG_MODE = true; // true:on, false:off

    if (DEBUG_MODE && this.console && typeof console.log != "undefined") {
        console.log(any);
    }
}