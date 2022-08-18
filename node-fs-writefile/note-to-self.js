const fs = require('fs');
const path = 'note.txt';
const data = process.argv[2] + '\n';

fs.writeFile(path, data, err => {
  if (err) throw err;
});
