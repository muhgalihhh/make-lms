# Setup Guide - Halaman Welcome Platform LMS

## Prerequisites
- PHP 8.1+
- Composer
- Node.js 16+
- MySQL/PostgreSQL
- Laravel 10+

## Installation Steps

### 1. Clone dan Setup Project
```bash
# Clone repository (jika belum)
git clone <repository-url>
cd <project-directory>

# Install PHP dependencies
composer install

# Install Node.js dependencies
npm install

# Copy environment file
cp .env.example .env

# Generate application key
php artisan key:generate
```

### 2. Database Setup
```bash
# Configure database di .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=lms_platform
DB_USERNAME=root
DB_PASSWORD=your_password

# Run migrations
php artisan migrate

# Run seeder untuk data sample
php artisan db:seed --class=WelcomePageSeeder
```

### 3. Environment Configuration
Update file `.env` dengan konfigurasi yang diperlukan:

```env
# Tawk.to Live Chat
TAWK_TO_PROPERTY_ID=your_tawk_to_property_id
TAWK_TO_WIDGET_ID=your_tawk_to_widget_id

# Weather API (optional)
WEATHER_API_KEY=your_weather_api_key
WEATHER_API_URL=https://api.weatherapi.com/v1

# Emergency Contact Information
EMERGENCY_PHONE=+62 21 1234 5678
EMERGENCY_EMAIL=emergency@platformlms.com
SUPPORT_PHONE=+62 21 2345 6789
SUPPORT_EMAIL=support@platformlms.com
ACADEMIC_PHONE=+62 21 3456 7890
ACADEMIC_EMAIL=academic@platformlms.com

# Platform Information
PLATFORM_NAME="Platform LMS"
PLATFORM_DESCRIPTION="Platform pembelajaran online terpercaya dengan ribuan kursus berkualitas"
PLATFORM_WEBSITE=https://platformlms.com
PLATFORM_ADDRESS="Jl. Sudirman No. 123, Jakarta Pusat"
PLATFORM_PHONE=+62 21 1234 5678
PLATFORM_EMAIL=info@platformlms.com
```

### 4. Build Assets
```bash
# Development
npm run dev

# Production
npm run build
```

### 5. Start Development Server
```bash
# Start Laravel server
php artisan serve

# Start Vite dev server (di terminal terpisah)
npm run dev
```

## Testing

### 1. Test Halaman Welcome
- Buka browser dan akses `http://localhost:8000`
- Pastikan semua section muncul dengan benar:
  - Hero section
  - Weather widget
  - Institution catalog
  - Pro courses
  - Free courses
  - Emergency help
  - Footer

### 2. Test API Endpoints
```bash
# Test institutions API
curl http://localhost:8000/api/welcome/institutions

# Test pro courses API
curl http://localhost:8000/api/welcome/pro-courses

# Test free courses API
curl http://localhost:8000/api/welcome/free-courses

# Test weather API
curl http://localhost:8000/api/welcome/weather

# Test institutions by rating API
curl http://localhost:8000/api/welcome/institutions-by-rating?min_rating=4.5
```

### 3. Test Responsive Design
- Test di berbagai ukuran layar:
  - Mobile (320px - 768px)
  - Tablet (768px - 1024px)
  - Desktop (1024px+)
- Pastikan layout responsive dan navigasi berfungsi

### 4. Test Live Chat
- Pastikan Tawk.to terintegrasi dengan benar
- Test tombol "Mulai Chat" di emergency help section
- Verifikasi chat widget muncul

## Customization

### 1. Mengubah Data Lembaga
Edit file `database/seeders/WelcomePageSeeder.php` dan jalankan:
```bash
php artisan db:seed --class=WelcomePageSeeder
```

### 2. Mengubah Styling
- Edit file CSS di `resources/css/`
- Gunakan Tailwind CSS classes untuk styling
- Custom components di `resources/js/components/`

### 3. Menambah Fitur Baru
- Buat komponen baru di `resources/js/components/`
- Update controller di `app/Http/Controllers/WelcomeController.php`
- Tambah routes di `routes/web.php`

### 4. Integrasi Weather API Real
Update `resources/js/components/WeatherWidget.tsx`:
```tsx
const loadWeather = async () => {
    try {
        const response = await fetch('/api/welcome/weather');
        const data = await response.json();
        setWeather(data.data);
    } catch (err) {
        setError('Gagal memuat data cuaca');
    }
};
```

## Troubleshooting

### 1. Data Tidak Muncul
```bash
# Cek database connection
php artisan tinker
>>> App\Models\Institution::count()

# Re-run seeder
php artisan db:seed --class=WelcomePageSeeder

# Clear cache
php artisan cache:clear
php artisan config:clear
```

### 2. Assets Tidak Load
```bash
# Rebuild assets
npm run build

# Clear browser cache
# Hard refresh (Ctrl+F5)
```

### 3. Live Chat Tidak Muncul
- Periksa property ID dan widget ID di `.env`
- Pastikan script Tawk.to ter-load (cek browser console)
- Verifikasi internet connection

### 4. API Error
```bash
# Cek routes
php artisan route:list

# Test API manually
curl -v http://localhost:8000/api/welcome/institutions

# Cek Laravel logs
tail -f storage/logs/laravel.log
```

## Performance Optimization

### 1. Database Optimization
```bash
# Add indexes untuk performance
php artisan make:migration add_indexes_to_institutions_table

# Optimize queries dengan eager loading
# Sudah diimplementasi di WelcomeController
```

### 2. Asset Optimization
```bash
# Minify assets untuk production
npm run build

# Enable compression di web server
# Nginx: gzip on;
# Apache: mod_deflate
```

### 3. Caching
```bash
# Cache routes
php artisan route:cache

# Cache config
php artisan config:cache

# Cache views
php artisan view:cache
```

## Deployment

### 1. Production Build
```bash
# Build assets
npm run build

# Optimize autoloader
composer install --optimize-autoloader --no-dev

# Cache everything
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### 2. Environment Setup
```env
APP_ENV=production
APP_DEBUG=false
APP_URL=https://yourdomain.com

# Database
DB_HOST=your_db_host
DB_DATABASE=your_db_name
DB_USERNAME=your_db_user
DB_PASSWORD=your_db_password

# Cache
CACHE_DRIVER=redis
SESSION_DRIVER=redis
QUEUE_CONNECTION=redis
```

### 3. Web Server Configuration
```nginx
# Nginx example
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/your/project/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";

    index index.php;

    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/var/run/php/php8.1-fpm.sock;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

## Monitoring

### 1. Error Monitoring
- Setup Laravel Telescope untuk development
- Configure error reporting untuk production
- Monitor Laravel logs

### 2. Performance Monitoring
- Setup New Relic atau similar service
- Monitor database query performance
- Track page load times

### 3. Uptime Monitoring
- Setup uptime monitoring (UptimeRobot, Pingdom)
- Monitor API endpoints
- Setup alerting untuk downtime

## Support

Untuk bantuan teknis:
- **Email**: support@platformlms.com
- **Phone**: +62 21 2345 6789
- **Documentation**: Lihat `README_WELCOME_PAGE.md`
- **Issues**: Buat issue di repository

## Changelog

### v1.0.0 (Current)
- ✅ Hero section dengan CTA buttons
- ✅ Weather widget dengan mock data
- ✅ Institution catalog berdasarkan rating
- ✅ Pro courses section
- ✅ Free courses section
- ✅ Live chat integration (Tawk.to)
- ✅ Emergency help & support
- ✅ Responsive design
- ✅ API endpoints
- ✅ Database seeder

### Planned Features
- 🔄 Real weather API integration
- 🔄 Payment integration (Midtrans)
- 🔄 User authentication
- 🔄 Course enrollment system
- 🔄 PDF download functionality
- 🔄 Advanced search & filtering