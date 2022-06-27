const express = require ('express');
const fs = require ('fs');

const app = express ();
const port =  process.argv[2];
const path = process.argv[3];



app.get ('/books', (req, res) => {
    fs.readFile (path, (err, data)=>{
        if (err) return res.sendStatus(500);
        try{
            books = JSON.parse (data);
        }catch (err){
            res.sendStatus (500);
        }
        res.json (books)
    })
})

app.listen (port);