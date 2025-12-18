# InfluFind PWA

![InfluFind Logo](assets/icons/icon-192.png)

## 📱 Tentang Aplikasi

**InfluFind** adalah Progressive Web App (PWA) yang dirancang khusus untuk UMKM dan perusahaan sebagai platform pencarian, pengelolaan, dan kerja sama dengan influencer melalui satu sistem terpadu.

### 🎯 Fitur Utama

- ✅ **Autentikasi Pengguna** - Login & Register dengan validasi lengkap
- 🏠 **Home** - Katalog 50+ influencer dengan pencarian & filter
- 💬 **Chat** - Komunikasi langsung dengan influencer
- 📊 **Transaksi** - Manajemen kerja sama & tracking status
- 👤 **Profil** - Edit profil & riwayat aktivitas

### 🎨 Desain

- **Konsep**: Minimalis modern yang profesional
- **Warna Utama**: Navy Blue (#1E3A8A)
- **Typography**: Inter / Poppins
- **Responsif**: Mobile-first design
- **Animasi**: Micro-interactions smooth

### 🚀 Teknologi

- HTML5
- CSS3 (Mobile-first)
- JavaScript ES6+
- Bootstrap 5
- Service Worker
- LocalStorage
- IndexedDB

## 📦 Struktur Folder

```
influfind-pwa/
├── assets/
│   └── icons/
│       ├── icon-192.png
│       └── icon-512.png
├── css/
│   └── styles.css
├── js/
│   └── app.js
├── .DS_Store (macOS)
├── index.html
├── Example.html
├── manifest.json
├── offline.html
├── service-worker.js
└── README.md
```

## 🔧 Instalasi & Penggunaan

### Cara 1: Buka Langsung di Browser
1. Buka file `index.html` di browser modern (Chrome, Firefox, Edge, Safari)
2. Aplikasi siap digunakan!

### Cara 2: Install sebagai PWA
1. Buka aplikasi di browser
2. Klik ikon install di address bar (⊕)
3. Atau pilih menu "Install InfluFind"
4. Aplikasi akan terpasang di home screen

### Cara 3: Local Server (Opsional)
```bash
# Menggunakan Python
python -m http.server 8000

# Menggunakan Node.js
npx serve

# Kemudian buka: http://localhost:8000
```

## 👥 Cara Menggunakan Aplikasi

### 1. Registrasi
- Buka aplikasi
- Klik "Belum punya akun? Daftar"
- Isi: Nama Lengkap, Email, Password (min 6 karakter)
- Klik "Daftar"

### 2. Login
- Masukkan Email & Password
- Centang "Ingat Saya" untuk auto-login
- Klik "Masuk"

### 3. Mencari Influencer
- Di halaman Home, gunakan search bar
- Filter berdasarkan kategori (Fashion, Kuliner, Tech, dll)
- Browse 50+ katalog influencer
- Klik kartu influencer untuk detail

### 4. Chat dengan Influencer
- Klik tombol "Chat" pada kartu influencer
- Mulai percakapan
- Kirim pesan untuk negosiasi

### 5. Ajukan Kerja Sama
- Klik tombol "Ajukan" pada kartu influencer
- Transaksi otomatis dibuat dengan status "Menunggu"
- Pantau di halaman Transaksi

### 6. Kelola Transaksi
- Buka halaman Transaksi
- Filter: Semua / Menunggu / Aktif / Selesai
- Klik "Detail" untuk info lengkap
- Ubah status sesuai progres

### 7. Edit Profil
- Buka halaman Profil
- Klik "Edit Profil"
- Update nama dan email
- Simpan perubahan

## 💾 Penyimpanan Data

Semua data disimpan secara lokal di browser menggunakan:
- **LocalStorage**: Session, user data, preferences
- **Otomatis disimpan**: Setiap perubahan langsung tersimpan
- **Aman**: Data hanya di perangkat Anda

## 🔒 Keamanan

- Password di-encode dengan Base64
- Session management
- Auto-logout pada sesi tidak valid
- Route protection untuk halaman private

## 📱 Fitur PWA

- ✅ Dapat diinstall di home screen
- ✅ Bekerja offline (Service Worker)
- ✅ Fast loading dengan caching
- ✅ Responsive di semua device
- ✅ Push notification ready
- ✅ App-like experience

## 🌐 Browser Support

- ✅ Chrome (Recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📝 Data Demo

Aplikasi sudah dilengkapi dengan:
- 50 Influencer dummy
- Kategori: Fashion, Kuliner, Tech, Beauty, Travel, Lifestyle
- Platform: Instagram, TikTok, YouTube
- Range harga: Rp 3,5 juta - Rp 7 juta

## 🔄 Update & Maintenance

Untuk update aplikasi:
1. Service Worker otomatis mendeteksi perubahan
2. Clear cache browser jika perlu
3. Refresh halaman

## 🐛 Troubleshooting

### Aplikasi tidak bisa login?
- Pastikan sudah registrasi terlebih dahulu
- Cek email dan password yang dimasukkan
- Clear LocalStorage: `localStorage.clear()`

### Service Worker tidak bekerja?
- Buka di HTTPS atau localhost
- Check console browser untuk error
- Re-register service worker

### Data hilang?
- Jangan clear browser data/cache
- Gunakan fitur "Ingat Saya" saat login
- Backup data LocalStorage secara manual jika perlu

## 👨‍💻 Developer Notes

### Modifikasi Data Influencer
Edit array `INFLUENCERS` di file `js/app.js` atau di bagian `<script>` pada `index.html`

### Kustomisasi Warna
Edit CSS variables di `css/styles.css`:
```css
:root {
    --primary: #1E3A8A;
    --secondary: #3B82F6;
    --background: #F8FAFC;
}
```

### Menambah Fitur
1. Edit HTML structure
2. Tambahkan function di JavaScript
3. Update Service Worker jika perlu
4. Test di berbagai device

## 📄 License

© 2024 InfluFind. All rights reserved.

Aplikasi ini dibuat untuk keperluan demo dan edukasi.

## 📞 Support

Untuk bantuan atau pertanyaan:
- Email: support@influfind.com (demo)
- Website: www.influfind.com (demo)

---

**Dibuat dengan ❤️ untuk UMKM Indonesia**

### Version History
- **v1.0.0** (2024) - Initial Release
  - Core features: Auth, Home, Chat, Transaction, Profile
  - 50 influencer catalog
  - PWA support
  - Offline functionality
