/*
    Module file
 */
var fs = require('fs');
var path = require('path');

module.exports = function(directory, filterStr, callback) {
    fs.readdir(directory, function (error, list) {
        if (error)
            return callback(error);
        list = list.filter(function (file) {
            return path.extname(file) === '.' + filterStr;
        });
        callback(null, list);
    });
};