const express = require('express');
const path = require('path');
const app = express();

// Root route → serves bsf.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'bsf.html'));
});

// Optional: another route for bsf2.html
app.get('/page2', (req, res) => {
  res.sendFile(path.join(__dirname, 'bsf2.html'));
});

app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
