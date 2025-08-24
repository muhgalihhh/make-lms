# Dark Mode Implementation

## Overview
Halaman welcome telah diperbaiki dan ditambahkan fitur dark mode toggle dengan menggunakan shadcn/ui components.

## Perubahan yang Dibuat

### 1. Theme Toggle Component
- Membuat komponen `ThemeToggle` (`resources/js/components/theme-toggle.tsx`)
- Toggle button sederhana yang beralih antara light dan dark mode
- Menggunakan hook `useAppearance` yang sudah ada

### 2. Guest Layout Updates
- Menambahkan theme toggle ke header desktop dan mobile
- Memperbaiki styling untuk mendukung dark mode:
  - Header background dan border
  - Navigation dropdown
  - Mobile menu
  - Search input
  - Background utama

### 3. Welcome Page Improvements
- Menambahkan dark mode support untuk semua section:
  - Hero section dengan gradient yang disesuaikan
  - Features section
  - Pro Courses section dengan card styling
  - Free Courses section
  - Testimonials section
  - FAQ section dengan accordion styling
  - CTA section

### 4. Dark Mode Classes Applied
- Background: `dark:bg-gray-900`, `dark:bg-gray-800`, `dark:bg-gray-700`
- Text: `dark:text-white`, `dark:text-gray-300`, `dark:text-gray-400`
- Borders: `dark:border-gray-700`, `dark:border-gray-600`
- Cards: `dark:bg-gray-700 dark:border-gray-600`
- Buttons: `dark:hover:bg-gray-800`, `dark:hover:text-white`

## Komponen yang Digunakan

### Shadcn/UI Components
- `Button` - untuk semua tombol
- `Card`, `CardHeader`, `CardContent`, `CardFooter` - untuk course cards
- `Badge` - untuk kategori dan label
- `Avatar`, `AvatarImage`, `AvatarFallback` - untuk testimonial avatars
- `Accordion`, `AccordionItem`, `AccordionTrigger`, `AccordionContent` - untuk FAQ
- `DropdownMenu` - untuk navigation dropdowns

### Icons (Lucide React)
- `BookOpen`, `Users`, `Award`, `Zap` - untuk features
- `Star` - untuk ratings
- `ArrowRight`, `PlayCircle`, `MessageSquare` - untuk CTA buttons
- `Sun`, `Moon` - untuk theme toggle

## Cara Penggunaan

### Theme Toggle
Theme toggle sudah ditambahkan ke:
1. Header desktop (di sebelah search button)
2. Mobile menu (di bagian bawah menu)

### Dark Mode Persistence
- Theme preference disimpan di localStorage
- Mendukung system preference (light/dark/system)
- Otomatis mengikuti perubahan system theme

## Testing
1. Klik theme toggle button di header
2. Periksa semua section berubah ke dark mode
3. Refresh halaman untuk memastikan preference tersimpan
4. Test di mobile view

## File yang Dimodifikasi
- `resources/js/layouts/guest-layout.tsx`
- `resources/js/pages/welcome.tsx`
- `resources/js/components/theme-toggle.tsx` (baru)

## Dependencies
- Sudah menggunakan shadcn/ui yang sudah terinstall
- Menggunakan hook `useAppearance` yang sudah ada
- Tidak memerlukan dependency tambahan