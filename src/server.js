const express = require('express');
const cron = require('node-cron');

const app = express();

// JSON verilerini okuyabilmek için gerekli ayar
app.use(express.json());

// Temel bir kontrol (Health Check) rotası
app.get('/', (req, res) => {
    res.json({ 
        message: "Remote Cronjob API Node.js ile Çalışıyor! 🚀",
        status: "healthy"
    });
});

// Sunucuyu ayağa kaldırma
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Sunucu http://localhost:${PORT} adresinde başarıyla başlatıldı.`);
    console.log('Cronjob motoru hazır bekliyor...');
});