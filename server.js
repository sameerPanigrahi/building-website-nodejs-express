const express = require('express');
const path = require('path');

const app = express();

const port = 3000;

app.use(express.static(path.join(__dirname, './resources/static')));
app.get('/', (request, response) => {
  response.sendFile(path.join(__dirname, './resources/static/index.html'));
});

app.get('/speaker', (request, response) => {
  response.sendFile(path.join(__dirname, './resources/static/speakers.html'));
});

app.listen(port, () => {
  console.log(`listening on ${port}`);
});
