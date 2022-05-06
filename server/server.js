const express = require("express");
const PORT = process.env.PORT || 3010;
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const imageController = require('../server/imageController.js')

app.use(express.json());
app.use(require("body-parser").json())

app.post('/uploadToDB', 
    imageController.addImages,
    (req, res) => res.send(200)
);

app.get('/getImages',
imageController.getImages,
  (req, res) => res.status(200).json(res.locals.imageData)
// (req, res) => res.status(200).json([{images: "testing"}])
);
app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../bundle/index.html'));
    // res.status(200).sendFile(path.resolve(__dirname + '/../index.html'));
});

app.use(express.static(__dirname + '/../bundle'));
// app.use(express.static(path.resolve(__dirname + '/../client')));


app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

