const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');
const app = express();


const fs = require('fs')
const data = JSON.parse(fs.readFileSync('api1.json', 'utf8'))
const dataID1 = JSON.parse(fs.readFileSync('api2.json', 'utf8'))
const dataID2 = JSON.parse(fs.readFileSync('api3.json', 'utf8'))





app.use(cors());
app.use(express.json());
app.get('/', function (req, res) {
    res.send(data)
});

app.get('/0', function (req, res) {
    res.send(dataID1)
})

app.get('/1', function (req, res) {
    res.send(dataID2)
})


app.listen(3000, () => {
    console.log("server is running")
})