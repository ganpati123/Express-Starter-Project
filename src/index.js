const express = require("express");
const bodyParser = require('body-parser');

const serverConfig = require('./config/serverConfig');
const connentDB = require("./config/dbConfig");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded());



app.listen(serverConfig.PORT, async() => {
   await connentDB();
   console.log(`Server started at port ${serverConfig.PORT}...!!`);
});