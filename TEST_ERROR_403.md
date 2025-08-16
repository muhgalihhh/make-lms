# Testing Error 403 - Custom Error Page

## Cara Testing Error 403

### 1. Menggunakan Route Testing
Akses URL: `/errors/403`
- Ini akan menampilkan custom error page 403
- Pastikan halaman menampilkan:
  - Kode error: 403
  - Judul: "Akses Dilarang"
  - Deskripsi: Pesan yang sesuai
  - Icon: Shield dengan warna orange
  - Tombol: Kembali dan Beranda

### 2. Menggunakan Middleware Role
1. Login dengan user yang memiliki role `user` (bukan admin)
2. Coba akses halaman admin: `/admin/dashboard`
3. Seharusnya muncul error 403 dengan custom error page

### 3. Menggunakan AuthorizationException
1. Buat route test yang melempar AuthorizationException
2. Akses route tersebut
3. Seharusnya muncul custom error page 403

## Debugging Jika Masih Menggunakan Default Laravel

### 1. Periksa APP_DEBUG
Pastikan di file `.env`:
```env
APP_DEBUG=false
```

### 2. Clear Cache
Jalankan perintah berikut:
```bash
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear
```

### 3. Periksa Error Handler
Pastikan file `app/Exceptions/Handler.php` sudah benar:
```php
if ($e instanceof AuthorizationException) {
    return Inertia::render('errors/403', [
        'code' => '403',
        'title' => 'Akses Dilarang',
        'description' => 'Anda tidak memiliki izin untuk mengakses halaman ini.',
    ])->toResponse($request)->setStatusCode(403);
}
```

### 4. Periksa Middleware
Pastikan `RoleMiddleware` menggunakan pesan yang tepat:
```php
if (!in_array($userRole, $roles)) {
    abort(403, 'Anda tidak memiliki izin untuk mengakses halaman ini.');
}
```

## Expected Result

Error 403 seharusnya menampilkan:
- Custom error page dengan design yang konsisten
- Icon Shield dengan warna orange
- Pesan error yang informatif
- Tombol navigasi yang berguna
- Tidak ada stack trace atau debug information

## Troubleshooting

Jika masih menggunakan default Laravel error page:
1. Pastikan `APP_DEBUG=false`
2. Clear semua cache
3. Restart server development
4. Periksa apakah ada error di console browser
5. Periksa network tab untuk melihat response dari server