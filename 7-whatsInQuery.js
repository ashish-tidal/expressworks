const express = require('express');

const app = express();
const port = process.argv[2];

app.get('/search', (req, res) => {
    let result = req.query.results;
    let type = req.query.type;
    let page = req.query.page;
    res.send({
        results: result,
        type : type,
        page : page
    })
})

app.listen(port);
