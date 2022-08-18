const fs = require('fs');
const path = 'random.txt';
const data = JSON.stringify(Math.random()) + '\n';

fs.writeFile(path, data, err => {
  if (err) throw err;
});
