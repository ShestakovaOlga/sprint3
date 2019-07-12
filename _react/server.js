const http = require("http");

http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html", "Access-Control-Allow-Origin": "*" });
    response.write(JSON.stringify([
        makeid(6),
        makeid(6),
        makeid(6),
        makeid(6),
        makeid(6)
    ]));
    response.end();
}).listen(7000);


function makeid(length) {
    var result           = '';
    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }