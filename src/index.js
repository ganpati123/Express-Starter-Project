const express = require("express");

const serverConfig = require('./config/serverConfig');
const connentDB = require("./config/dbConfig");

const app = express();

app.listen(serverConfig.PORT, async() => {
   await connentDB();
   console.log(`Server started at port ${serverConfig.PORT}...!!`);
});