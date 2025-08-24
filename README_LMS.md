# Pare EDUHUB - LMS/Course Online Platform

Platform pembelajaran online khusus untuk lembaga pendidikan dengan fitur lengkap untuk user dan integrasi berbagai layanan.

## 🚀 Fitur Utama

### 1. Halaman Welcome (Beranda)
- **Hero Section** dengan call-to-action yang menarik
- **Widget Cuaca** real-time
- **Akses Cepat** ke semua fitur utama
- **Lembaga Terpopuler** dengan rating tertinggi
- **Kursus Pro & Gratis** preview
- **Testimonial** dari alumni
- **Emergency Help** dengan kontak darurat
- **FAQ** section
- **Live Chat** integrasi Tawk.to

### 2. Katalog Lembaga (`/institutions`)
- **Pengelompokan berdasarkan rating**:
  - Excellent (4.5+)
  - Good (4.0-4.4)
  - Average (3.5-3.9)
  - Basic (<3.5)
- **Akses terbatas** untuk user gratis
- **Filter berdasarkan kategori** (Premium, Standard, Basic)
- **Search functionality**
- **Informasi lengkap lembaga**:
  - Nama, telepon, email, alamat, website
  - Rating dan ulasan
  - Kategori lembaga
- **Direct WhatsApp** untuk konsultasi

### 3. Kelas Pro (`/pro-courses`)
- **Integrasi Midtrans** untuk pembayaran:
  - QRIS
  - Transfer Bank
  - Kartu Kredit/Debit
- **Filter berdasarkan kategori dan level**
- **Informasi kursus lengkap**:
  - Harga asli vs diskon
  - Fitur yang didapat
  - Kurikulum detail
  - Rating dan jumlah siswa
- **Dialog pembayaran** dengan pilihan metode

### 4. Kelas Gratis (`/free-courses`)
- **Materi dasar** tersedia gratis
- **Download PDF** materi pembelajaran
- **Video preview** untuk konten gratis
- **Progress tracking** untuk user yang terdaftar
- **Link ke kelas pro** untuk materi lengkap
- **Dialog detail kursus** dengan tab materi dan overview

### 5. Katalog WA (`/catalog-wa`)
- **Direct WhatsApp** untuk setiap item
- **Berbagai jenis program**:
  - Kursus online
  - Workshop offline
  - Konsultasi 1-on-1
  - Materi digital (E-book, template)
- **Filter berdasarkan kategori dan tipe**
- **Informasi lengkap** dengan harga dan fitur
- **FAQ section** untuk pertanyaan umum

### 6. Detail Lembaga (`/institution/:id`)
- **Informasi komprehensif** lembaga
- **Tab navigation**:
  - Overview (tentang, statistik, fasilitas)
  - Program yang ditawarkan
  - Ulasan dari alumni
  - Pencapaian dan penghargaan
- **Sidebar** dengan:
  - Informasi kontak
  - Media sosial
  - Aksi cepat (favorit, share, download brosur)

### 7. Hotel Booking (`/hotel-booking`)
- **Integrasi tiket.com** untuk booking
- **Search dan filter**:
  - Lokasi
  - Check-in/Check-out date
  - Jumlah tamu dan kamar
  - Range harga
  - Sorting options
- **Informasi hotel lengkap**:
  - Rating dan ulasan
  - Fasilitas
  - Harga per malam
  - Jarak dari pusat kota
- **Direct booking** via tiket.com

## 🛠️ Teknologi yang Digunakan

### Frontend
- **React 18** dengan TypeScript
- **Tailwind CSS** untuk styling
- **Shadcn/ui** untuk komponen UI
- **React Router** untuk routing
- **Lucide React** untuk icons
- **Date-fns** untuk manipulasi tanggal

### Integrasi
- **Tawk.to** untuk live chat
- **Midtrans** untuk payment gateway
- **Tiket.com** untuk hotel booking
- **Weather API** (simulasi) untuk widget cuaca

### Komponen UI
- **Card, Button, Badge** untuk layout
- **Input, Select, Calendar** untuk form
- **Dialog, Popover** untuk modal
- **Tabs, Progress** untuk navigasi
- **Avatar, Dropdown** untuk user interface

## 📁 Struktur File

```
resources/js/
├── pages/
│   ├── welcome.tsx              # Halaman beranda
│   ├── institutions.tsx         # Katalog lembaga
│   ├── pro-courses.tsx          # Kelas pro dengan payment
│   ├── free-courses.tsx         # Kelas gratis dengan PDF download
│   ├── catalog-wa.tsx           # Katalog dengan direct WA
│   ├── institution-detail.tsx   # Detail lembaga
│   └── hotel-booking.tsx        # Booking hotel via tiket.com
├── components/
│   ├── ui/                      # Shadcn/ui components
│   ├── EmergencyHelp.tsx        # Komponen bantuan darurat
│   ├── WeatherWidget.tsx        # Widget cuaca
│   ├── TawkToChat.tsx           # Integrasi live chat
│   └── lms-navigation.tsx       # Navigasi utama
├── routes/
│   └── web.tsx                  # Route configuration
└── layouts/
    └── guest-layout.tsx         # Layout untuk halaman user
```

## 🎨 Design System

### Color Scheme
- **Primary**: Blue (#3B82F6)
- **Secondary**: Green (#10B981)
- **Accent**: Orange (#F59E0B)
- **Success**: Green (#22C55E)
- **Warning**: Yellow (#EAB308)
- **Error**: Red (#EF4444)

### Typography
- **Heading**: Inter, font-bold
- **Body**: Inter, font-normal
- **Code**: JetBrains Mono

### Spacing
- **Container**: max-width 1280px
- **Section padding**: py-16
- **Card spacing**: gap-6
- **Component spacing**: space-y-4

## 🔧 Konfigurasi

### Environment Variables
```env
# Tawk.to Configuration
VITE_TAWK_PROPERTY_ID=your_property_id
VITE_TAWK_WIDGET_ID=your_widget_id

# Midtrans Configuration
VITE_MIDTRANS_CLIENT_KEY=your_client_key
VITE_MIDTRANS_MERCHANT_ID=your_merchant_id

# Weather API (optional)
VITE_WEATHER_API_KEY=your_api_key
```

### Dependencies
```json
{
  "dependencies": {
    "react": "^18.2.0",
    "react-router-dom": "^6.8.0",
    "lucide-react": "^0.263.1",
    "date-fns": "^2.29.3",
    "@radix-ui/react-dialog": "^1.0.4",
    "@radix-ui/react-dropdown-menu": "^2.0.5",
    "@radix-ui/react-popover": "^1.0.6",
    "@radix-ui/react-select": "^1.2.2",
    "@radix-ui/react-tabs": "^1.0.4"
  }
}
```

## 🚀 Cara Menjalankan

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Setup environment variables**:
   ```bash
   cp .env.example .env
   # Edit .env dengan konfigurasi yang sesuai
   ```

3. **Run development server**:
   ```bash
   npm run dev
   ```

4. **Build for production**:
   ```bash
   npm run build
   ```

## 📱 Responsive Design

Aplikasi didesain responsif untuk berbagai ukuran layar:
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Mobile Features
- **Hamburger menu** untuk navigasi
- **Touch-friendly** buttons dan interactions
- **Optimized layout** untuk layar kecil
- **Swipe gestures** untuk carousel

## 🔒 Security Features

- **Input validation** untuk semua form
- **XSS protection** dengan React
- **CSRF protection** untuk API calls
- **Secure payment** dengan Midtrans
- **HTTPS enforcement** untuk production

## 📊 Performance Optimization

- **Code splitting** dengan React Router
- **Lazy loading** untuk komponen besar
- **Image optimization** dengan placeholder
- **Caching strategy** untuk static assets
- **Bundle optimization** dengan Vite

## 🧪 Testing

```bash
# Run unit tests
npm run test

# Run integration tests
npm run test:integration

# Run e2e tests
npm run test:e2e
```

## 📈 Analytics & Monitoring

- **Google Analytics** integration
- **Error tracking** dengan Sentry
- **Performance monitoring**
- **User behavior tracking**

## 🤝 Contributing

1. Fork repository
2. Create feature branch
3. Commit changes
4. Push to branch
5. Create Pull Request

## 📄 License

MIT License - lihat file [LICENSE](LICENSE) untuk detail.

## 🆘 Support

Untuk bantuan dan dukungan:
- **Email**: support@pareeduhub.com
- **WhatsApp**: +62 812-3456-7890
- **Live Chat**: Tersedia di website

## 🔄 Changelog

### v1.0.0 (2024-12-19)
- ✅ Initial release
- ✅ All core features implemented
- ✅ Responsive design
- ✅ Payment integration
- ✅ Live chat integration
- ✅ Hotel booking integration

---

**Pare EDUHUB** - Platform pembelajaran online terpercaya untuk masa depan pendidikan Indonesia.