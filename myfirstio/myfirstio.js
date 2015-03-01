var fs = require("fs");
var file = fs.readFileSync(process.argv[2]);
var fileContents = file.toString();
console.log(fileContents.split("\n").length - 1);