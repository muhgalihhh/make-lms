# Debug Guide: 403 Error Page Not Showing Custom Styling

## Masalah
- Halaman 404 berhasil menampilkan custom styling ✅
- Halaman 403 tidak menampilkan custom styling ❌

## Langkah Debug

### 1. Test Routes yang Tersedia

#### Test 404 (Working)
```
GET /errors/404
```
**Expected**: Custom error page dengan styling yang menarik

#### Test 403 (Not Working)
```
GET /errors/403
GET /errors/403-test
GET /errors/403-test-throw
GET /test-403
GET /test-403-abort
```

### 2. Perbedaan Antara 404 dan 403

#### 404 Error Handling
- Dipanggil melalui `NotFoundHttpException`
- Langsung render ke `errors/404.tsx`
- Tidak ada middleware yang menghalangi

#### 403 Error Handling
- Dipanggil melalui `AuthorizationException` atau `HttpException`
- Ada middleware `RoleMiddleware` yang mungkin mengintervensi
- Bisa dipanggil dari berbagai tempat

### 3. Kemungkinan Penyebab

#### A. Middleware Interference
- `RoleMiddleware` mungkin mengintervensi sebelum exception handler
- Middleware lain mungkin menangkap exception

#### B. Exception Type Mismatch
- Laravel mungkin menggunakan `HttpException` bukan `AuthorizationException`
- Exception handler mungkin tidak menangkap exception yang tepat

#### C. Route Order
- Route 403 mungkin tertangkap oleh route lain
- Fallback route mungkin mengintervensi

#### D. Inertia Rendering Issue
- Inertia mungkin tidak merender component dengan benar
- Ada error di component yang tidak terlihat

### 4. Test Cases

#### Test Case 1: Direct Route Access
```
GET /errors/403
```
**Expected**: Custom error page
**Actual**: ???

#### Test Case 2: AuthorizationException
```
GET /errors/403-test-throw
```
**Expected**: Custom error page
**Actual**: ???

#### Test Case 3: Abort Function
```
GET /errors/403-test
```
**Expected**: Custom error page
**Actual**: ???

#### Test Case 4: Middleware Test
```
GET /test-403 (as non-admin user)
```
**Expected**: Custom error page
**Actual**: ???

#### Test Case 5: Abort in Middleware
```
GET /test-403-abort (as non-admin user)
```
**Expected**: Custom error page
**Actual**: ???

### 5. Debug Steps

#### Step 1: Check Browser Console
1. Buka Developer Tools
2. Lihat Console untuk error JavaScript
3. Lihat Network tab untuk response dari server

#### Step 2: Check Laravel Logs
```bash
tail -f storage/logs/laravel.log
```

#### Step 3: Check Response Headers
1. Buka Network tab di Developer Tools
2. Lihat response headers untuk status code
3. Lihat response body untuk HTML yang dikembalikan

#### Step 4: Check Inertia Response
1. Lihat apakah response adalah JSON Inertia
2. Atau apakah response adalah HTML biasa

### 6. Expected vs Actual

#### Expected Response (Inertia)
```json
{
  "component": "errors/403",
  "props": {
    "code": "403",
    "title": "Akses Dilarang",
    "description": "..."
  }
}
```

#### Actual Response (Laravel Default)
```html
<!DOCTYPE html>
<html>
<head>
    <title>403 Forbidden</title>
</head>
<body>
    <h1>403 Forbidden</h1>
    <p>You don't have permission to access this resource.</p>
</body>
</html>
```

### 7. Solutions to Try

#### Solution 1: Force Inertia Response
Modify exception handler to force Inertia response:

```php
if ($e instanceof AuthorizationException) {
    return response()->json([
        'component' => 'errors/403',
        'props' => [
            'code' => '403',
            'title' => 'Akses Dilarang',
            'description' => 'Anda tidak memiliki izin untuk mengakses halaman ini.'
        ]
    ], 403);
}
```

#### Solution 2: Check APP_DEBUG
Ensure `APP_DEBUG=false` in `.env` file

#### Solution 3: Clear All Caches
```bash
php artisan config:clear
php artisan route:clear
php artisan view:clear
php artisan cache:clear
```

#### Solution 4: Check Middleware Order
Ensure `HandleInertiaRequests` middleware is applied correctly

### 8. Next Steps

1. Test semua route di atas
2. Catat hasil actual vs expected
3. Check browser console dan network tab
4. Check Laravel logs
5. Report findings untuk solusi yang tepat