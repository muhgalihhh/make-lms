# Refactoring Error Routes dan Perbaikan Error 403

## Masalah yang Ditemukan

1. **Route Error Pages Terlalu Panjang di web.php**: Semua route untuk error pages (404, 403, 401, dll.) ditulis langsung di file `routes/web.php` yang membuat file tersebut terlalu panjang dan kurang terstruktur.

2. **Error 403 Masih Menggunakan Default Laravel**: Meskipun sudah ada custom error page untuk 403, masih ada kemungkinan error 403 menggunakan halaman default Laravel karena:
   - Debug mode masih aktif (`APP_DEBUG=true`)
   - Cache yang belum dibersihkan
   - Middleware yang menggunakan `abort(403)` tanpa pesan yang tepat

## Solusi yang Diterapkan

### 1. Memisahkan Route Error Pages

**File Baru**: `routes/errors.php`
```php
<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Error pages for testing (remove in production)
Route::prefix('errors')->name('errors.')->group(function () {
    Route::get('/404', function () {
        return Inertia::render('errors/404');
    })->name('404');
    
    Route::get('/403', function () {
        return Inertia::render('errors/403');
    })->name('403');
    
    // ... route lainnya
});
```

**Update di `routes/web.php`**:
```php
require __DIR__ . '/auth.php';
require __DIR__ . '/settings.php';
require __DIR__ . '/errors.php'; // Menambahkan require untuk errors.php
```

### 2. Perbaikan Middleware RoleMiddleware

**File**: `app/Http/Middleware/RoleMiddleware.php`
```php
// Sebelum
if (!in_array($userRole, $roles)) {
    abort(403, 'Unauthorized');
}

// Sesudah
if (!in_array($userRole, $roles)) {
    abort(403, 'Anda tidak memiliki izin untuk mengakses halaman ini.');
}
```

### 3. Konfigurasi Environment

**File**: `.env`
```env
APP_DEBUG=false  # Mematikan debug mode agar custom error pages digunakan
```

## Struktur Route yang Baru

```
routes/
├── web.php          # Route utama aplikasi
├── auth.php         # Route autentikasi
├── settings.php     # Route pengaturan
└── errors.php       # Route error pages (BARU)
```

## Keuntungan Refactoring

1. **Kode Lebih Terstruktur**: Route error pages terpisah dari route utama
2. **Maintenance Lebih Mudah**: Perubahan pada error pages tidak mempengaruhi route utama
3. **Readability**: File `web.php` menjadi lebih bersih dan mudah dibaca
4. **Modularity**: Error pages bisa di-disable dengan mudah di production

## Testing Error Pages

Untuk menguji error pages, akses URL berikut:
- `/errors/403` - Halaman 403 Forbidden
- `/errors/404` - Halaman 404 Not Found
- `/errors/401` - Halaman 401 Unauthorized
- `/errors/500` - Halaman 500 Internal Server Error
- Dan seterusnya...

## Error Handler Configuration

File `app/Exceptions/Handler.php` sudah dikonfigurasi dengan benar untuk menangani berbagai jenis error dan menggunakan custom error pages:

```php
if ($e instanceof AuthorizationException) {
    return Inertia::render('errors/403', [
        'code' => '403',
        'title' => 'Akses Dilarang',
        'description' => 'Anda tidak memiliki izin untuk mengakses halaman ini.',
    ])->toResponse($request)->setStatusCode(403);
}
```

## Langkah Selanjutnya

1. **Clear Cache**: Jalankan perintah berikut untuk membersihkan cache:
   ```bash
   php artisan config:clear
   php artisan route:clear
   php artisan view:clear
   php artisan cache:clear
   ```

2. **Test Error Pages**: Akses halaman yang memerlukan permission admin dengan user non-admin untuk menguji error 403

3. **Production Deployment**: Pastikan `APP_DEBUG=false` di production environment

## Catatan Penting

- Error pages testing routes (`/errors/*`) sebaiknya dihapus atau diproteksi di production
- Pastikan semua custom error pages sudah dibuat di `resources/js/pages/errors/`
- Middleware `RoleMiddleware` sekarang memberikan pesan error yang lebih informatif