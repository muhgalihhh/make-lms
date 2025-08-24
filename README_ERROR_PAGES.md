# 🚨 Halaman Error Profesional

Halaman error yang modern dan responsif untuk website Laravel + Inertia.js Anda.

## ✨ Fitur

- 🎨 Desain modern dengan Tailwind CSS
- 📱 Responsif di semua device
- 🔄 Komponen yang dapat digunakan kembali
- 🌐 Pesan dalam bahasa Indonesia
- ⚡ Integrasi otomatis dengan Laravel Exception Handler
- 🎯 Tombol aksi yang relevan (Kembali, Beranda, Muat Ulang, Masuk)

## 🚀 Quick Start

### 1. Halaman Error yang Tersedia

| Error | File | URL Testing | Deskripsi |
|-------|------|-------------|-----------|
| 404 | `errors/404.tsx` | `/errors/404` | Halaman tidak ditemukan |
| 403 | `errors/403.tsx` | `/errors/403` | Akses dilarang |
| 401 | `errors/401.tsx` | `/errors/401` | Belum login |
| 500 | `errors/500.tsx` | `/errors/500` | Kesalahan server |
| 419 | `errors/419.tsx` | `/errors/419` | Token kadaluarsa |
| 429 | `errors/429.tsx` | `/errors/429` | Terlalu banyak request |
| 503 | `errors/503.tsx` | `/errors/503` | Maintenance mode |

### 2. Penggunaan Otomatis

Error akan ditangani secara otomatis oleh Exception Handler. Tidak perlu konfigurasi tambahan!

### 3. Penggunaan Manual

```php
// Di Controller
return Inertia::render('errors/404');

// Atau dengan exception
throw new NotFoundHttpException('Halaman tidak ditemukan');
```

### 4. Testing

Jalankan development server dan kunjungi:
- `http://localhost:8000/errors/404`
- `http://localhost:8000/errors/403`
- `http://localhost:8000/errors/401`
- dll.

## 🎨 Kustomisasi

### Mengubah Desain
Edit `resources/js/components/ErrorPage.tsx`

### Mengubah Pesan
Edit `app/Exceptions/Handler.php`

### Menambah Error Baru
1. Buat file di `resources/js/pages/errors/`
2. Gunakan komponen `ErrorPage`
3. Tambahkan route testing di `routes/web.php`

## 📚 Dokumentasi Lengkap

Lihat `ERROR_PAGES_USAGE.md` untuk dokumentasi lengkap.

## 🔧 Troubleshooting

```bash
# Clear cache Laravel
php artisan cache:clear

# Build assets
npm run build

# Restart server
php artisan serve
```

---

**Note**: Route testing (`/errors/*`) sebaiknya dihapus di production.