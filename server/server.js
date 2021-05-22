const path = require('path');
const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded());

app.use(express.static(path.join(__dirname, '../build')));

app.get('/', (req, res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'));
});

app.use((err, req, res, next) => {
  return res.sendStatus(500);
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
})