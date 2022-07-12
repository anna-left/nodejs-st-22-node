var csv = require('csvtojson');
var path = require('path');
var fs = require('fs');
var EOL = require('os').EOL;

async function convertToJson() {
  var csvFile = path.join(__dirname, 'csv/node1.csv');
  var txtFile = path.join(__dirname, 'node1.txt');
  fs.writeFileSync(txtFile,
    "",
    function (err) {
      if (err) console.error(err);
    });
  csv().fromFile(csvFile).subscribe(function (json) {
    fs.appendFile(txtFile, "".concat(JSON.stringify(json)).concat(EOL), function (err) {
      if (err) {
        console.error(err);
      }
    });
  }).on('done', function () {
    console.log('File was successfully created');
  }).on('error', console.error);
}

convertToJson();
