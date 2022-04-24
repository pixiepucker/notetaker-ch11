const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//require json from db
const { db } = require('./db/db.json');

//add middleware here
//parse incoming string/arr data
app.use(express.urlencoded({ extended: true }));
//parse incoming JSON data
app.use(express.json());

//write get routes here

//get notes
app.get('/api/notes', (req,res) => {
    let results = db;
    res.json(results);
});

//use post to create new note
app.post('/api/notes', (req,res) => {
    //check incoming content
    console.log(req.body);
    res.json(req.body);
});

//server listen
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});