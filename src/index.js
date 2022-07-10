"use strict";

var _process = require("process");

var _nodeStream = require("node:stream");

var _os = require("os");

var reverseLine = function reverseLine() {
  var stdin = _process.stdin;
  var stdout = _process.stdout;
  console.log('Please enter data');
  var transformReverse = new _nodeStream.Transform({
    transform: function transform(chunk, _, cb) {
      var reversedChunk = chunk.toString().trim().split("").reverse().join("");
      this.push(reversedChunk + _os.EOL);
      this.push(_os.EOL);
      cb();
    }
  });
  (0, _nodeStream.pipeline)(stdin, transformReverse, stdout, function (error) {
    console.log("Error: ".concat(error));
  });
};

reverseLine();