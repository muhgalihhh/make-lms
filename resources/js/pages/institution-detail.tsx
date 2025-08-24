import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GuestLayout from '@/layouts/guest-layout';
import {
    Building2,
    Star,
    Phone,
    Mail,
    Globe,
    MapPin,
    Users,
    Award,
    ArrowRight,
    ExternalLink,
    Clock,
    CheckCircle,
    MessageSquare,
    BookOpen
} from 'lucide-react';

interface InstitutionDetail {
    id: number;
    name: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    website: string;
    rating: number;
    reviews: number;
    students: number;
    category: 'premium' | 'standard' | 'basic';
    founded: string;
    courses: number;
    instructors: number;
    facilities: string[];
    achievements: string[];
    courses_offered: {
        id: number;
        name: string;
        duration: string;
        price: string;
        level: string;
        description: string;
    }[];
}

const institutionData: InstitutionDetail = {
    id: 1,
    name: "Pare English Course",
    description: "Lembaga kursus bahasa Inggris terbaik di Pare dengan metode kampung Inggris yang terkenal. Berdiri sejak 2010, kami telah membantu ribuan siswa mencapai kemampuan bahasa Inggris yang diinginkan.",
    phone: "+62 812-3456-7890",
    email: "info@pareenglish.com",
    address: "Jl. Brawijaya No. 123, Pare, Kediri, Jawa Timur",
    website: "https://pareenglish.com",
    rating: 4.8,
    reviews: 1250,
    students: 5000,
    category: 'premium',
    founded: "2010",
    courses: 15,
    instructors: 25,
    facilities: [
        "Ruang kelas ber-AC",
        "WiFi gratis",
        "Perpustakaan",
        "Lab komputer",
        "Ruang multimedia",
        "Kantin",
        "Parkir luas",
        "Area istirahat"
    ],
    achievements: [
        "Lembaga Terbaik 2023 - Dinas Pendidikan",
        "Sertifikasi ISO 9001:2015",
        "Akreditasi A dari BAN-PT",
        "Juara 1 English Competition 2022",
        "Partner resmi Cambridge English"
    ],
    courses_offered: [
        {
            id: 1,
            name: "Kelas Bahasa Inggris Intensif",
            duration: "3 Bulan",
            price: "Rp 2.500.000",
            level: "Pemula - Intermediate",
            description: "Program intensif dengan metode kampung Inggris yang terbukti efektif."
        },
        {
            id: 2,
            name: "TOEFL Preparation",
            duration: "2 Bulan",
            price: "Rp 1.800.000",
            level: "Intermediate - Advanced",
            description: "Persiapan lengkap untuk tes TOEFL dengan target skor 550+."
        },
        {
            id: 3,
            name: "IELTS Master Class",
            duration: "4 Bulan",
            price: "Rp 3.200.000",
            level: "Advanced",
            description: "Program master untuk mencapai skor IELTS tinggi dengan target band 7.0+."
        },
        {
            id: 4,
            name: "Business English",
            duration: "2 Bulan",
            price: "Rp 1.500.000",
            level: "Intermediate",
            description: "Kelas bahasa Inggris untuk bisnis dan profesional."
        }
    ]
};

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

const getCategoryName = (category: string) => {
    switch (category) {
        case 'premium':
            return 'Premium';
        case 'standard':
            return 'Standard';
        case 'basic':
            return 'Basic';
        default:
            return category;
    }
};

export default function InstitutionDetail() {
    return (
        <GuestLayout>
            <Head title={`${institutionData.name} - Pare EDU HUB`} />
            
            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="flex items-center gap-6">
                        <div className="w-20 h-20 bg-white/20 rounded-lg flex items-center justify-center">
                            <Building2 className="w-10 h-10" />
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold mb-2">{institutionData.name}</h1>
                            <div className="flex items-center gap-4">
                                <Badge className={getCategoryColor(institutionData.category)}>
                                    {getCategoryName(institutionData.category)}
                                </Badge>
                                <div className="flex items-center gap-1">
                                    <Star className="w-5 h-5 text-yellow-300 fill-current" />
                                    <span className="font-semibold">{institutionData.rating}</span>
                                    <span className="text-sm opacity-90">({institutionData.reviews} ulasan)</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2 space-y-8">
                            {/* Description */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Tentang Lembaga</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600 leading-relaxed">
                                        {institutionData.description}
                                    </p>
                                </CardContent>
                            </Card>

                            {/* Courses Offered */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <BookOpen className="w-5 h-5" />
                                        Kelas yang Ditawarkan
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-4">
                                        {institutionData.courses_offered.map((course) => (
                                            <div key={course.id} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                                                <div className="flex items-start justify-between mb-2">
                                                    <h3 className="font-semibold text-lg">{course.name}</h3>
                                                    <Badge variant="outline">{course.level}</Badge>
                                                </div>
                                                <p className="text-gray-600 text-sm mb-3">{course.description}</p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <div className="flex items-center gap-1">
                                                            <Clock className="w-4 h-4" />
                                                            <span>{course.duration}</span>
                                                        </div>
                                                        <span className="font-semibold text-blue-600">{course.price}</span>
                                                    </div>
                                                    <Button size="sm">
                                                        Lihat Detail
                                                        <ArrowRight className="w-4 h-4 ml-1" />
                                                    </Button>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Facilities */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Fasilitas</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="grid md:grid-cols-2 gap-3">
                                        {institutionData.facilities.map((facility, index) => (
                                            <div key={index} className="flex items-center gap-2">
                                                <CheckCircle className="w-4 h-4 text-green-500" />
                                                <span className="text-sm">{facility}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Achievements */}
                            <Card>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-2">
                                        <Award className="w-5 h-5" />
                                        Prestasi & Sertifikasi
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {institutionData.achievements.map((achievement, index) => (
                                            <div key={index} className="flex items-center gap-3 p-3 bg-yellow-50 rounded-lg">
                                                <Award className="w-5 h-5 text-yellow-600" />
                                                <span className="text-sm">{achievement}</span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Info */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Informasi Kontak</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center gap-3">
                                        <Phone className="w-5 h-5 text-blue-600" />
                                        <div>
                                            <p className="font-medium">{institutionData.phone}</p>
                                            <p className="text-sm text-gray-500">Telepon</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Mail className="w-5 h-5 text-green-600" />
                                        <div>
                                            <p className="font-medium">{institutionData.email}</p>
                                            <p className="text-sm text-gray-500">Email</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <MapPin className="w-5 h-5 text-red-600" />
                                        <div>
                                            <p className="font-medium">{institutionData.address}</p>
                                            <p className="text-sm text-gray-500">Alamat</p>
                                        </div>
                                    </div>
                                    
                                    <div className="flex items-center gap-3">
                                        <Globe className="w-5 h-5 text-purple-600" />
                                        <div>
                                            <a 
                                                href={institutionData.website} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                className="font-medium text-blue-600 hover:underline"
                                            >
                                                {institutionData.website}
                                            </a>
                                            <p className="text-sm text-gray-500">Website</p>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Stats */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Statistik</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Didirikan</span>
                                        <span className="font-semibold">{institutionData.founded}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Total Siswa</span>
                                        <span className="font-semibold">{institutionData.students.toLocaleString()}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Kelas Tersedia</span>
                                        <span className="font-semibold">{institutionData.courses}</span>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <span className="text-gray-600">Instruktur</span>
                                        <span className="font-semibold">{institutionData.instructors}</span>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Aksi Cepat</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button className="w-full bg-green-600 hover:bg-green-700">
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        Hubungi via WhatsApp
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        <ExternalLink className="w-4 h-4 mr-2" />
                                        Kunjungi Website
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        <BookOpen className="w-4 h-4 mr-2" />
                                        Lihat Kelas
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}