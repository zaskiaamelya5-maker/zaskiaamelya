const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Serve file statis dari folder "public"
app.use(express.static(path.join(__dirname, '..', 'public')));

// Route utama
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '..', 'public', 'index.html'));
});

// API endpoint contoh
app.get('/api/hello', (req, res) => {
  res.json({
    message: 'Halo! API berjalan dengan baik! 🚀',
    waktu: new Date().toLocaleString('id-ID')
  });
});

app.listen(PORT, () => {
  console.log(`Server berjalan di port ${PORT}`);
});

module.exports = app;
