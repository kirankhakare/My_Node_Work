const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    
    // Set a cookie
    res.setHeader('Set-Cookie', 'username=Kiran; HttpOnly');
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Cookie set');
  } 
  
  else if (req.url === '/read') {
    
    // Read cookies
    const cookies = req.headers.cookie;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Cookies: ' + cookies);
  }
});

server.listen(3000, () => 
  console.log('Server running at http://localhost:3000'
));


