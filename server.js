const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');


// routes
const submitted = require('./routes/api/submitted');
const app = express();

// Connect Database
connectDB();

// cors
app.use(cors({ origin: true, credentials: true }));

// Init Middleware
app.use(express.json({ extended: false }));

//app.get('/', (req, res) => res.send('Hello world!'));

// use Routes

app.use('/api/submitted', submitted);

const port = process.env.PORT || 5000;

const path = require("path");

// Step 1:
app.use(express.static(path.resolve(__dirname, "./front-end/build")));
// Step 2:
app.get("*", function (request, response) {
  response.sendFile(path.resolve(__dirname, "./front-end//build", "index.html"));
});



app.listen(port, () => console.log(`Server running on port ${port}`));
