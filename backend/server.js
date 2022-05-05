const express = require("express");
const dotenv = require("dotenv");

dotenv.config();
const PORT = process.env.PORT || 4000;

const server = express();

server.get('/', (req, res) => {
    res.send("API is running")
});

server.listen(PORT, console.log(`Server is running on port ${PORT}.`));