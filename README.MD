# 🚀 Remote Cronjob API & Manager

Dağıtık mimariler için tasarlanmış, uzaktan yönetilebilir ve kendi kendini test edebilen (Self-Check) modern bir görev zamanlama (job scheduling) API'si.

## 🌟 Neler Yaptık? (Ops Domains)

* **💻 Geliştirme:** Bash scriptleri ve JSON-first yaklaşımı ile sistem sağlık durumunu kontrol eden altyapı oluşturuldu. (`api_health_check.sh`)
* **🎨 UXOps:** Yöneticiler için modern, renkli (vibrant) ve mobil uyumlu bir Web Dashboard tasarlandı. (`dashboard.html`)
* **⚙️ DevOps:** GitHub Actions kullanılarak, her kod gönderiminde scriptleri otomatik test eden CI/CD pipeline'ı kuruldu. (`automation.yml`)
* **🛡️ SecOps:** Projenin güvenlik standartları ve zafiyet bildirim süreçleri tanımlandı. (`SECURITY.md`)

## 🛠️ Nasıl Çalıştırılır?

Projeyi bilgisayarınıza indirdikten sonra, terminal üzerinden otomasyon scriptini test edebilirsiniz:

\`\`\`bash
chmod +x api_health_check.sh
./api_health_check.sh
\`\`\`

Arayüzü görmek için `dashboard.html` dosyasını tarayıcınızda açmanız yeterlidir.

## 📄 Araştırma ve Dokümantasyon
Projenin mimari yapısı, en iyi uygulama yöntemleri (Best Practices) ve benzer açık kaynak araçların karşılaştırması `researchs` klasöründe detaylıca belgelenmiştir.

