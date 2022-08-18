const fs = require('fs');
const jsonFile = require('./data.json');

const order = process.argv[2];
const writeFunction = data => {
  fs.writeFile('data.json', data, err => {
    if (err) throw err;
  });
};

if (order === 'read') {
  for (const note in jsonFile.notes) {
    console.log(`${note}: ${jsonFile.notes[note]}`);
  }
} else if (order === 'create') {
  jsonFile.notes[jsonFile.nextId] = process.argv[3];
  jsonFile.nextId++;
  const jsonFileStringify = JSON.stringify(jsonFile, null, 2);
  writeFunction(jsonFileStringify);
} else if (order === 'delete') {
  delete jsonFile.notes[process.argv[3]];
  const jsonFileStringify = JSON.stringify(jsonFile, null, 2);
  writeFunction(jsonFileStringify);
} else if (order === 'update') {
  jsonFile.notes[process.argv[3]] = process.argv[4];
  const jsonFileStringify = JSON.stringify(jsonFile, null, 2);
  writeFunction(jsonFileStringify);
}
