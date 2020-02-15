# practice

I made practice repository to practice!

## #requesutとイベント処理
クライアントから送信された情報は、requestオブジェクトにまとめられている。
このrequestにはクライアントから送られたデータを受信する際のイベントが用意されている。

'data'イベント
 ⇒クライアントからデータを受け取ると発生するイベント
'end'イベント
 ⇒データの受取が完了すると発生するイベント

>// オブジェクト.on(イベント名, 関数)
request.on('data', (data) => {
    body += data; 
>})

⇒(data)を受け取ってbodyに追記している。
⇒長いテキストを送る場合は少しずつ何回かに分けてデータが
　送られることもある。そのため、クライアントからデータが送られるたびに
　「data」イベントが発生する。最後のデータが送られると「end」イベントが発生し、データの受信が完了する。
  そのため、bodyに“+=”で追記する必要がある。

# 予備知識
## Node.js
Node.jsとは...
Googleが開発したV8エンジンを搭載したJavaScript対応のサーバーソフトになります。
Non-Blocking I/O 機能が特徴的で、膨大なデータ処理もスムーズにこなしてくれます。

また、npmというNode.js用パッケージ管理システムでは、28万以上のソフトが登録されていて、バックエンドの開発を強力にサポートしてくれます。

JavaScript初心者、プログラミング初心者でも Node.js とnpmを使うと割と本格的なアプリが作れたりします。
Node.js・・・サーバーソフトの Apache のようなもの、と認識するとイメージしやすいと思います。

詳しくは『 初心者にもわかりやすく解説！サーバーサイドJavaScript、Node.js とは？ 』をご参照下さい。