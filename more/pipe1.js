var $express = require('express'),
    $http = require('http'),
    $request = require('request'),
    $url = require('url'),
    $path = require('path'),
    $util = require('util'),
    $mime = require('mime');

var app = $express();

app.configure(function(){
    app.set('port', process.env.PORT || 9090);
    app.use($express.bodyParser());
    app.use($express.methodOverride());

    app.use('/', function(req, res){
        var apiUrl = 'http://localhost:9091';
        console.log(apiUrl);
        var url = apiUrl + req.url;

        //req.pipe($request(url).pipe(res));

        //$request(url).pipe(res);
        //req.pipe(res);

        $request(url).pipe(res);
    });
});

$http.createServer(app).listen(app.get('port'), function () {
    console.log("Express server listening on port " + app.get('port'));

    if (process.argv.length > 2 && process.argv.indexOf('-open') > -1) {
        var open = require("open");
        open('http://localhost:' + app.get('port') + '/', function (error) {
            if (error !== null) {
                console.log("Unable to launch application in browser. Please install 'Firefox' or 'Chrome'");
            }
        });
    }
});