#!/bin/bash
# Remote Cronjob API Sağlık Kontrolü ve Otomasyon Scripti

echo "Cronjob API'sine bağlantı test ediliyor..."

# Örnek bir API JSON yanıtını simüle ediyoruz (Gerçekte curl ile API'den çekilir)
API_RESPONSE='{"status": "healthy", "active_workers": 3, "pending_jobs": 12}'

# jq aracı ile JSON verisini parse etme (JSON-first yaklaşımı)
STATUS=$(echo $API_RESPONSE | jq -r '.status')
PENDING=$(echo $API_RESPONSE | jq -r '.pending_jobs')

if [ "$STATUS" = "healthy" ]; then
    echo "Sistem sağlıklı! Bekleyen görev sayısı: $PENDING"
else
    echo "HATA: API yanıt vermiyor!"
    exit 1
fi