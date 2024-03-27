const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Custom middleware to log request details
app.use((req, res, next) => {
    console.log(`[${new Date().toLocaleString()}] ${req.method} ${req.url}`);
    next(); // Call next middleware in the chain
});

// GET route
app.get('/', (req, res) => {
    res.send('GET request received');
});

app.post('/', (req, res) => {
    console.log(req.body); // Log the request body
    const { message } = req.body;
    res.send(`POST request received with message: ${message}`);
});



// Start the server
app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});
