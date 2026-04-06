# Güvenlik Politikası (Security Policy)

## Desteklenen Sürümler
Şu anda yalnızca aşağıdaki sürümler için güvenlik güncellemeleri sağlanmaktadır:

| Sürüm | Destekleniyor mu? |
| ----- | ----------------- |
| 1.0.x | :white_check_mark: |
| < 1.0 | :x:               |

## Güvenlik Testi Süreçleri (SecOps)
Bu proje (Remote-Cronjob-API-and-Manager), dağıtık bir mimaride çalıştığı için uç noktaların (endpoint) güvenliği kritik önem taşır. Sistemin güvenliği düzenli olarak şu DevSecOps araçlarıyla test edilmelidir:

* **OWASP ZAP & Burp Suite:** API uç noktalarındaki yetkisiz erişim (Broken Access Control) ve JWT zafiyetlerini taramak için.
* **SQLMap:** Veritabanı ile etkileşime giren sorguların Injection (SQLi) açıklarına karşı test edilmesi için.
* **FFUF:** Gizli kalmış yönetici dizinlerinin veya uç noktaların tespiti için.

## Bir Zafiyet Bildirmek
Eğer bu projede bir güvenlik açığı keşfederseniz, lütfen public bir issue (sorun) açmak yerine doğrudan proje yöneticisi ile e-posta üzerinden iletişime geçin. Tüm raporlar 48 saat içerisinde değerlendirilecektir.