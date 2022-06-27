const express = require('express');

const app = express();
const port = process.argv[2];

app.use(express.static('public'));

app.use(express.static(process.argv[3] || Path.join(__dirname, 'public')));

app.listen(port);
