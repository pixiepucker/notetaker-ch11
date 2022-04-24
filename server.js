const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();

//require json from db
const { db } = require('./db/db.json');

//write get routes here
app.get('/api/notes', (req,res) => {
    let results = db;
    res.json(results);
});

//server listen
app.listen(PORT, () => {
    console.log(`Server now on port ${PORT}`);
});