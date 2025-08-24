# Pare EDU HUB

Platform pembelajaran online eksklusif untuk lembaga pendidikan di Pare, menghubungkan siswa dengan lembaga berkualitas terbaik.

## 🎯 Tentang Pare EDU HUB

Pare EDU HUB adalah aplikasi LMS (Learning Management System) yang dirancang khusus untuk lembaga pendidikan di Pare, Kediri. Platform ini menyediakan berbagai fitur untuk memudahkan pembelajaran bahasa Inggris dengan kualitas terbaik.

## ✨ Fitur Utama

### 🏫 Katalog Lembaga
- Daftar lembaga pendidikan berdasarkan rating
- Kategori Premium, Standard, dan Basic
- Informasi lengkap lembaga (kontak, alamat, fasilitas)
- Akses terbatas untuk user free

### 💎 Kelas Pro
- Materi pembelajaran lengkap
- Pembayaran melalui QRIS (Midtrans)
- Video HD dan live session
- Sertifikat resmi
- Support 24/7

### 🆓 Kelas Gratis
- Materi dasar gratis
- Download PDF materi
- Link upgrade ke kelas pro
- Akses tanpa biaya

### 📱 Katalog WhatsApp
- Direct link ke WhatsApp lembaga
- Konsultasi gratis
- Informasi kelas dan harga
- Pendaftaran mudah

### 🏨 Booking Hotel
- Integrasi dengan Tiket.com
- Hotel dekat lembaga kursus
- Diskon khusus siswa
- Booking aman dan terpercaya

### 🌤️ Widget Cuaca
- Informasi cuaca real-time
- Lokasi Pare, Kediri
- Update otomatis

### 💬 Live Chat
- Integrasi Tawk.to
- Support 24/7
- Konsultasi langsung

### 🚨 Bantuan Darurat
- Kontak darurat 24/7
- Polisi, Rumah Sakit, Pemadam
- Support Pare EDU HUB

## 🛠️ Teknologi

- **Frontend**: React + TypeScript + Inertia.js
- **Backend**: Laravel 11
- **UI Framework**: Tailwind CSS + Shadcn/ui
- **Database**: MySQL
- **Payment Gateway**: Midtrans (QRIS)
- **Live Chat**: Tawk.to
- **Hotel Booking**: Tiket.com API

## 📁 Struktur Proyek

```
pare-edu-hub/
├── app/
│   ├── Models/           # Eloquent models
│   ├── Http/            # Controllers & Middleware
│   └── Providers/       # Service providers
├── resources/
│   └── js/
│       ├── pages/       # React pages
│       ├── components/  # React components
│       └── layouts/     # Layout components
├── routes/              # Laravel routes
├── database/            # Migrations & seeders
└── public/              # Static assets
```

## 🚀 Instalasi

1. **Clone repository**
   ```bash
   git clone https://github.com/your-username/pare-edu-hub.git
   cd pare-edu-hub
   ```

2. **Install dependencies**
   ```bash
   composer install
   npm install
   ```

3. **Setup environment**
   ```bash
   cp .env.example .env
   php artisan key:generate
   ```

4. **Configure database**
   ```bash
   # Edit .env file dengan konfigurasi database
   php artisan migrate
   php artisan db:seed
   ```

5. **Build assets**
   ```bash
   npm run build
   ```

6. **Start development server**
   ```bash
   php artisan serve
   npm run dev
   ```

## 🔧 Konfigurasi

### Environment Variables

```env
# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pare_edu_hub
DB_USERNAME=root
DB_PASSWORD=

# Midtrans (Payment Gateway)
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_CLIENT_KEY=your_client_key
MIDTRANS_MERCHANT_ID=your_merchant_id

# Tawk.to (Live Chat)
TAWK_TO_PROPERTY_ID=your_property_id
TAWK_TO_WIDGET_ID=your_widget_id

# Tiket.com API
TIKET_API_KEY=your_api_key
TIKET_API_URL=https://api.tiket.com
```

## 📊 Models

### User
- Authentication dan authorization
- Role: admin, user
- Relasi dengan courses dan transactions

### Institution
- Informasi lembaga pendidikan
- Rating dan ulasan
- Kategori (premium, standard, basic)

### Course
- Kelas yang ditawarkan
- Harga dan durasi
- Tipe: pro atau free
- Relasi dengan institution

### Transaction
- Riwayat pembayaran
- Status pembayaran
- Integrasi Midtrans

## 🎨 UI Components

### Pages
- `Welcome` - Halaman utama
- `Institutions` - Katalog lembaga
- `ProCourses` - Kelas pro
- `FreeCourses` - Kelas gratis
- `CatalogWA` - Katalog WhatsApp
- `HotelBooking` - Booking hotel
- `About` - Tentang kami

### Components
- `WeatherWidget` - Widget cuaca
- `EmergencyHelp` - Bantuan darurat
- `TawkToChat` - Live chat

## 🔐 Authentication

- Laravel Breeze dengan Inertia.js
- Login/Register
- Password reset
- Email verification

## 💳 Payment Integration

### Midtrans QRIS
- Pembayaran melalui QRIS
- Support berbagai e-wallet
- Callback handling
- Payment status tracking

## 🏨 Hotel Booking

### Tiket.com Integration
- Search hotel berdasarkan lokasi
- Filter berdasarkan rating dan harga
- Direct booking ke Tiket.com
- Diskon khusus siswa

## 📱 Live Chat

### Tawk.to Integration
- Chat widget otomatis
- Visitor tracking
- File sharing
- Chat history

## 🚨 Emergency Help

### Kontak Darurat
- Polisi: 110
- Rumah Sakit: +62 354 123456
- Pemadam: 113
- Ambulans: 119
- Support Pare EDU HUB

## 📈 Analytics

- User registration tracking
- Course enrollment analytics
- Payment success rate
- User engagement metrics

## 🔒 Security

- CSRF protection
- XSS prevention
- SQL injection protection
- Input validation
- Rate limiting

## 🧪 Testing

```bash
# Run PHP tests
php artisan test

# Run frontend tests
npm run test
```

## 📦 Deployment

### Production Build
```bash
npm run build
php artisan config:cache
php artisan route:cache
php artisan view:cache
```

### Environment Setup
- Set `APP_ENV=production`
- Configure production database
- Set up SSL certificate
- Configure queue workers

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

- **Email**: support@pareeduhub.com
- **WhatsApp**: +62 812-3456-7894
- **Website**: https://pareeduhub.com

## 🙏 Acknowledgments

- Laravel team untuk framework yang luar biasa
- Inertia.js untuk SPA experience
- Shadcn/ui untuk komponen UI yang indah
- Midtrans untuk payment gateway
- Tawk.to untuk live chat
- Tiket.com untuk hotel booking

---

**Pare EDU HUB** - Platform pembelajaran online terdepan untuk lembaga pendidikan di Pare 🎓