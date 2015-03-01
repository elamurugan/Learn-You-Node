var http = require('http');
var bl = require('bl');
var results = [];
var count = 0;
var allowedUrls = 3;
function printResults() {
    for (var i = 0; i < allowedUrls; i++)
        console.log(results[i])
}
function httpGetContents(index) {
    http.get(process.argv[2 + index], function (response) {
        response.pipe(bl(function (err, data) {
            if (err)
                return console.error(err);
            results[index] = data.toString();
            count++;
            if (count == allowedUrls)
                printResults();
        }))
    });
};
for (var i = 0; i < allowedUrls; i++) {
    httpGetContents(i);
}