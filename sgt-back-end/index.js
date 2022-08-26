const pg = require('pg');
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    rejectUnauthorized: false
  }
});

const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/grades', (req, res) => {
  const sql = `
  SELECT *
  FROM "grades"
  `;

  db.query(sql)
    .then(result => {
      const allGrades = result.rows;
      res.status(200).json(allGrades);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.post('/api/grades', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  if (!name || !course || score === undefined) {
    res.status(400).json({ error: 'Invalid or missing. name, course and score are required' });
  } else if (!Number.isInteger(score) || score < 0 || score > 100) {
    res.status(400).json({ error: 'Please provide a valid score between 0-100' });
    return;
  }
  const params = [name, course, score];
  const sql = `
  INSERT into "grades" ("name", "course", "score")
  VALUES ($1, $2, $3)
  RETURNING *
  `;

  db.query(sql, params)
    .then(result => {
      const newGrade = result.rows[0];
      res.status(201).json(newGrade);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.put('/api/grades/:gradeId', (req, res) => {
  const name = req.body.name;
  const course = req.body.course;
  const score = Number(req.body.score);
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
  } else if (!name || !course || !Number.isInteger(score)) {
    res.status(400).json({ error: 'Invalid or missing. name, course and score are required.' });
  } else if (score < 0 || score > 100 || score === undefined) {
    res.status(400).json({ error: 'Please provide a valid score between 0-100' });
  }
  const params = [name, course, score, gradeId];
  const sql = `
  UPDATE "grades"
  SET "name" = $1,
      "course" = $2,
      "score" = $3
  WHERE "gradeId" = $4
  RETURNING *
  `;

  db.query(sql, params)
    .then(result => {
      const updatedGrade = result.rows[0];
      if (!updatedGrade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.status(200).json(updatedGrade);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.delete('/api/grades/:gradeId', (req, res) => {
  const gradeId = Number(req.params.gradeId);
  if (!Number.isInteger(gradeId) || gradeId <= 0) {
    res.status(400).json({ error: '"gradeId" must be a positive integer' });
    return;
  }
  const params = [gradeId];
  const sql = `
  DELETE from "grades"
  WHERE "gradeId" = $1
  RETURNING *
  `;

  db.query(sql, params)
    .then(result => {
      const deletedGrade = result.rows[0];
      if (!deletedGrade) {
        res.status(404).json({ error: `Cannot find grade with gradeId ${gradeId}` });
      } else {
        res.sendStatus(204);
      }
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: 'An unexpected error occurred.' });
    });
});

app.listen(3000, () => {
  // eslint-disable-next-line no-console
  console.log('Express server listening on port 3000');
});
