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
    Clock,
    GraduationCap,
    Zap,
    Target
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
            <Head title="Beranda - Pare EDU HUB" />
            
            {/* Tawk.to Chat Integration */}
            <TawkToChat propertyId="your-property-id" widgetId="your-widget-id" />

            {/* Hero Section */}
            <section className="relative bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 text-white py-20">
                <div className="container mx-auto px-4 text-center">
                    <div className="mb-6">
                        <GraduationCap className="w-16 h-16 mx-auto text-yellow-300 mb-4" />
                        <h1 className="text-5xl md:text-6xl font-bold mb-6">
                            Selamat Datang di{' '}
                            <span className="text-yellow-300">Pare EDU HUB</span>
                        </h1>
                    </div>
                    <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
                        Platform pembelajaran online eksklusif untuk lembaga pendidikan di Pare. 
                        Temukan kursus berkualitas dari lembaga terpercaya.
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
                                        <Zap className="h-5 w-5 text-blue-600" />
                                        Akses Cepat
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-blue-50">
                                            <Building2 className="h-6 w-6 text-blue-600" />
                                            <span className="text-sm">Lembaga</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-purple-50">
                                            <Award className="h-6 w-6 text-purple-600" />
                                            <span className="text-sm">Kelas Pro</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-green-50">
                                            <BookOpen className="h-6 w-6 text-green-600" />
                                            <span className="text-sm">Kelas Gratis</span>
                                        </Button>
                                        <Button variant="outline" className="h-20 flex flex-col items-center justify-center gap-2 hover:bg-orange-50">
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
                            <Card key={institution.id} className="hover:shadow-lg transition-shadow duration-300">
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
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <Users className="w-4 h-4" />
                                            <span>{institution.reviews} ulasan</span>
                                        </div>
                                        <Button size="sm" variant="outline">
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
                        <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Kelas Pro</h3>
                            <p className="text-gray-600 text-sm">
                                Akses materi lengkap dengan pembayaran melalui QRIS
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Kelas Gratis</h3>
                            <p className="text-gray-600 text-sm">
                                Materi dasar gratis, upgrade ke pro untuk konten lengkap
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Download className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Download PDF</h3>
                            <p className="text-gray-600 text-sm">
                                Download materi dalam format PDF untuk belajar offline
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6 hover:shadow-lg transition-shadow duration-300">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Live Chat</h3>
                            <p className="text-gray-600 text-sm">
                                Konsultasi langsung dengan tim support kami
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Emergency Help Section */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <EmergencyHelp />
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">
                        Siap Memulai Perjalanan Belajar?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan siswa yang telah merasakan manfaat pembelajaran di Pare EDU HUB
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                            Daftar Sekarang
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                            Pelajari Lebih Lanjut
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}
