const express = require('express');
const router = express.Router();
const cronService = require('../services/cronService');

// GET /api/jobs -> Sistemdeki tüm aktif görevleri listeler
router.get('/', (req, res) => {
    const jobs = cronService.getActiveJobs();
    res.json({ total_jobs: Object.keys(jobs).length, jobs });
});

// POST /api/jobs -> Sisteme yeni bir görev ekler
router.post('/', (req, res) => {
    const { id, name, cron_expression } = req.body;

    // Gelen veride eksik var mı kontrolü (Güvenlik / Doğrulama)
    if (!id || !name || !cron_expression) {
        return res.status(400).json({ error: "Lütfen id, name ve cron_expression alanlarını eksiksiz gönderin." });
    }

    // Görevi servise ilet
    cronService.scheduleJob(id, cron_expression, name);

    res.status(201).json({ 
        message: "Görev başarıyla oluşturuldu ve zamanlandı!", 
        jobId: id 
    });
});

module.exports = router;