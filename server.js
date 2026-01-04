// Load http module
const http = require('http');

// Load file system
const fs = require('fs');

// Load path module
const path = require('path');

// Create server
const server = http.createServer((req, res) => {

  // File to serve
  let filePath = './index.html';

  // Read the file
  fs.readFile(filePath, (err, content) => {

    // Handle errors
    if (err) {

      res.writeHead(500);

      res.end('Error loading file');

      return;

    }

    // Send HTML file
    res.writeHead(200, { 'Content-Type': 'text/html' });

    res.end(content);

  });

});

// Port number
const PORT = 8080;

// Start server
server.listen(PORT, () => {

  console.log(`Server running at http://localhost:${PORT}`);

});
