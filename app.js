const express = require('express');
const nunjucks = require('nunjucks');

const app = express();
const port = 3000;

nunjucks.configure('views', {
  autoescape: true,
  express: app
});

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.render('index.html');
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});

