const express = require('express');
const fs = require('fs');
const path = require('path');
const PORT = process.env.PORT || 3001;
const app = express();
const { v4: uuidv4 } = require('uuid');
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
    //parse incoming data
    const notesData = JSON.parse(fs.readFileSync('./db/db.json'));
    //add unique ID to notes
    req.body.id = notesData.length.toString();
    //add note to json/arr
    const newNote = req.body;
    notesData.push(newNote);
    //write new note to db/db.json
    fs.writeFileSync(
        './db/db.json',
        JSON.stringify(notesData)
    );
    //send back response
    res.json(notesData);
});

//server listen
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});