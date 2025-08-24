# Pare EDUHUB LMS Platform

Platform pembelajaran online terdepan untuk lembaga pendidikan di Pare, menghubungkan siswa dengan lembaga berkualitas.

## 🚀 Fitur Utama

### 📚 Halaman User
- **Beranda**: Dashboard utama dengan widget cuaca, akses cepat, dan preview lembaga
- **Katalog Lembaga**: Daftar lembaga dikelompokkan berdasarkan rating (Premium, Standard, Basic)
- **Kelas Pro**: Kelas berbayar dengan integrasi Midtrans QRIS
- **Kelas Gratis**: Materi pembelajaran dasar dengan download PDF
- **Katalog WA**: Direct contact ke lembaga via WhatsApp
- **Booking Hotel**: Integrasi Tiket.com untuk akomodasi
- **Detail Lembaga**: Informasi lengkap lembaga dengan review dan program

### 🛠️ Fitur Teknis
- **Widget Cuaca**: Informasi cuaca real-time
- **Live Chat**: Integrasi Tawk.to untuk customer service
- **Emergency Help**: Bantuan darurat online
- **Responsive Design**: Optimized untuk semua device
- **Progressive Web App**: PWA ready

## 🛠️ Teknologi

### Backend
- **Laravel 12**: Framework PHP terbaru
- **Inertia.js**: SPA experience tanpa API complexity
- **MySQL/PostgreSQL**: Database
- **Redis**: Caching & Session

### Frontend
- **React 18**: UI Library
- **TypeScript**: Type safety
- **Tailwind CSS**: Utility-first CSS
- **Shadcn/ui**: Component library
- **Lucide React**: Icon library
- **Date-fns**: Date manipulation

### Integrasi
- **Midtrans**: Payment gateway (QRIS, Bank Transfer, Credit Card)
- **Tawk.to**: Live chat
- **Tiket.com API**: Hotel booking
- **Weather API**: Cuaca real-time

## 📦 Instalasi

### Prerequisites
- PHP 8.2+
- Composer
- Node.js 18+
- MySQL/PostgreSQL
- Redis (optional)

### Setup

1. **Clone Repository**
```bash
git clone https://github.com/pare-eduhub/lms-platform.git
cd lms-platform
```

2. **Install Dependencies**
```bash
composer install
npm install
```

3. **Environment Setup**
```bash
cp .env.example .env
php artisan key:generate
```

4. **Database Setup**
```bash
php artisan migrate
php artisan db:seed
```

5. **Build Assets**
```bash
npm run build
```

6. **Serve Application**
```bash
php artisan serve
npm run dev
```

## 🔧 Konfigurasi

### Environment Variables
```env
# App
APP_NAME="Pare EDUHUB LMS"
APP_ENV=local
APP_DEBUG=true

# Database
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=pare_eduhub
DB_USERNAME=root
DB_PASSWORD=

# Tawk.to
TAWK_TO_PROPERTY_ID=your_property_id
TAWK_TO_WIDGET_ID=your_widget_id

# Midtrans
MIDTRANS_SERVER_KEY=your_server_key
MIDTRANS_CLIENT_KEY=your_client_key
MIDTRANS_MERCHANT_ID=your_merchant_id

# Weather API
WEATHER_API_KEY=your_api_key

# Tiket.com
TIKET_API_KEY=your_api_key
TIKET_API_URL=https://api.tiket.com

# Contact Info
CONTACT_PHONE=+62 812-3456-7890
CONTACT_EMAIL=info@pareeduhub.com
CONTACT_ADDRESS=Jl. Brawijaya No. 123, Pare, Kediri

# Social Media
FACEBOOK_URL=https://facebook.com/pareeduhub
INSTAGRAM_URL=https://instagram.com/pareeduhub
YOUTUBE_URL=https://youtube.com/pareeduhub
```

## 📁 Struktur File

```
resources/
├── js/
│   ├── components/          # Reusable components
│   │   ├── ui/             # Shadcn/ui components
│   │   ├── WeatherWidget.tsx
│   │   ├── EmergencyHelp.tsx
│   │   └── TawkToChat.tsx
│   ├── pages/              # Inertia pages
│   │   ├── welcome.tsx
│   │   ├── institutions.tsx
│   │   ├── pro-courses.tsx
│   │   ├── free-courses.tsx
│   │   ├── catalog-wa.tsx
│   │   ├── institution-detail.tsx
│   │   └── hotel-booking.tsx
│   ├── layouts/            # Layout components
│   │   └── guest-layout.tsx
│   ├── lib/                # Utility functions
│   ├── hooks/              # Custom hooks
│   └── app.tsx             # Main app entry
├── css/
│   └── app.css             # Main stylesheet
└── views/
    └── app.blade.php       # Main blade template
```

## 🎨 Design System

### Colors
- **Primary**: Blue (#3B82F6)
- **Secondary**: Purple (#8B5CF6)
- **Success**: Green (#10B981)
- **Warning**: Yellow (#F59E0B)
- **Error**: Red (#EF4444)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400, 500, 600, 700

### Components
- **Cards**: Consistent spacing and shadows
- **Buttons**: Multiple variants (primary, secondary, outline)
- **Forms**: Accessible form controls
- **Navigation**: Responsive navigation with mobile menu

## 📱 Responsive Design

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Features
- Mobile-first approach
- Touch-friendly interactions
- Optimized images
- Fast loading times

## 🔒 Security

### Implemented
- CSRF protection
- XSS prevention
- SQL injection protection
- Input validation
- Secure headers

### Best Practices
- Environment variables for sensitive data
- HTTPS enforcement
- Regular security updates
- Input sanitization

## 🚀 Performance

### Optimizations
- Asset minification
- Image optimization
- Lazy loading
- Code splitting
- Caching strategies

### Monitoring
- Error tracking
- Performance metrics
- User analytics
- Server monitoring

## 🧪 Testing

### Test Types
- Unit tests
- Feature tests
- Browser tests
- Performance tests

### Running Tests
```bash
php artisan test
npm run test
```

## 📊 Analytics

### Implemented
- Google Analytics 4
- Custom event tracking
- User behavior analysis
- Conversion tracking

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

### Code Standards
- PSR-12 for PHP
- ESLint for JavaScript/TypeScript
- Prettier for code formatting
- Conventional commits

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

### Documentation
- [Laravel Documentation](https://laravel.com/docs)
- [Inertia.js Documentation](https://inertiajs.com/)
- [React Documentation](https://react.dev/)

### Contact
- **Email**: support@pareeduhub.com
- **WhatsApp**: +62 812-3456-7890
- **Website**: https://pareeduhub.com

### Community
- **Discord**: [Pare EDUHUB Community](https://discord.gg/pareeduhub)
- **Telegram**: [@pareeduhub](https://t.me/pareeduhub)

## 📈 Roadmap

### Phase 1 (Current)
- ✅ User-facing pages
- ✅ Basic navigation
- ✅ Responsive design
- ✅ Component library

### Phase 2 (Next)
- 🔄 Admin dashboard
- 🔄 User authentication
- 🔄 Course management
- 🔄 Payment integration

### Phase 3 (Future)
- 📋 Advanced analytics
- 📋 Mobile app
- 📋 AI-powered recommendations
- 📋 Multi-language support

## 🏆 Changelog

### v1.0.0 (2024-01-15)
- Initial release
- User-facing pages
- Basic LMS functionality
- Responsive design
- Component library integration

---

**Pare EDUHUB LMS** - Empowering Education Through Technology 🎓