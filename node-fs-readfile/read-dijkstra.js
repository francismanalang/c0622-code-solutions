const fs = require('fs');

const file = 'dijkstra.txt';

fs.readFile(file, 'utf8', (err, data) => {
  if (err) {
    throw err;
  } else {
    console.log(data);
  }
});
