const { nanoid } = require('nanoid');
const express = require('express');
const app = express();

// Mengimpor router
const router = require('../src/routes');

// Middleware untuk mengizinkan parsing body request sebagai JSON
app.use(express.json());

// Menggunakan router untuk menangani rute-rute
app.use('/', router);

// Menjalankan server pada port yang ditentukan
const port = 9000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
