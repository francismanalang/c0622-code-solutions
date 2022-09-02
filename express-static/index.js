const express = require('express');
const path = require('path');

const app = express();

const publicDirectory = path.join(__dirname, 'public');
const staticMiddleware = express.static(publicDirectory);

app.use(staticMiddleware);

app.listen(3000, () => {
  console.log('Express server listening on port 3000');
});
