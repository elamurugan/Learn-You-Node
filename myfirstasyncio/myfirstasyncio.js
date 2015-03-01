var fs = require("fs");
var inputFile = process.argv[2];
fs.readFile(inputFile,function(error,contents){
    if(error){
        console.log(error);
    }
    else{
        var numberOfLines = contents.toString().split("\n").length - 1;
        console.log(numberOfLines);
    }
});