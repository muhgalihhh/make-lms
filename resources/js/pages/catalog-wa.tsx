import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GuestLayout from '@/layouts/guest-layout';
import {
    MessageSquare,
    Star,
    Users,
    Clock,
    Phone,
    ArrowRight,
    Search,
    Target,
    Zap,
    ExternalLink,
    BookOpen,
    Award,
    CheckCircle,
    MapPin,
    Mail
} from 'lucide-react';

interface CatalogItem {
    id: number;
    title: string;
    description: string;
    price: string;
    duration: string;
    students: number;
    rating: number;
    reviews: number;
    category: string;
    instructor: string;
    features: string[];
    whatsappNumber: string;
    whatsappMessage: string;
    isPopular: boolean;
    isNew: boolean;
    image: string;
    location: string;
}

const catalogItems: CatalogItem[] = [
    {
        id: 1,
        title: "Kelas Bahasa Inggris Intensif",
        description: "Program intensif 3 bulan dengan metode kampung Inggris yang terbukti efektif. Cocok untuk pemula hingga level intermediate.",
        price: "Rp 2.500.000",
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
        whatsappNumber: "+6281234567890",
        whatsappMessage: "Halo, saya tertarik dengan Kelas Bahasa Inggris Intensif. Mohon informasi lebih lanjut.",
        isPopular: true,
        isNew: false,
        image: "/images/english-intensive.jpg",
        location: "Pare, Kediri"
    },
    {
        id: 2,
        title: "TOEFL Preparation",
        description: "Persiapan lengkap untuk tes TOEFL dengan strategi dan latihan intensif. Target skor 550+.",
        price: "Rp 1.800.000",
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
        whatsappNumber: "+6281234567891",
        whatsappMessage: "Halo, saya ingin informasi tentang TOEFL Preparation. Berapa biayanya dan kapan bisa mulai?",
        isPopular: false,
        isNew: true,
        image: "/images/toefl-prep.jpg",
        location: "Pare, Kediri"
    },
    {
        id: 3,
        title: "IELTS Master Class",
        description: "Program master untuk mencapai skor IELTS tinggi dengan bimbingan expert. Target band 7.0+.",
        price: "Rp 3.200.000",
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
        whatsappNumber: "+6281234567892",
        whatsappMessage: "Halo, saya tertarik dengan IELTS Master Class. Apakah ada jadwal yang tersedia?",
        isPopular: true,
        isNew: false,
        image: "/images/ielts-master.jpg",
        location: "Pare, Kediri"
    },
    {
        id: 4,
        title: "Business English",
        description: "Kelas bahasa Inggris untuk bisnis dan profesional. Fokus pada komunikasi bisnis dan presentasi.",
        price: "Rp 1.500.000",
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
        whatsappNumber: "+6281234567893",
        whatsappMessage: "Halo, saya ingin informasi tentang Business English. Apakah ada kelas weekend?",
        isPopular: false,
        isNew: false,
        image: "/images/business-english.jpg",
        location: "Pare, Kediri"
    },
    {
        id: 5,
        title: "Conversation English",
        description: "Tingkatkan kemampuan speaking dan listening dengan metode conversation yang menyenangkan.",
        price: "Rp 1.200.000",
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
        whatsappNumber: "+6281234567894",
        whatsappMessage: "Halo, saya ingin belajar Conversation English. Berapa lama durasi belajarnya?",
        isPopular: false,
        isNew: true,
        image: "/images/conversation.jpg",
        location: "Pare, Kediri"
    },
    {
        id: 6,
        title: "Grammar Master",
        description: "Kuasi tata bahasa Inggris dari dasar hingga advanced dengan penjelasan detail dan latihan.",
        price: "Rp 900.000",
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
        whatsappNumber: "+6281234567895",
        whatsappMessage: "Halo, saya ingin belajar Grammar Master. Apakah ada materi untuk pemula?",
        isPopular: false,
        isNew: false,
        image: "/images/grammar-master.jpg",
        location: "Pare, Kediri"
    }
];

const handleWhatsAppClick = (phoneNumber: string, message: string) => {
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};

export default function CatalogWA() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredItems = catalogItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <GuestLayout>
            <Head title="Katalog WhatsApp - Pare EDU HUB" />
            
            {/* Header Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="mb-6">
                            <MessageSquare className="w-16 h-16 mx-auto text-yellow-300 mb-4" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Katalog WhatsApp
                            </h1>
                        </div>
                        <p className="text-xl max-w-2xl mx-auto">
                            Hubungi langsung lembaga melalui WhatsApp untuk informasi lebih lanjut. 
                            Konsultasi gratis dan pendaftaran mudah.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Konsultasi Gratis</h3>
                            <p className="text-gray-600 text-sm">
                                Dapatkan konsultasi gratis langsung dengan tim lembaga
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Respon Cepat</h3>
                            <p className="text-gray-600 text-sm">
                                Tim kami akan merespon pesan Anda dalam waktu singkat
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Pendaftaran Mudah</h3>
                            <p className="text-gray-600 text-sm">
                                Proses pendaftaran yang mudah dan cepat melalui WhatsApp
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
                                    placeholder="Cari kelas atau materi..."
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

            {/* Catalog Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredItems.map((item) => (
                            <Card key={item.id} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-2">
                                            {item.isPopular && (
                                                <Badge className="bg-orange-500 text-white">
                                                    Terpopuler
                                                </Badge>
                                            )}
                                            {item.isNew && (
                                                <Badge className="bg-green-500 text-white">
                                                    Baru
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium">{item.rating}</span>
                                        </div>
                                    </div>
                                    
                                    <CardTitle className="text-lg mb-2">{item.title}</CardTitle>
                                    <p className="text-gray-600 text-sm mb-4">{item.description}</p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{item.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{item.students}</span>
                                            </div>
                                        </div>
                                        <Badge variant="outline">{item.category}</Badge>
                                    </div>
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl font-bold text-blue-600">
                                                {item.price}
                                            </span>
                                        </div>
                                        <p className="text-sm text-gray-500 mb-2">
                                            Instruktur: {item.instructor}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="w-4 h-4" />
                                            <span>{item.location}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2">Fitur yang didapat:</h4>
                                        <ul className="space-y-1">
                                            {item.features.slice(0, 3).map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                            {item.features.length > 3 && (
                                                <li className="text-sm text-blue-600">
                                                    +{item.features.length - 3} fitur lainnya
                                                </li>
                                            )}
                                        </ul>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        <Button 
                                            className="flex-1 bg-green-600 hover:bg-green-700"
                                            onClick={() => handleWhatsAppClick(item.whatsappNumber, item.whatsappMessage)}
                                        >
                                            <MessageSquare className="w-4 h-4 mr-2" />
                                            Hubungi via WA
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Phone className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    
                                    <div className="mt-4 p-3 bg-green-50 rounded-lg">
                                        <div className="flex items-center gap-2 text-sm text-green-700">
                                            <MessageSquare className="w-4 h-4" />
                                            <span className="font-medium">Konsultasi Gratis</span>
                                        </div>
                                        <p className="text-xs text-green-600 mt-1">
                                            Dapatkan informasi lengkap dan konsultasi gratis langsung dengan tim lembaga.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {filteredItems.length === 0 && (
                        <div className="text-center py-12">
                            <MessageSquare className="w-16 h-16 text-gray-400 mx-auto mb-4" />
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

            {/* Contact Info Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">
                            Hubungi Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tim kami siap membantu Anda memilih kelas yang tepat sesuai kebutuhan
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">WhatsApp</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Konsultasi dan pendaftaran
                            </p>
                            <Button 
                                variant="outline" 
                                size="sm"
                                onClick={() => handleWhatsAppClick("+6281234567890", "Halo, saya ingin konsultasi tentang kelas yang tersedia.")}
                            >
                                Chat Sekarang
                            </Button>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Telepon</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Layanan pelanggan
                            </p>
                            <Button variant="outline" size="sm">
                                +62 812-3456-7890
                            </Button>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-sm text-gray-600 mb-2">
                                Informasi dan kerjasama
                            </p>
                            <Button variant="outline" size="sm">
                                info@pareeduhub.com
                            </Button>
                        </Card>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}