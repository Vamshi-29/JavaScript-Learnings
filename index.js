const express = require('express');
const app = express();
const bodyParser = require('body-parser'); // Corrected import
// express doesnt let you to read body for that you need to import bodyparser

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// GET request handler for the root route
app.get('/', (req, res) => {
  // This won't work correctly because req.body is typically empty for GET requests
  const msg = req.body.message;
  console.log(msg); // Changed to msg
  res.send('<h1>Hello, World!</h1>');
});

// GET request handler for the /conv route
app.get('/conv', (req, res) => {
  res.send('<h1>Hello, World heyoo!</h1>');
});

// Start server on port 8000
app.listen(8000, () => {
  console.log('Server is listening at http://localhost:8000');
});

