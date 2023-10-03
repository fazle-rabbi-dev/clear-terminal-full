/**
  * October 3,2023; 10:18:45pm
*/

const { exec } = require("child_process");

function clear() {
  exec("clear", (err, data) => {
    if (!err) {
      return process.stdout.write(data);
    }
    console.error(err);
  });
}

module.exports = clear;
