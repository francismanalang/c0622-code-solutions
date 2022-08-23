const express = require('express');
const app = express();
const jsonFile = require('./data.json');
const fs = require('fs');
app.use(express.json());

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});

app.get('/api/notes', (req, res) => {
  const notesArray = [];
  for (const id in jsonFile.notes) {
    notesArray.push(jsonFile.notes[id]);
  }
  res.status(200).json(notesArray);
});

app.get('/api/notes/:id', (req, res) => {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) && Math.sign(id) === 1) {
    res.status(400).json({ error: 'id must be a positive integer' });
  } else if (jsonFile.notes[id]) {
    res.status(200).send(jsonFile.notes[id]);
  } else {
    res.status(404).json({ error: `cannot find note with id ${id}` });
  }
});

app.post('/api/notes', (req, res) => {
  const reqBody = req.body;
  if (reqBody.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else {
    reqBody.id = jsonFile.nextId;
    jsonFile.notes[jsonFile.nextId] = reqBody;
    jsonFile.nextId++;
    const newJsonFile = JSON.stringify(jsonFile, null, 2);
    fs.writeFile('data.json', newJsonFile, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.status(201).json(reqBody);
      }
    });
  }
});

app.delete('/api/notes/:id', (req, res) => {
  const deleteId = Number(req.params.id);
  if (!Number.isInteger(deleteId) && Math.sign(deleteId) === 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (!jsonFile.notes[deleteId]) {
    res.status(404).send({ error: `cannot find note with id ${deleteId}` });
  } else {
    delete jsonFile.notes[deleteId];
    const newJsonFile = JSON.stringify(jsonFile, null, 2);
    fs.writeFile('data.json', newJsonFile, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred' });
      } else {
        res.sendStatus(204);
      }
    });
  }
});

app.put('/api/notes/:id', (req, res) => {
  const putId = Number(req.params.id);
  if (!Number.isInteger(putId) && Math.sign(putId) === 1) {
    res.status(400).send({ error: 'id must be a positive integer' });
  } else if (req.body.content === undefined) {
    res.status(400).json({ error: 'content is a required field' });
  } else if (!jsonFile.notes[putId]) {
    res.status(404).json({ error: `cannot find note with id ${putId}` });
  } else if (jsonFile.notes[putId] && req.body.content) {
    req.body.id = putId;
    jsonFile.notes[putId] = req.body;
    const newJsonFile = JSON.stringify(jsonFile, null, 2);
    fs.writeFile('data.json', newJsonFile, err => {
      if (err) {
        console.error(err);
        res.status(500).json({ error: 'An unexpected error occurred.' });
      } else {
        res.status(200).json(jsonFile.notes[putId]);
      }
    });
  }
});
