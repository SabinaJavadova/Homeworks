const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors');
const router = require('./router/index');  // Eğer 'router' doğru şekilde tanımlandıysa
const app = express();
const port = 3000;

// .env dosyasını kullanmak için dotenv'i başlatıyoruz
dotenv.config();

// MongoDB URL'ini ve portu alıyoruz
const DB_URL = process.env.DB_URL;
const PORT = process.env.PORT || 3000;

// CORS middleware'ini aktif hale getiriyoruz
app.use(cors());  // Bu tüm origin'lere izin verir

// JSON verisi ile çalışabilmek için express.json() middleware'ini kullanıyoruz
app.use(express.json());

// Anasayfa rotası
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// API route'ları için router'ı kullanıyoruz
app.use('/', router);

// MongoDB bağlantısı ve sunucu başlatma
mongoose.connect(DB_URL)
  .then(() => {
    console.log('MongoDB Connected!');
    app.listen(PORT, () => {
      console.log(`Example app listening on port ${PORT}`);
    });
  })
  .catch(err => {
    console.error('Error connecting to MongoDB:', err);
  });
