var fs = require("fs");
var path = require('path');
var inputDirPath = process.argv[2];
var inputFileExtToFilter = process.argv[3];
fs.readdir(inputDirPath,function(error, files){
    if(error){
        console.log(error);
    }
    else{
        for(var i =0; i < files.length; i++){
            var file = files[i];
            if(path.extname(file) === '.' + inputFileExtToFilter ){
                console.log(file);
            }
        }
        /*files.forEach(function(file){
            if(path.extname(file) === '.' + inputFileExtToFilter ){
                console.log(file);
            }
        });*/
    }
});