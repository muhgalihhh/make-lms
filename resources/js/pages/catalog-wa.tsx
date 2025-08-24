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
    BookOpen, 
    Search,
    Filter,
    Phone,
    Mail,
    MapPin,
    ExternalLink,
    Award,
    Video,
    FileText,
    Download,
    Calendar,
    DollarSign,
    CheckCircle
} from 'lucide-react';

interface CatalogItem {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    rating: number;
    students: number;
    price: number;
    originalPrice?: number;
    description: string;
    duration: string;
    instructor: string;
    level: 'beginner' | 'intermediate' | 'advanced';
    type: 'course' | 'workshop' | 'consultation' | 'material';
    features: string[];
    whatsappNumber: string;
    whatsappMessage: string;
    isPopular?: boolean;
    isNew?: boolean;
    isOffline?: boolean;
    location?: string;
    schedule?: string;
}

const CatalogWA: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedType, setSelectedType] = useState<string>('all');

    const catalogItems: CatalogItem[] = [
        {
            id: 1,
            title: 'Workshop Laravel & React Intensive',
            category: 'Web Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.9,
            students: 45,
            price: 2500000,
            originalPrice: 3500000,
            description: 'Workshop intensif 3 hari untuk membangun aplikasi web modern dengan Laravel dan React. Hands-on project dan mentoring langsung.',
            duration: '3 hari',
            instructor: 'Ahmad Rizki',
            level: 'intermediate',
            type: 'workshop',
            isPopular: true,
            isOffline: true,
            location: 'Jakarta Convention Center',
            schedule: '15-17 Desember 2024',
            features: [
                'Mentoring langsung',
                'Hands-on project',
                'Sertifikat resmi',
                'Materi lengkap',
                'Networking session',
                'Coffee break'
            ],
            whatsappNumber: '+6281234567890',
            whatsappMessage: 'Halo, saya tertarik dengan Workshop Laravel & React Intensive. Bisa info lebih lanjut?'
        },
        {
            id: 2,
            title: 'Konsultasi Karir Tech 1-on-1',
            category: 'Career Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.8,
            students: 120,
            price: 500000,
            description: 'Konsultasi personal untuk merencanakan karir di bidang teknologi. Cocok untuk fresh graduate dan career switcher.',
            duration: '2 jam',
            instructor: 'Sarah Johnson',
            level: 'beginner',
            type: 'consultation',
            features: [
                'Analisis skill set',
                'Roadmap karir',
                'Portfolio review',
                'Mock interview',
                'Follow-up session',
                'Referral network'
            ],
            whatsappNumber: '+6281234567891',
            whatsappMessage: 'Halo, saya ingin konsultasi karir tech. Bisa booking sesi konsultasi?'
        },
        {
            id: 3,
            title: 'E-Book: Complete Web Development Guide',
            category: 'Web Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.7,
            students: 2500,
            price: 150000,
            originalPrice: 250000,
            description: 'Panduan lengkap web development dari dasar hingga advanced. 300+ halaman dengan contoh kode dan best practices.',
            duration: 'Self-paced',
            instructor: 'David Chen',
            level: 'beginner',
            type: 'material',
            isNew: true,
            features: [
                '300+ halaman',
                'Contoh kode lengkap',
                'Best practices',
                'Project examples',
                'Lifetime access',
                'Update gratis'
            ],
            whatsappNumber: '+6281234567892',
            whatsappMessage: 'Halo, saya tertarik dengan E-Book Complete Web Development Guide. Bisa info cara pembelian?'
        },
        {
            id: 4,
            title: 'Online Course: UI/UX Design Mastery',
            category: 'Design',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.9,
            students: 890,
            price: 1200000,
            originalPrice: 1800000,
            description: 'Kursus online komprehensif untuk menjadi UI/UX designer profesional. Dari teori hingga portfolio siap kerja.',
            duration: '40 jam',
            instructor: 'Maria Garcia',
            level: 'intermediate',
            type: 'course',
            features: [
                '40 jam video',
                'Design kit lengkap',
                'Portfolio review',
                'Job placement',
                'Community access',
                'Sertifikat resmi'
            ],
            whatsappNumber: '+6281234567893',
            whatsappMessage: 'Halo, saya tertarik dengan Online Course UI/UX Design Mastery. Bisa info detail dan cara pendaftaran?'
        },
        {
            id: 5,
            title: 'Bootcamp Data Science Jakarta',
            category: 'Data Science',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.8,
            students: 35,
            price: 5000000,
            originalPrice: 7500000,
            description: 'Bootcamp intensif 8 minggu untuk menjadi Data Scientist. Project real-world dan job guarantee.',
            duration: '8 minggu',
            instructor: 'Dr. Alex Wong',
            level: 'advanced',
            type: 'workshop',
            isOffline: true,
            location: 'Jakarta Tech Hub',
            schedule: 'Januari - Maret 2025',
            features: [
                '8 minggu intensif',
                'Project real-world',
                'Job guarantee',
                'Mentor industry',
                'Career support',
                'Alumni network'
            ],
            whatsappNumber: '+6281234567894',
            whatsappMessage: 'Halo, saya tertarik dengan Bootcamp Data Science Jakarta. Bisa info detail program dan pendaftaran?'
        },
        {
            id: 6,
            title: 'Template Figma UI Kit Premium',
            category: 'Design',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.6,
            students: 1800,
            price: 250000,
            description: 'Koleksi 100+ komponen UI modern untuk Figma. Cocok untuk designer dan developer.',
            duration: 'Lifetime',
            instructor: 'Design Studio Team',
            level: 'intermediate',
            type: 'material',
            features: [
                '100+ komponen',
                'Auto-layout',
                'Dark/Light mode',
                'Documentation',
                'Free updates',
                'Commercial license'
            ],
            whatsappNumber: '+6281234567895',
            whatsappMessage: 'Halo, saya tertarik dengan Template Figma UI Kit Premium. Bisa info cara pembelian?'
        }
    ];

    const categories = ['all', 'Web Development', 'Design', 'Data Science', 'Career Development', 'Marketing', 'Mobile Development'];
    const types = ['all', 'course', 'workshop', 'consultation', 'material'];

    const filteredItems = catalogItems.filter(item => {
        const matchesSearch = item.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             item.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || item.category === selectedCategory;
        const matchesType = selectedType === 'all' || item.type === selectedType;
        return matchesSearch && matchesCategory && matchesType;
    });

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'beginner':
                return 'bg-green-100 text-green-800';
            case 'intermediate':
                return 'bg-blue-100 text-blue-800';
            case 'advanced':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getLevelLabel = (level: string) => {
        switch (level) {
            case 'beginner':
                return 'Pemula';
            case 'intermediate':
                return 'Menengah';
            case 'advanced':
                return 'Lanjutan';
            default:
                return 'Unknown';
        }
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'course':
                return 'bg-blue-100 text-blue-800';
            case 'workshop':
                return 'bg-purple-100 text-purple-800';
            case 'consultation':
                return 'bg-orange-100 text-orange-800';
            case 'material':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeLabel = (type: string) => {
        switch (type) {
            case 'course':
                return 'Kursus';
            case 'workshop':
                return 'Workshop';
            case 'consultation':
                return 'Konsultasi';
            case 'material':
                return 'Materi';
            default:
                return 'Unknown';
        }
    };

    const handleWhatsApp = (item: CatalogItem) => {
        const message = encodeURIComponent(item.whatsappMessage);
        const whatsappUrl = `https://wa.me/${item.whatsappNumber.replace(/\D/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleCall = (item: CatalogItem) => {
        window.open(`tel:${item.whatsappNumber}`, '_self');
    };

    return (
        <GuestLayout
            title="Katalog Kelas & Materi - Pare EDUHUB"
            description="Temukan berbagai kelas, workshop, konsultasi, dan materi pembelajaran. Hubungi kami langsung via WhatsApp untuk info lebih lanjut."
            keywords="katalog kelas, workshop, konsultasi, materi pembelajaran, whatsapp, pendaftaran"
        >
            {/* Header Section */}
            <section className="bg-gradient-to-r from-green-500 to-green-600 py-16 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Katalog Kelas & Materi</h1>
                        <p className="text-xl text-green-100">
                            Temukan berbagai program pembelajaran yang sesuai dengan kebutuhan Anda. Hubungi kami langsung via WhatsApp!
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <MessageSquare className="w-5 h-5" />
                                <span>Konsultasi WhatsApp</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                <span>Jadwal Fleksibel</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5" />
                                <span>Kualitas Terjamin</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1 relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                            <Input
                                placeholder="Cari kelas, workshop, atau materi..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger className="w-full md:w-48">
                                <SelectValue placeholder="Pilih kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>
                                        {category === 'all' ? 'Semua Kategori' : category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select value={selectedType} onValueChange={setSelectedType}>
                            <SelectTrigger className="w-full md:w-48">
                                <SelectValue placeholder="Pilih tipe" />
                            </SelectTrigger>
                            <SelectContent>
                                {types.map(type => (
                                    <SelectItem key={type} value={type}>
                                        {type === 'all' ? 'Semua Tipe' : getTypeLabel(type)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            {/* Catalog Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredItems.map((item) => (
                            <Card key={item.id} className="overflow-hidden transition-transform hover:scale-105">
                                <div className="relative">
                                    <img src={item.thumbnail} alt={item.title} className="h-48 w-full object-cover" />
                                    <div className="absolute top-2 left-2 flex gap-2">
                                        <Badge className={getTypeColor(item.type)}>
                                            {getTypeLabel(item.type)}
                                        </Badge>
                                        {item.isPopular && <Badge className="bg-orange-500 text-white">Populer</Badge>}
                                        {item.isNew && <Badge className="bg-green-500 text-white">Baru</Badge>}
                                        {item.isOffline && <Badge className="bg-purple-500 text-white">Offline</Badge>}
                                    </div>
                                    {item.originalPrice && (
                                        <div className="absolute top-2 right-2">
                                            <Badge className="bg-red-500 text-white">
                                                {Math.round(((item.originalPrice - item.price) / item.originalPrice) * 100)}% OFF
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary">{item.category}</Badge>
                                        <Badge className={getLevelColor(item.level)}>
                                            {getLevelLabel(item.level)}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg">{item.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{item.description}</p>
                                    
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span>{item.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            <span>{item.students.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{item.duration}</span>
                                        </div>
                                    </div>

                                    {item.location && (
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <MapPin className="h-4 w-4" />
                                            <span>{item.location}</span>
                                        </div>
                                    )}

                                    {item.schedule && (
                                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                            <Calendar className="h-4 w-4" />
                                            <span>{item.schedule}</span>
                                        </div>
                                    )}
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl font-bold text-primary">
                                                    Rp {item.price.toLocaleString()}
                                                </span>
                                                {item.originalPrice && (
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        Rp {item.originalPrice.toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Fitur yang didapat:</h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {item.features.slice(0, 3).map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <CheckCircle className="h-3 w-3 text-green-500" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                                {item.features.length > 3 && (
                                                    <div className="text-xs text-muted-foreground">
                                                        +{item.features.length - 3} fitur lainnya
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            <Button 
                                                className="flex-1" 
                                                onClick={() => handleWhatsApp(item)}
                                            >
                                                <MessageSquare className="mr-2 h-4 w-4" />
                                                Konsultasi WA
                                            </Button>
                                            <Button 
                                                variant="outline" 
                                                size="sm"
                                                onClick={() => handleCall(item)}
                                            >
                                                <Phone className="h-4 w-4" />
                                            </Button>
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {filteredItems.length === 0 && (
                        <div className="text-center py-16">
                            <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">Tidak ada item ditemukan</h3>
                            <p className="text-gray-500">Coba ubah filter pencarian Anda</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Information */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Hubungi Kami</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <MessageSquare className="w-8 h-8 mx-auto text-green-600 mb-4" />
                                <h3 className="font-semibold mb-2">WhatsApp</h3>
                                <p className="text-sm text-muted-foreground mb-4">Konsultasi cepat dan mudah</p>
                                <Button 
                                    className="w-full"
                                    onClick={() => handleWhatsApp(catalogItems[0])}
                                >
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Chat Sekarang
                                </Button>
                            </div>
                            
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <Phone className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                                <h3 className="font-semibold mb-2">Telepon</h3>
                                <p className="text-sm text-muted-foreground mb-4">Layanan customer service</p>
                                <Button 
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => handleCall(catalogItems[0])}
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Hubungi Kami
                                </Button>
                            </div>
                            
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <Mail className="w-8 h-8 mx-auto text-purple-600 mb-4" />
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-sm text-muted-foreground mb-4">Untuk pertanyaan detail</p>
                                <Button 
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => window.open('mailto:info@pareeduhub.com', '_self')}
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Kirim Email
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-3xl font-bold text-center mb-8">Pertanyaan Umum</h2>
                        <div className="space-y-6">
                            <div className="border rounded-lg p-6">
                                <h3 className="font-semibold mb-2">Bagaimana cara mendaftar program?</h3>
                                <p className="text-muted-foreground">Anda bisa menghubungi kami via WhatsApp atau telepon untuk konsultasi dan pendaftaran. Tim kami akan membantu memilih program yang sesuai dengan kebutuhan Anda.</p>
                            </div>
                            
                            <div className="border rounded-lg p-6">
                                <h3 className="font-semibold mb-2">Apakah ada jaminan uang kembali?</h3>
                                <p className="text-muted-foreground">Ya, kami memberikan jaminan uang kembali 100% jika Anda tidak puas dengan program yang diikuti dalam 7 hari pertama.</p>
                            </div>
                            
                            <div className="border rounded-lg p-6">
                                <h3 className="font-semibold mb-2">Apakah ada program online dan offline?</h3>
                                <p className="text-muted-foreground">Kami menyediakan berbagai program baik online maupun offline. Program offline biasanya berupa workshop intensif, sedangkan online untuk kursus yang lebih fleksibel.</p>
                            </div>
                            
                            <div className="border rounded-lg p-6">
                                <h3 className="font-semibold mb-2">Bagaimana dengan sertifikat?</h3>
                                <p className="text-muted-foreground">Semua program kami menyediakan sertifikat resmi yang diakui industri. Sertifikat akan diberikan setelah menyelesaikan program dengan baik.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default CatalogWA;