var myFilterFunction = require("./mymodule.js");
var inputDirPath = process.argv[2];
var inputFileExtToFilter = process.argv[3];

myFilterFunction(inputDirPath, inputFileExtToFilter, function (error, list) {
    if (error)
        return console.error(error);
    list.forEach(function (file) {
        console.log(file);
    });
});