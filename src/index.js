var csv = require('csvtojson');
var path = require('path');
var fs = require('fs');
var EOL = require('os').EOL;

async function convertToJson() {
  var csvFile = path.join(__dirname, 'csv/node1.csv');
  var txtFile = path.join(__dirname, 'node1.txt');
  fs.writeFileSync(
    txtFile,
    "",
    (err) => {
      if (err) console.error(err);
    }
  )
  csv().fromFile(csvFile)
    .subscribe((json) => {
      fs.appendFile(
        txtFile,
        `${JSON.stringify(json)}${EOL}`,
        (err) => {
          if (err) {
            console.error(err);
          }
        }
      );
    })
    .on('done', (error) => {
      console.log('File was successfully created');
    })
    .on('error', console.error)
}

convertToJson();
