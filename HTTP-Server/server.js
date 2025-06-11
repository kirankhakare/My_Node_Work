// Multiple page routing 

const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/' || req.url === '/home') {
    res.end('<h1>Home Page</h1>');
  } else if (req.url === '/about') {
    res.end('About Page');
  } else {
    res.end('404 Not Found');
  }
});

server.listen(5000, () => {
  console.log('Server running at http://localhost:5000');
});
