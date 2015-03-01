var http = require('http');
var inputUrl = process.argv[2];
var startTime = new Date();
http.get(inputUrl, function ( response) {
    response.setEncoding('utf8');
    response.on('data', console.log);
    response.on('error', console.error);
});
/*
http.get({host :inputUrl}, function ( response) {
    console.log(inputUrl + " - Response Time : " + ((new Date()) - startTime )+ " ms");
});
*/