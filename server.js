const { createServer } = require('http-server-spa');

// Serve your React application on port 3000
const server = createServer({
  root: './frontend',
  port: 3001,
  headers: {
    'Cross-Origin-Opener-Policy': 'same-origin',
    'Cross-Origin-Embedder-Policy': 'require-corp',
  },
});

server.start();
