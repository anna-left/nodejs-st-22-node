import csv from 'csvtojson';
import { join } from 'path';
import { writeFileSync, appendFile } from 'fs';
import { EOL } from 'os';

async function convertToJson() {
  const csvFile = join(__dirname, 'csv/node1.csv');
  const txtFile = join(__dirname, 'node1.txt');
  writeFileSync(
    txtFile,
    "",
    (err) => {
      if (err) console.error(err);
    }
  )
  csv().fromFile(csvFile)
    .subscribe((json) => {
      appendFile(
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
