import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GuestLayout from '@/layouts/guest-layout';
import WeatherWidget from '@/components/WeatherWidget';
import EmergencyHelp from '@/components/EmergencyHelp';
import TawkToChat from '@/components/TawkToChat';
import {
    Building2,
    Phone,
    Mail,
    Globe,
    MapPin,
    Star,
    Users,
    Award,
    BookOpen,
    MessageSquare,
    Bed,
    ArrowRight,
    PlayCircle,
    Download,
    CheckCircle,
    Heart,
    Shield,
    Clock
} from 'lucide-react';

interface Institution {
    id: number;
    name: string;
    phone: string;
    email: string;
    address: string;
    website: string;
    rating: number;
    reviews: number;
    category: 'premium' | 'standard' | 'basic';
    description: string;
    logo: string;
}

const institutions: Institution[] = [
    {
        id: 1,
        name: "Pare English Course",
        phone: "+62 812-3456-7890",
        email: "info@pareenglish.com",
        address: "Jl. Brawijaya No. 123, Pare, Kediri",
        website: "https://pareenglish.com",
        rating: 4.8,
        reviews: 1250,
        category: 'premium',
        description: "Lembaga kursus bahasa Inggris terbaik di Pare dengan metode kampung Inggris yang terkenal.",
        logo: "/images/pare-english-logo.png"
    },
    {
        id: 2,
        name: "Kampung Inggris Global",
        phone: "+62 812-3456-7891",
        email: "contact@kampunginggrisglobal.com",
        address: "Jl. Ahmad Yani No. 45, Pare, Kediri",
        website: "https://kampunginggrisglobal.com",
        rating: 4.6,
        reviews: 890,
        category: 'premium',
        description: "Program intensif bahasa Inggris dengan lingkungan yang mendukung pembelajaran.",
        logo: "/images/global-logo.png"
    },
    {
        id: 3,
        name: "English Village Pare",
        phone: "+62 812-3456-7892",
        email: "hello@englishvillagepare.com",
        address: "Jl. Soekarno-Hatta No. 67, Pare, Kediri",
        website: "https://englishvillagepare.com",
        rating: 4.4,
        reviews: 650,
        category: 'standard',
        description: "Belajar bahasa Inggris dengan suasana kampung yang nyaman dan menyenangkan.",
        logo: "/images/village-logo.png"
    }
];

const getCategoryColor = (category: string) => {
    switch (category) {
        case 'premium':
            return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
        case 'standard':
            return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white';
        case 'basic':
            return 'bg-gradient-to-r from-green-500 to-teal-600 text-white';
        default:
            return 'bg-gray-500 text-white';
    }
};

export default function Welcome() {
    return (
        <GuestLayout>
            <Head title="Beranda - Pare EDUHUB LMS" />
            
            {/* Tawk.to Chat Integration */}
            <TawkToChat propertyId="your-property-id" widgetId="your-widget-id" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6">
                        Selamat Datang di{' '}
                        <span className="text-yellow-300">Pare EDUHUB</span>
                    </h1>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Platform pembelajaran online terdepan untuk lembaga pendidikan di Pare, 
                        menghubungkan siswa dengan lembaga berkualitas.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                            Mulai Belajar
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                            Jelajahi Lembaga
                        </Button>
                    </div>
                </div>
            </section>

            {/* Weather Widget & Quick Actions */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6">
                        <div className="md:col-span-1">
                            <WeatherWidget />
                        </div>
                        <div className="md:col-span-3">
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Award className="h-5 w-5 text-blue-600" />
                                        Akses Cepat
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                                            <Building2 className="h-6 w-6 text-blue-600" />
                                            <span className="text-sm">Lembaga</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                                            <Award className="h-6 w-6 text-purple-600" />
                                            <span className="text-sm">Kelas Pro</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                                            <BookOpen className="h-6 w-6 text-green-600" />
                                            <span className="text-sm">Kelas Gratis</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2">
                                            <MessageSquare className="h-6 w-6 text-orange-600" />
                                            <span className="text-sm">Katalog WA</span>
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Institutions Section */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Lembaga Terpopuler
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Temukan lembaga pendidikan berkualitas dengan rating tertinggi dan ulasan terbaik
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {institutions.map((institution) => (
                            <Card key={institution.id} className="card-hover">
                                <CardHeader>
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                                                <Building2 className="w-6 h-6 text-white" />
                                            </div>
                                            <div>
                                                <CardTitle className="text-lg">{institution.name}</CardTitle>
                                                <Badge className={getCategoryColor(institution.category)}>
                                                    {institution.category}
                                                </Badge>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium">{institution.rating}</span>
                                        </div>
                                    </div>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 mb-4">{institution.description}</p>
                                    
                                    <div className="space-y-2 mb-4">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Phone className="w-4 h-4" />
                                            <span>{institution.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Mail className="w-4 h-4" />
                                            <span>{institution.email}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="w-4 h-4" />
                                            <span>{institution.address}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Globe className="w-4 h-4" />
                                            <span>{institution.website}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center justify-between">
                                        <span className="text-sm text-gray-500">
                                            {institution.reviews} ulasan
                                        </span>
                                        <Button size="sm">
                                            Lihat Detail
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Fitur Unggulan
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Nikmati berbagai fitur yang memudahkan pembelajaran Anda
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kelas Premium</h3>
                            <p className="text-gray-600">Akses ke kelas berkualitas tinggi dengan instruktur profesional</p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Kelas Gratis</h3>
                            <p className="text-gray-600">Materi pembelajaran dasar yang dapat diakses tanpa biaya</p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Konsultasi WA</h3>
                            <p className="text-gray-600">Hubungi langsung lembaga melalui WhatsApp untuk informasi lebih lanjut</p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Bed className="w-8 h-8 text-orange-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-2">Booking Hotel</h3>
                            <p className="text-gray-600">Temukan dan pesan akomodasi terdekat dengan lembaga pendidikan</p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Pro Courses Preview */}
            <section className="py-16 bg-gradient-to-r from-blue-50 to-purple-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Kelas Premium
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tingkatkan kemampuan Anda dengan kelas premium yang dirancang khusus
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="card-hover">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <Badge className="bg-yellow-500 text-white">Terpopuler</Badge>
                                    <span className="text-2xl font-bold text-blue-600">Rp 2.500.000</span>
                                </div>
                                <CardTitle>Kelas Bahasa Inggris Intensif</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm">4.9 (150 ulasan)</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">1.2k siswa</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Program intensif 3 bulan dengan metode kampung Inggris yang terbukti efektif.
                                </p>
                                <Button className="w-full">
                                    Daftar Sekarang
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                        
                        <Card className="card-hover">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <Badge className="bg-green-500 text-white">Baru</Badge>
                                    <span className="text-2xl font-bold text-blue-600">Rp 1.800.000</span>
                                </div>
                                <CardTitle>Kelas TOEFL Preparation</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm">4.8 (89 ulasan)</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">856 siswa</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Persiapan lengkap untuk tes TOEFL dengan strategi dan latihan intensif.
                                </p>
                                <Button className="w-full">
                                    Daftar Sekarang
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                        
                        <Card className="card-hover">
                            <CardHeader>
                                <div className="flex items-center justify-between">
                                    <Badge className="bg-purple-500 text-white">Premium</Badge>
                                    <span className="text-2xl font-bold text-blue-600">Rp 3.200.000</span>
                                </div>
                                <CardTitle>Kelas IELTS Master</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                        <span className="text-sm">4.9 (203 ulasan)</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">1.5k siswa</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Program master untuk mencapai skor IELTS tinggi dengan bimbingan expert.
                                </p>
                                <Button className="w-full">
                                    Daftar Sekarang
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Free Courses Preview */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Kelas Gratis
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Mulai perjalanan belajar Anda dengan kelas gratis yang berkualitas
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="card-hover">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-green-600" />
                                    Dasar Bahasa Inggris
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">2 jam</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">2.5k siswa</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Pelajari dasar-dasar bahasa Inggris dengan metode yang mudah dipahami.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <PlayCircle className="w-4 h-4 mr-1" />
                                        Mulai
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="card-hover">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-green-600" />
                                    Grammar Dasar
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">1.5 jam</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">1.8k siswa</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Kuasai tata bahasa Inggris dasar dengan penjelasan yang jelas dan contoh.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <PlayCircle className="w-4 h-4 mr-1" />
                                        Mulai
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                        
                        <Card className="card-hover">
                            <CardHeader>
                                <CardTitle className="flex items-center gap-2">
                                    <BookOpen className="w-5 h-5 text-green-600" />
                                    Pronunciation
                                </CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="flex items-center gap-4 mb-4">
                                    <div className="flex items-center gap-1">
                                        <Clock className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">1 jam</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <Users className="w-4 h-4 text-gray-400" />
                                        <span className="text-sm">1.2k siswa</span>
                                    </div>
                                </div>
                                <p className="text-gray-600 mb-4">
                                    Pelajari cara pengucapan yang benar dalam bahasa Inggris.
                                </p>
                                <div className="flex gap-2">
                                    <Button variant="outline" size="sm" className="flex-1">
                                        <PlayCircle className="w-4 h-4 mr-1" />
                                        Mulai
                                    </Button>
                                    <Button variant="outline" size="sm">
                                        <Download className="w-4 h-4" />
                                    </Button>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            Apa Kata Mereka
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Testimoni dari siswa yang telah merasakan manfaat platform kami
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                "Platform yang sangat membantu untuk menemukan lembaga berkualitas. 
                                Saya berhasil meningkatkan kemampuan bahasa Inggris dengan signifikan."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-blue-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">A</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Ahmad Rizki</p>
                                    <p className="text-sm text-gray-500">Mahasiswa</p>
                                </div>
                            </div>
                        </Card>
                        
                        <Card className="p-6">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                "Kelas gratis sangat bermanfaat untuk memulai belajar. 
                                Materinya berkualitas dan mudah dipahami."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">S</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Sarah Putri</p>
                                    <p className="text-sm text-gray-500">Karyawan</p>
                                </div>
                            </div>
                        </Card>
                        
                        <Card className="p-6">
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                ))}
                            </div>
                            <p className="text-gray-600 mb-4">
                                "Fitur booking hotel sangat praktis. 
                                Tidak perlu repot mencari akomodasi saat mengikuti kursus."
                            </p>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 bg-purple-500 rounded-full flex items-center justify-center">
                                    <span className="text-white font-semibold">M</span>
                                </div>
                                <div>
                                    <p className="font-semibold">Maya Sari</p>
                                    <p className="text-sm text-gray-500">Pelajar</p>
                                </div>
                            </div>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Emergency Help Section */}
            <EmergencyHelp />
        </GuestLayout>
    );
}
