var csv = require('csvtojson');
var path = require('path');
var fs = require('fs');
var EOL = require('os').EOL;

var csvFile = path.join(__dirname, 'csv/node1.csv');
var txtFile = path.join(__dirname, 'node1.txt');

function convertToJson() {
  fs.writeFileSync(
    txtFile,
    "",
    (err) => {
      if (err) throw err;
    }
    
  )
  csv().fromFile(csvFile)
    .subscribe((json) => {
      new Promise((resolve, reject) => {
        fs.appendFile(
          txtFile,
          `${JSON.stringify(json)}${EOL}`,
          (err) => {
            if (err) {
              console.log(err);
              reject();
            }
          }
        );
        resolve();
      })
    })
    .on('error', (err) => {
      console.log(err)
    })
    .on('done', (err) => {
      if (err) throw err;
      console.log('File succesfully created');
    })
}

convertToJson();
