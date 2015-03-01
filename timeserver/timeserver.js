var net = require('net');
function zeroFill(i) {
    return (i < 10 ? '0' : '') + i;
}
function currentDateAndTime () {
    var d = new Date();
    return d.getFullYear() + '-' + zeroFill(d.getMonth() + 1) + '-' + zeroFill(d.getDate()) + ' ' + zeroFill(d.getHours()) + ':' + zeroFill(d.getMinutes())
}
var server = net.createServer(function (socket) {
    socket.end(currentDateAndTime() + '\n')
});
server.listen(Number(process.argv[2]));