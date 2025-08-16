# Troubleshooting: Custom Error Page 403 Tidak Muncul

## Masalah
Halaman error 404 sudah tercustomisasi dengan baik, namun halaman error 403 masih menggunakan default Laravel error page.

## Penyebab Umum

### 1. **APP_DEBUG masih true**
```env
# ❌ SALAH - Akan menampilkan debug info
APP_DEBUG=true

# ✅ BENAR - Akan menampilkan custom error page
APP_DEBUG=false
```

### 2. **Cache Laravel belum di-clear**
Laravel mungkin masih menggunakan cache konfigurasi lama.

### 3. **Exception tidak ditangkap dengan benar**
Middleware mungkin menggunakan `abort()` alih-alih `AuthorizationException`.

## Solusi Lengkap

### Langkah 1: Periksa Environment Variables
```bash
# Edit file .env
nano .env

# Pastikan setting berikut:
APP_DEBUG=false
APP_ENV=production
```

### Langkah 2: Clear Cache Laravel
```bash
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear
php artisan optimize:clear
```

### Langkah 3: Periksa Exception Handler
File: `app/Exceptions/Handler.php`

Pastikan ada handler untuk `AuthorizationException`:
```php
if ($e instanceof AuthorizationException) {
    return Inertia::render('errors/403', [
        'code' => '403',
        'title' => 'Akses Dilarang',
        'description' => 'Anda tidak memiliki izin untuk mengakses halaman ini.',
    ])->toResponse($request)->setStatusCode(403);
}
```

### Langkah 4: Periksa RoleMiddleware
File: `app/Http/Middleware/RoleMiddleware.php`

Pastikan menggunakan `AuthorizationException`:
```php
// ✅ BENAR
throw new AuthorizationException('Anda tidak memiliki izin untuk mengakses halaman ini.');

// ❌ SALAH
abort(403, 'Anda tidak memiliki izin untuk mengakses halaman ini.');
```

### Langkah 5: Periksa Middleware Registration
File: `bootstrap/app.php`

Pastikan RoleMiddleware terdaftar:
```php
$middleware->alias([
    'role' => \App\Http\Middleware\RoleMiddleware::class,
]);
```

## Testing

### Test 1: Akses Route Testing
```bash
# Akses URL testing
curl http://localhost:8000/errors/403
```

### Test 2: Test dengan User Non-Admin
1. Login dengan user yang memiliki role `user`
2. Coba akses `/admin/dashboard`
3. Seharusnya muncul custom error page 403

### Test 3: Test dengan AuthorizationException
```bash
# Akses route yang melempar AuthorizationException
curl http://localhost:8000/errors/403-test
```

## Debugging

### 1. Periksa Response Headers
```bash
curl -I http://localhost:8000/errors/403
```

### 2. Periksa Laravel Logs
```bash
tail -f storage/logs/laravel.log
```

### 3. Periksa Browser Console
Buka Developer Tools > Console untuk melihat error JavaScript.

### 4. Periksa Network Tab
Buka Developer Tools > Network untuk melihat response dari server.

## File yang Harus Ada

### 1. Error Page Component
- `resources/js/components/ErrorPage.tsx` ✅

### 2. 403 Error Page
- `resources/js/pages/errors/403.tsx` ✅

### 3. Exception Handler
- `app/Exceptions/Handler.php` ✅

### 4. RoleMiddleware
- `app/Http/Middleware/RoleMiddleware.php` ✅

### 5. Routes
- `routes/errors.php` ✅
- `routes/web.php` (fallback route) ✅

## Expected Result

Setelah perbaikan, error 403 seharusnya menampilkan:
- ✅ Custom error page dengan design yang menarik
- ✅ Background gradient yang modern
- ✅ Icon Shield dengan AlertTriangle overlay
- ✅ Pesan error yang informatif
- ✅ Tombol navigasi (Kembali dan Beranda)
- ✅ Tidak ada stack trace atau debug information
- ✅ Responsive design

## Troubleshooting Checklist

- [ ] APP_DEBUG=false di .env
- [ ] Cache Laravel sudah di-clear
- [ ] RoleMiddleware menggunakan AuthorizationException
- [ ] Exception Handler menangkap AuthorizationException
- [ ] Error page component ada dan berfungsi
- [ ] 403 error page ada dan berfungsi
- [ ] Routes testing berfungsi
- [ ] Server di-restart setelah perubahan

## Jika Masih Bermasalah

1. **Restart server development**
2. **Periksa browser cache** (Ctrl+F5)
3. **Periksa Laravel logs** untuk error
4. **Test dengan user yang berbeda**
5. **Periksa apakah ada conflict dengan middleware lain**

## Komando Cepat

```bash
# Jalankan script perbaikan otomatis
chmod +x fix-error-403.sh
./fix-error-403.sh

# Atau jalankan manual
sed -i 's/APP_DEBUG=true/APP_DEBUG=false/' .env
php artisan optimize:clear
```

## Kesimpulan

Masalah custom error page 403 biasanya disebabkan oleh:
1. APP_DEBUG masih true
2. Cache yang belum di-clear
3. Exception handling yang tidak konsisten

Dengan mengikuti langkah-langkah di atas, custom error page 403 seharusnya berfungsi dengan baik.