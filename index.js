const express = require('express');
const fs = require('fs');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/go/:id', (req, res) => {
  const redirects = JSON.parse(fs.readFileSync('./redirects.json', 'utf8'));
  const destination = redirects[req.params.id];

  if (destination) {
    res.redirect(destination);
  } else {
    res.status(404).send('QR destination not found.');
  }
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});