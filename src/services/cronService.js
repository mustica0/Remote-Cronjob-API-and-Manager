const cron = require('node-cron');

// Şimdilik veritabanı kurana kadar görevleri hafızada tutacağımız liste
const activeJobs = {};

const scheduleJob = (jobId, cronExpression, taskName) => {
    // node-cron kütüphanesi ile görevi zamanla
    const job = cron.schedule(cronExpression, () => {
        console.log(`\n[🚀 ÇALIŞTI] Görev: ${taskName}`);
        console.log(`[Zaman] ${new Date().toLocaleString()}`);
        // İleride buraya başka API'lere istek atan (webhook) kodlar eklenecek
    });

    // Görevi listeye kaydet
    activeJobs[jobId] = {
        taskName,
        cronExpression,
        status: 'running',
        jobInstance: job
    };

    console.log(`[EKLENDİ] Yeni görev sisteme işlendi: ${taskName} (${cronExpression})`);
    return true;
};

// Dışarıdan sistemdeki aktif görevleri görmek için kullanılacak fonksiyon
const getActiveJobs = () => {
    const jobs = {};
    for (const [id, details] of Object.entries(activeJobs)) {
        jobs[id] = { name: details.taskName, cron: details.cronExpression, status: details.status };
    }
    return jobs;
};

module.exports = { scheduleJob, getActiveJobs };