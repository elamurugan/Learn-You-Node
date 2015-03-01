var
    url = require('url'),
    http = require('http'),
    acceptor = http.createServer().listen(3128);

acceptor.on('request', function(request, response) {
    console.log('request ' + request.url);
    request.pause();
    var options = url.parse(request.url);
    options.headers = request.headers;
    options.method = request.method;
    options.agent = false;

    var connector = http.request(options, function(serverResponse) {
        serverResponse.pause();
        response.writeHeader(serverResponse.statusCode, serverResponse.headers);
        serverResponse.pipe(response);
        serverResponse.resume();
    });
    request.pipe(connector);
    request.resume();
});