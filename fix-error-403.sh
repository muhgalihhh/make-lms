#!/bin/bash

echo "🔧 Memperbaiki Custom Error Page 403..."

# 1. Set APP_DEBUG ke false
echo "📝 Setting APP_DEBUG=false..."
sed -i 's/APP_DEBUG=true/APP_DEBUG=false/' .env

# 2. Generate application key jika belum ada
echo "🔑 Generating application key..."
if ! grep -q "APP_KEY=base64:" .env; then
    echo "APP_KEY=base64:$(openssl rand -base64 32)" >> .env
fi

# 3. Clear semua cache Laravel
echo "🧹 Clearing Laravel cache..."
if command -v php &> /dev/null; then
    php artisan config:clear
    php artisan route:clear
    php artisan view:clear
    php artisan cache:clear
    php artisan optimize:clear
else
    echo "⚠️  PHP tidak tersedia, cache tidak bisa di-clear"
fi

# 4. Install dependencies jika belum
echo "📦 Installing dependencies..."
if command -v composer &> /dev/null; then
    composer install --no-dev --optimize-autoloader
else
    echo "⚠️  Composer tidak tersedia"
fi

if command -v npm &> /dev/null; then
    npm install
    npm run build
else
    echo "⚠️  NPM tidak tersedia"
fi

echo "✅ Konfigurasi selesai!"
echo ""
echo "📋 Checklist untuk testing:"
echo "1. Pastikan APP_DEBUG=false di .env"
echo "2. Login dengan user non-admin"
echo "3. Coba akses /admin/dashboard"
echo "4. Seharusnya muncul custom error page 403"
echo ""
echo "🔗 Test URL: http://localhost:8000/errors/403"