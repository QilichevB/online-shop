const express = require('express');
const path = require('path');

const app = express();
const PORT = 3000;

// Statik fayllarni (HTML, CSS, JS, rasmlar) uzatish
app.use(express.static(path.join(__dirname)));

// Bosh sahifa uchun marshrut
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server http://localhost:${PORT} da ishga tushdi`);
});