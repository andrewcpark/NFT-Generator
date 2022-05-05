const express = require("express");
const PORT = process.env.PORT || 3010;
const app = express();
const path = require('path');
const mongoose = require('mongoose');

const databaseURL="mongodb+srv://andrewcpark:chanwon123@cluster0.olcmu.mongodb.net/nftImages?retryWrites=true&w=majority"

mongoose.connect(databaseURL, {useNewUrlParser: true});
const db = mongoose.connection;

db.on('error', (error) => console.error(error));
db.once('open', () => console.log('Connected to Database'));


app.use(express.static(__dirname + '/../bundle'));

app.get('/', (req, res) => {
    res.status(200).sendFile(path.join(__dirname + '/../bundle/index.html'));
});


app.post("/uploadToDB", (req, res) => {
    console.log(req.body.image);
})

app.listen(PORT, () => {
    console.log(`Server listening on ${PORT}`);
});

