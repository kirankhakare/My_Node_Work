const express = require('express');
const app = express();

// Home route
app.get('/', (req, res) => {
  res.send('<h1>Hello Kiran from Express!</h1>');
});

// About route
app.get('/about', (req, res) => {
  res.send('This is the about page.');
});

// Start server
app.listen(5000, () => {
  console.log('Server is running at http://localhost:5000');
});
