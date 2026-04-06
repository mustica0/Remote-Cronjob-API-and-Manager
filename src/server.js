const express = require('express');
const app = express();

// Rota dosyalarını içe aktarıyoruz
const jobRoutes = require('./routes/jobRoutes');

app.use(express.json());

// Oluşturduğumuz rotaları /api/jobs yoluna bağlıyoruz
app.use('/api/jobs', jobRoutes);

app.get('/', (req, res) => {
    res.json({ message: "Remote Cronjob API Hazır! /api/jobs endpointini kullanabilirsiniz." });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`✅ Sunucu başlatıldı: http://localhost:${PORT}`);
    console.log('⏳ Görev yöneticisi dinlemede...');
});