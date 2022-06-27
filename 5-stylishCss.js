const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const port = process.argv[2];

app.use(require('stylus').middleware(process.argv[3] || 'public'));

app.use(express.static(process.argv[3]));

app.listen(port);