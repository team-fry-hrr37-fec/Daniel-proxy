const express = require('express');
const app = express();
const port = 2001;
const cors = require('cors');

app.use('/', express.static(__dirname + '/../public'));

app.use(express.json());

app.use(cors);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});