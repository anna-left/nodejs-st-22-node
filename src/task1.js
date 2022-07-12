import { stdin as _stdin, stdout as _stdout } from 'process';
import { Transform, pipeline } from 'node:stream';
import { EOL } from 'os';

const reverseLine = () => {
  const stdin = _stdin;
  const stdout = _stdout;

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