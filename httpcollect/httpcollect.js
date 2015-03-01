/*
 HTTP COLLECT
 Note: Need bl npm package -  npm install bl
 */
var http = require('http');
var bl = require('bl');
var inputUrl = process.argv[2];
http.get(inputUrl, function (response) {
    response.pipe(bl(function (error, data) {
        if (error)
            return console.error(error);
        data = data.toString();
        console.log(data.length);
        console.log(data);
    }));
});