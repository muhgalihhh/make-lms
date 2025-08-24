# Halaman Welcome - Platform LMS

## Deskripsi
Halaman welcome yang lengkap untuk user yang belum login pada platform LMS. Halaman ini menampilkan katalog lembaga, kelas pro dan gratis, widget cuaca, live chat, dan fitur bantuan darurat.

## Fitur Utama

### 1. Hero Section
- **Deskripsi**: Bagian utama halaman dengan gradient background dan call-to-action buttons
- **Fitur**:
  - Judul dan deskripsi platform
  - Tombol "Mulai Belajar Gratis" dan "Lihat Kelas Pro"
  - Design responsive dengan gradient background

### 2. Widget Cuaca
- **Komponen**: `WeatherWidget.tsx`
- **Fitur**:
  - Menampilkan suhu, kondisi cuaca, dan lokasi
  - Icon cuaca yang dinamis berdasarkan kondisi
  - Informasi kelembaban dan kecepatan angin
  - Tombol refresh untuk update data
  - Loading state dan error handling
  - Design card yang menarik

### 3. Katalog Lembaga Berdasarkan Rating
- **Pengelompokan**:
  - **Lembaga Premium** (Rating 4.5+): Ditampilkan dengan badge hijau
  - **Lembaga Terpercaya** (Rating 4.0-4.4): Ditampilkan dengan badge biru
- **Informasi Lembaga**:
  - Nama lembaga
  - Deskripsi
  - Rating dan jumlah ulasan
  - Nomor telepon
  - Email
  - Alamat
  - Website (jika ada)
- **Design**: Card layout dengan hover effects

### 4. Kelas Pro
- **Fitur**:
  - Menampilkan kelas berbayar dengan akses lengkap
  - Informasi harga dalam format Rupiah
  - Badge "Pro" untuk identifikasi
  - Tombol "Daftar Sekarang" dan "Download"
  - Informasi lembaga dan kategori

### 5. Kelas Gratis
- **Fitur**:
  - Menampilkan kelas gratis untuk pemula
  - Badge "Gratis" untuk identifikasi
  - Tombol "Mulai Belajar" dan "Download"
  - Pesan pengarahan ke kelas pro untuk materi lengkap
  - Informasi lembaga dan kategori

### 6. Live Chat Integration
- **Komponen**: `TawkToChat.tsx`
- **Fitur**:
  - Integrasi dengan Tawk.to
  - Auto-load script saat halaman dimuat
  - Konfigurasi property ID dan widget ID
  - Error handling dan cleanup

### 7. Bantuan & Dukungan
- **Komponen**: `EmergencyHelp.tsx`
- **Fitur**:
  - **Tim Darurat 24/7**: Bantuan darurat untuk masalah teknis/keamanan
  - **Customer Support**: Bantuan umum untuk pengguna
  - **Bantuan Akademik**: Bantuan terkait materi pembelajaran
- **Akses Kontak**:
  - Telepon langsung
  - WhatsApp chat
  - Email
  - Status online/offline
- **Quick Actions**:
  - Live Chat
  - FAQ
  - Pusat Bantuan
  - Kontak Kami

### 8. Footer
- **Fitur**:
  - Informasi platform
  - Link layanan
  - Link perusahaan
  - Social media links
  - Copyright notice

## Struktur File

```
resources/js/
├── pages/
│   └── welcome.tsx                 # Halaman utama welcome
├── components/
│   ├── WeatherWidget.tsx          # Widget cuaca
│   ├── TawkToChat.tsx             # Live chat integration
│   └── EmergencyHelp.tsx          # Bantuan darurat
└── layouts/
    └── base-layout.tsx            # Layout dasar

app/
├── Http/Controllers/
│   └── WelcomeController.php      # Controller untuk welcome page
└── Models/
    ├── Institution.php            # Model lembaga
    ├── Course.php                 # Model kursus
    └── Review.php                 # Model ulasan

database/migrations/
└── 2025_08_23_140000_add_rating_and_review_count_to_institutions_table.php
```

## API Endpoints

### Welcome Page Data
- `GET /` - Halaman welcome dengan data lengkap
- `GET /api/welcome/institutions` - Data lembaga
- `GET /api/welcome/pro-courses` - Data kelas pro
- `GET /api/welcome/free-courses` - Data kelas gratis
- `GET /api/welcome/weather` - Data cuaca
- `GET /api/welcome/institutions-by-rating` - Lembaga berdasarkan rating

## Database Schema

### Tabel Institutions
```sql
- id (primary key)
- name (string)
- description (text)
- phone (string)
- email (string)
- address (text)
- website (string)
- rating (decimal 3,2) - NEW
- review_count (integer) - NEW
- created_at
- updated_at
```

## Konfigurasi

### Tawk.to Live Chat
Untuk mengaktifkan live chat, update property ID dan widget ID di `welcome.tsx`:

```tsx
<TawkToChat propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
```

### Weather API
Untuk integrasi dengan weather API real, update fungsi `loadWeather` di `WeatherWidget.tsx`:

```tsx
const loadWeather = async () => {
    try {
        const response = await fetch('/api/weather');
        const data = await response.json();
        setWeather(data.data);
    } catch (err) {
        setError('Gagal memuat data cuaca');
    }
};
```

## Responsive Design

Halaman welcome menggunakan Tailwind CSS dengan breakpoints:
- **Mobile**: Grid 1 kolom
- **Tablet**: Grid 2 kolom (md:)
- **Desktop**: Grid 3-4 kolom (lg:)

## Performance Optimization

1. **Lazy Loading**: Komponen dimuat sesuai kebutuhan
2. **Image Optimization**: Gunakan format WebP dan lazy loading
3. **Code Splitting**: Komponen terpisah untuk mengurangi bundle size
4. **Caching**: API responses di-cache untuk performa lebih baik

## Security Features

1. **XSS Protection**: Data di-sanitize sebelum ditampilkan
2. **CSRF Protection**: Token CSRF untuk form submissions
3. **Input Validation**: Validasi input di backend
4. **Rate Limiting**: Pembatasan request untuk API endpoints

## Testing

### Unit Tests
```bash
# Test komponen React
npm run test:unit

# Test controller PHP
php artisan test --filter=WelcomeController
```

### Integration Tests
```bash
# Test API endpoints
php artisan test --filter=WelcomeApiTest
```

## Deployment

1. **Build Assets**:
```bash
npm run build
```

2. **Run Migrations**:
```bash
php artisan migrate
```

3. **Cache Configuration**:
```bash
php artisan config:cache
php artisan route:cache
```

## Maintenance

### Regular Tasks
1. Update data cuaca setiap jam
2. Backup database harian
3. Monitor API performance
4. Update dependencies bulanan

### Monitoring
- Error logging dengan Laravel Log
- Performance monitoring dengan Laravel Telescope
- Uptime monitoring dengan external service

## Troubleshooting

### Common Issues

1. **Live Chat Tidak Muncul**
   - Periksa property ID dan widget ID
   - Pastikan script Tawk.to ter-load
   - Cek console untuk error

2. **Data Tidak Muncul**
   - Periksa koneksi database
   - Cek API endpoints
   - Verifikasi data seeding

3. **Weather Widget Error**
   - Periksa API key weather service
   - Cek rate limiting
   - Verifikasi response format

## Support

Untuk bantuan teknis, hubungi:
- **Email**: support@platformlms.com
- **Phone**: +62 21 2345 6789
- **Live Chat**: Tersedia 24/7 di halaman welcome