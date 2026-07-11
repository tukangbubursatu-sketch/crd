# AffiliateAI-Factory

AffiliateAI-Factory adalah kerangka kerja AI untuk membangun alur kerja pembuatan konten afiliasi, riset pasar, skrip video, publishing, dan analitik performa.

## Tujuan
- Mengumpulkan insight pasar dan tren produk.
- Menghasilkan ide konten, skrip, storyboard, dan materi promosi.
- Menyimpan data ke database dan mengoptimalkan alur publikasi.

## Struktur Utama
- prompts/: prompt master, aturan global, dan definisi agen AI.
- schemas/: skema JSON untuk data produk, skrip, video, dan analitik.
- database/: schema SQL dan dokumentasi tabel.
- workflows/: pipeline konten, publishing, pembelajaran, dan retry.
- docs/: panduan pengembang, spesifikasi API, dan arsitektur sistem.

## Alur Kerja
1. Riset produk dan tren.
2. Generate persona audiens dan angle marketing.
3. Buat skrip, storyboard, dan asset video.
4. Publish ke platform yang ditentukan.
5. Kumpulkan data performa untuk tuning lanjutan.

## Konfigurasi
Salin file .env.example menjadi .env lalu isi nilai yang sesuai.
