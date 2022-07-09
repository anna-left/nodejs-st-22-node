const process = require('process');
const { Transform, pipeline } = require('node:stream');
const { EOL } = require('os');

const reverseLine = () => {
  const stdin = process.stdin;
  const stdout = process.stdout;

  console.log('Please enter data');

  const transformReverse = new Transform({
    transform(chunk, _, cb) {
      const trimChunk = chunk.toString().trim();
      const reversedChunk = trimChunk.split("").reverse().join("");
      this.push(reversedChunk + EOL);
      this.push(EOL);
      cb();
    }
  })
  pipeline(
    stdin,
    transformReverse,
    stdout,
    error => {
      console.log(`Error: ${error}`);
    }
  )
};

reverseLine();