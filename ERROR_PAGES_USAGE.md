# Halaman Error Profesional

Dokumentasi ini menjelaskan penggunaan halaman error yang telah dibuat untuk website Anda.

## Fitur

- ✅ Desain modern dan responsif
- ✅ Mendukung berbagai jenis error (404, 403, 401, 500, 419, 429, 503)
- ✅ Komponen yang dapat digunakan kembali
- ✅ Pesan error yang informatif dalam bahasa Indonesia
- ✅ Tombol aksi yang relevan (Kembali, Beranda, Muat Ulang, Masuk)
- ✅ Integrasi dengan Laravel Exception Handler
- ✅ Mendukung Inertia.js

## Halaman Error yang Tersedia

### 1. 404 - Halaman Tidak Ditemukan
- **File**: `resources/js/pages/errors/404.tsx`
- **URL**: `/errors/404`
- **Gunakan untuk**: Halaman yang tidak ditemukan
- **Fitur**: Tombol Kembali dan Beranda

### 2. 403 - Akses Dilarang
- **File**: `resources/js/pages/errors/403.tsx`
- **URL**: `/errors/403`
- **Gunakan untuk**: Akses yang tidak diizinkan
- **Fitur**: Tombol Kembali dan Beranda

### 3. 401 - Akses Tidak Sah
- **File**: `resources/js/pages/errors/401.tsx`
- **URL**: `/errors/401`
- **Gunakan untuk**: User yang belum login
- **Fitur**: Tombol Kembali, Beranda, dan Masuk

### 4. 500 - Kesalahan Server
- **File**: `resources/js/pages/errors/500.tsx`
- **URL**: `/errors/500`
- **Gunakan untuk**: Kesalahan server internal
- **Fitur**: Tombol Kembali, Beranda, dan Muat Ulang

### 5. 419 - Halaman Kadaluarsa
- **File**: `resources/js/pages/errors/419.tsx`
- **URL**: `/errors/419`
- **Gunakan untuk**: Token CSRF kadaluarsa
- **Fitur**: Tombol Kembali, Beranda, dan Muat Ulang

### 6. 429 - Terlalu Banyak Request
- **File**: `resources/js/pages/errors/429.tsx`
- **URL**: `/errors/429`
- **Gunakan untuk**: Rate limiting
- **Fitur**: Countdown timer dan tombol aksi

### 7. 503 - Layanan Tidak Tersedia
- **File**: `resources/js/pages/errors/503.tsx`
- **URL**: `/errors/503`
- **Gunakan untuk**: Maintenance mode
- **Fitur**: Tombol Kembali, Beranda, dan Muat Ulang

### 8. Generic Error
- **File**: `resources/js/pages/errors/GenericError.tsx`
- **Gunakan untuk**: Error lainnya yang tidak spesifik
- **Fitur**: Dapat dikustomisasi dengan props

## Komponen ErrorPage

Komponen utama yang digunakan oleh semua halaman error:

```tsx
import ErrorPage from '@/components/ErrorPage';

<ErrorPage
  code="404"
  title="Halaman Tidak Ditemukan"
  description="Deskripsi error..."
  icon={<Search className="h-16 w-16 text-blue-500" />}
  showHomeButton={true}
  showBackButton={true}
  showRefreshButton={false}
  customActions={<Button>Custom Action</Button>}
/>
```

### Props

- `code` (string): Kode error (wajib)
- `title` (string): Judul error (wajib)
- `description` (string): Deskripsi error (wajib)
- `icon` (ReactNode): Icon untuk error (opsional)
- `showHomeButton` (boolean): Tampilkan tombol Beranda (default: true)
- `showBackButton` (boolean): Tampilkan tombol Kembali (default: true)
- `showRefreshButton` (boolean): Tampilkan tombol Muat Ulang (default: false)
- `customActions` (ReactNode): Tombol aksi kustom (opsional)

## Exception Handler

File `app/Exceptions/Handler.php` telah dikonfigurasi untuk menangani berbagai jenis error secara otomatis:

- **TokenMismatchException** → Halaman 419
- **AuthenticationException** → Halaman 401
- **AuthorizationException** → Halaman 403
- **ModelNotFoundException** → Halaman 404
- **NotFoundHttpException** → Halaman 404
- **TooManyRequestsHttpException** → Halaman 429
- **ServiceUnavailableHttpException** → Halaman 503
- **HttpException (500+)** → Halaman 500
- **HttpException lainnya** → GenericError

## Cara Menggunakan

### 1. Error Otomatis
Error akan ditangani secara otomatis oleh Exception Handler. Tidak perlu melakukan apa-apa.

### 2. Error Manual
Untuk menampilkan halaman error secara manual:

```php
// Di Controller
return Inertia::render('errors/404');

// Atau dengan data
return Inertia::render('errors/GenericError', [
    'code' => '422',
    'title' => 'Data Tidak Valid',
    'description' => 'Data yang Anda masukkan tidak valid.',
]);
```

### 3. Redirect ke Error Page
```php
// Di Controller
return redirect()->route('errors.404');

// Atau dengan exception
throw new NotFoundHttpException('Halaman tidak ditemukan');
```

## Testing

Untuk testing halaman error, gunakan route yang telah disediakan:

- `/errors/404` - Test halaman 404
- `/errors/403` - Test halaman 403
- `/errors/401` - Test halaman 401
- `/errors/500` - Test halaman 500
- `/errors/419` - Test halaman 419
- `/errors/429` - Test halaman 429
- `/errors/503` - Test halaman 503

**Catatan**: Route testing ini sebaiknya dihapus di production.

## Kustomisasi

### Mengubah Desain
Edit file `resources/js/components/ErrorPage.tsx` untuk mengubah desain global.

### Mengubah Pesan
Edit file `app/Exceptions/Handler.php` untuk mengubah pesan error.

### Menambah Error Baru
1. Buat file baru di `resources/js/pages/errors/`
2. Import dan gunakan komponen `ErrorPage`
3. Tambahkan route di `routes/web.php` (untuk testing)
4. Tambahkan handler di `app/Exceptions/Handler.php` (jika diperlukan)

## Best Practices

1. **Pesan yang Jelas**: Gunakan pesan yang mudah dipahami user
2. **Aksi yang Relevan**: Sediakan tombol aksi yang sesuai dengan konteks error
3. **Desain Konsisten**: Gunakan desain yang konsisten dengan website
4. **Responsif**: Pastikan halaman error responsif di semua device
5. **Loading State**: Pertimbangkan untuk menambahkan loading state
6. **Analytics**: Tambahkan tracking untuk error yang sering terjadi

## Troubleshooting

### Error tidak muncul
1. Pastikan Exception Handler terdaftar di `bootstrap/app.php`
2. Periksa apakah route error sudah benar
3. Pastikan file komponen ada dan dapat diimport

### Desain tidak sesuai
1. Periksa apakah Tailwind CSS sudah terinstall
2. Pastikan komponen UI sudah terinstall
3. Periksa apakah ada konflik CSS

### Pesan tidak berubah
1. Clear cache Laravel: `php artisan cache:clear`
2. Clear cache Vite: `npm run build`
3. Restart development server