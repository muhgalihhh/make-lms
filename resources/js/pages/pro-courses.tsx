import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GuestLayout from '@/layouts/guest-layout';
import {
    Award,
    Star,
    Users,
    Clock,
    PlayCircle,
    Download,
    CheckCircle,
    Crown,
    CreditCard,
    QrCode,
    ArrowRight,
    BookOpen,
    Target,
    Zap,
    Shield,
    Search
} from 'lucide-react';

interface ProCourse {
    id: number;
    title: string;
    description: string;
    price: number;
    originalPrice: number;
    duration: string;
    students: number;
    rating: number;
    reviews: number;
    category: string;
    instructor: string;
    features: string[];
    isPopular: boolean;
    isNew: boolean;
    image: string;
}

const proCourses: ProCourse[] = [
    {
        id: 1,
        title: "Kelas Bahasa Inggris Intensif Pro",
        description: "Program intensif 3 bulan dengan metode kampung Inggris yang terbukti efektif. Cocok untuk pemula hingga level intermediate.",
        price: 2500000,
        originalPrice: 3000000,
        duration: "3 Bulan",
        students: 1250,
        rating: 4.9,
        reviews: 150,
        category: "Bahasa Inggris",
        instructor: "Sarah Johnson",
        features: [
            "Materi lengkap 12 modul",
            "Video pembelajaran HD",
            "PDF materi download",
            "Live session mingguan",
            "Sertifikat resmi",
            "Support 24/7"
        ],
        isPopular: true,
        isNew: false,
        image: "/images/english-intensive.jpg"
    },
    {
        id: 2,
        title: "TOEFL Preparation Master",
        description: "Persiapan lengkap untuk tes TOEFL dengan strategi dan latihan intensif. Target skor 550+.",
        price: 1800000,
        originalPrice: 2200000,
        duration: "2 Bulan",
        students: 856,
        rating: 4.8,
        reviews: 89,
        category: "TOEFL",
        instructor: "Michael Chen",
        features: [
            "Materi TOEFL lengkap",
            "Practice test 20+",
            "Strategi menjawab",
            "Mock test bulanan",
            "Analisis skor detail",
            "Garansi skor 550+"
        ],
        isPopular: false,
        isNew: true,
        image: "/images/toefl-prep.jpg"
    },
    {
        id: 3,
        title: "IELTS Master Class",
        description: "Program master untuk mencapai skor IELTS tinggi dengan bimbingan expert. Target band 7.0+.",
        price: 3200000,
        originalPrice: 3800000,
        duration: "4 Bulan",
        students: 1540,
        rating: 4.9,
        reviews: 203,
        category: "IELTS",
        instructor: "Emma Wilson",
        features: [
            "4 skills training",
            "Personal coaching",
            "Writing feedback",
            "Speaking practice",
            "Band score guarantee",
            "Lifetime access"
        ],
        isPopular: true,
        isNew: false,
        image: "/images/ielts-master.jpg"
    },
    {
        id: 4,
        title: "Business English Pro",
        description: "Kelas bahasa Inggris untuk bisnis dan profesional. Fokus pada komunikasi bisnis dan presentasi.",
        price: 1500000,
        originalPrice: 1800000,
        duration: "2 Bulan",
        students: 720,
        rating: 4.7,
        reviews: 95,
        category: "Business English",
        instructor: "David Brown",
        features: [
            "Business vocabulary",
            "Email writing",
            "Meeting skills",
            "Presentation tips",
            "Case studies",
            "Networking guide"
        ],
        isPopular: false,
        isNew: false,
        image: "/images/business-english.jpg"
    },
    {
        id: 5,
        title: "Conversation English Expert",
        description: "Tingkatkan kemampuan speaking dan listening dengan metode conversation yang menyenangkan.",
        price: 1200000,
        originalPrice: 1500000,
        duration: "2 Bulan",
        students: 980,
        rating: 4.6,
        reviews: 120,
        category: "Conversation",
        instructor: "Lisa Anderson",
        features: [
            "Daily conversation",
            "Pronunciation guide",
            "Slang & idioms",
            "Cultural context",
            "Role play sessions",
            "Voice recording"
        ],
        isPopular: false,
        isNew: true,
        image: "/images/conversation.jpg"
    },
    {
        id: 6,
        title: "Grammar Master Pro",
        description: "Kuasi tata bahasa Inggris dari dasar hingga advanced dengan penjelasan detail dan latihan.",
        price: 900000,
        originalPrice: 1200000,
        duration: "1.5 Bulan",
        students: 650,
        rating: 4.5,
        reviews: 78,
        category: "Grammar",
        instructor: "Robert Taylor",
        features: [
            "Complete grammar rules",
            "Interactive exercises",
            "Error correction",
            "Progress tracking",
            "Grammar quiz",
            "Reference guide"
        ],
        isPopular: false,
        isNew: false,
        image: "/images/grammar-master.jpg"
    }
];

const formatPrice = (price: number) => {
    return new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        minimumFractionDigits: 0
    }).format(price);
};

export default function ProCourses() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = proCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleEnroll = (courseId: number) => {
        // Simulasi proses enrollment
        console.log(`Enrolling in course ${courseId}`);
        // Di sini akan diintegrasikan dengan Midtrans untuk pembayaran QRIS
    };

    return (
        <GuestLayout>
            <Head title="Kelas Pro - Pare EDU HUB" />
            
            {/* Header Section */}
            <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="mb-6">
                            <Crown className="w-16 h-16 mx-auto text-yellow-300 mb-4" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Kelas Pro
                            </h1>
                        </div>
                        <p className="text-xl max-w-2xl mx-auto">
                            Tingkatkan kemampuan Anda dengan kelas premium yang dirancang khusus. 
                            Akses materi lengkap dengan pembayaran melalui QRIS.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Materi Lengkap</h3>
                            <p className="text-gray-600 text-sm">
                                Akses ke semua materi premium dengan kualitas terbaik
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <QrCode className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Pembayaran QRIS</h3>
                            <p className="text-gray-600 text-sm">
                                Bayar dengan mudah menggunakan QRIS dari berbagai e-wallet
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Download className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Download PDF</h3>
                            <p className="text-gray-600 text-sm">
                                Download materi dalam format PDF untuk belajar offline
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    placeholder="Cari kelas..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-48">
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Kategori" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Semua Kategori</SelectItem>
                                    <SelectItem value="Bahasa Inggris">Bahasa Inggris</SelectItem>
                                    <SelectItem value="TOEFL">TOEFL</SelectItem>
                                    <SelectItem value="IELTS">IELTS</SelectItem>
                                    <SelectItem value="Business English">Business English</SelectItem>
                                    <SelectItem value="Conversation">Conversation</SelectItem>
                                    <SelectItem value="Grammar">Grammar</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-2">
                                            {course.isPopular && (
                                                <Badge className="bg-orange-500 text-white">
                                                    Terpopuler
                                                </Badge>
                                            )}
                                            {course.isNew && (
                                                <Badge className="bg-green-500 text-white">
                                                    Baru
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium">{course.rating}</span>
                                        </div>
                                    </div>
                                    
                                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{course.students}</span>
                                            </div>
                                        </div>
                                        <Badge variant="outline">{course.category}</Badge>
                                    </div>
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl font-bold text-blue-600">
                                                {formatPrice(course.price)}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through">
                                                {formatPrice(course.originalPrice)}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Instruktur: {course.instructor}
                                        </p>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2">Fitur yang didapat:</h4>
                                        <ul className="space-y-1">
                                            {course.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                            {course.features.length > 3 && (
                                                <li className="text-sm text-blue-600">
                                                    +{course.features.length - 3} fitur lainnya
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        <Button 
                                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                                            onClick={() => handleEnroll(course.id)}
                                        >
                                            <CreditCard className="w-4 h-4 mr-2" />
                                            Daftar Sekarang
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <ArrowRight className="w-4 h-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                Tidak ada kelas ditemukan
                            </h3>
                            <p className="text-gray-500">
                                Coba ubah filter pencarian Anda
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Payment Info Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">
                            Cara Pembayaran
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Pembayaran dilakukan melalui QRIS yang mendukung berbagai e-wallet dan mobile banking
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-4 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <QrCode className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Scan QRIS</h3>
                            <p className="text-sm text-gray-600">
                                Scan kode QRIS yang muncul setelah memilih kelas
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CreditCard className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Pilih E-wallet</h3>
                            <p className="text-sm text-gray-600">
                                Pilih e-wallet atau mobile banking favorit Anda
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Konfirmasi</h3>
                            <p className="text-sm text-gray-600">
                                Konfirmasi pembayaran di aplikasi e-wallet Anda
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Akses Langsung</h3>
                            <p className="text-sm text-gray-600">
                                Akses kelas langsung setelah pembayaran berhasil
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}