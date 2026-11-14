// Konfigurasi aplikasi IPL Grand Sakha Huni.
// Isi API_URL dengan URL Web App Apps Script (berakhiran /exec) agar data
// tersimpan di Google Sheet dan dibagikan antar perangkat (mode Vercel/GitHub Pages).
// Jika dibuka langsung dari Apps Script, API_URL tidak perlu diisi.
// Jika dikosongkan dan bukan di Apps Script, aplikasi memakai penyimpanan lokal perangkat.
window.APP_CONFIG = {
  APP_NAME: 'IPL Grand Sakha Huni',
  API_URL: 'https://script.google.com/macros/s/AKfycbyfrnuno_gE0zMa1EGY6TPbbv7SDR2141ts7URldZ6g6Q1BbobQQa8w69jQcyKBzpKbQA/exec',      // contoh: 'https://script.google.com/macros/s/AKfycb.../exec'
  POLL_MS: 15000    // interval sinkronisasi (milidetik)
};
