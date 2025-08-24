import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GuestLayout from '@/layouts/guest-layout';
import {
    Building2,
    Star,
    Phone,
    Mail,
    Globe,
    MapPin,
    Search,
    Filter,
    Lock,
    Crown,
    Users,
    Award,
    ArrowRight,
    ExternalLink
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
    isPremium: boolean;
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
        logo: "/images/pare-english-logo.png",
        isPremium: true
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
        logo: "/images/global-logo.png",
        isPremium: true
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
        logo: "/images/village-logo.png",
        isPremium: false
    },
    {
        id: 4,
        name: "Pare Language Center",
        phone: "+62 812-3456-7893",
        email: "info@parelanguage.com",
        address: "Jl. Diponegoro No. 89, Pare, Kediri",
        website: "https://parelanguage.com",
        rating: 4.2,
        reviews: 450,
        category: 'standard',
        description: "Pusat pembelajaran bahasa dengan metode modern dan teknologi terkini.",
        logo: "/images/language-center-logo.png",
        isPremium: false
    },
    {
        id: 5,
        name: "Basic English Pare",
        phone: "+62 812-3456-7894",
        email: "contact@basicenglishpare.com",
        address: "Jl. Sudirman No. 12, Pare, Kediri",
        website: "https://basicenglishpare.com",
        rating: 4.0,
        reviews: 320,
        category: 'basic',
        description: "Kursus bahasa Inggris dasar untuk pemula dengan harga terjangkau.",
        logo: "/images/basic-english-logo.png",
        isPremium: false
    },
    {
        id: 6,
        name: "Pare Learning Hub",
        phone: "+62 812-3456-7895",
        email: "hello@parelearninghub.com",
        address: "Jl. Gatot Subroto No. 34, Pare, Kediri",
        website: "https://parelearninghub.com",
        rating: 3.8,
        reviews: 280,
        category: 'basic',
        description: "Tempat belajar yang nyaman dengan suasana yang mendukung.",
        logo: "/images/learning-hub-logo.png",
        isPremium: false
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

export default function Institutions() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [isPremiumUser, setIsPremiumUser] = useState(false); // Simulasi user premium

    // Filter institutions based on search and category
    const filteredInstitutions = institutions.filter(institution => {
        const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            institution.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || institution.category === selectedCategory;
        
        // If user is not premium, only show first 3 institutions
        if (!isPremiumUser && !institution.isPremium) {
            return false;
        }
        
        return matchesSearch && matchesCategory;
    });

    // Group institutions by category
    const groupedInstitutions = filteredInstitutions.reduce((groups, institution) => {
        const category = institution.category;
        if (!groups[category]) {
            groups[category] = [];
        }
        groups[category].push(institution);
        return groups;
    }, {} as Record<string, Institution[]>);

    return (
        <GuestLayout>
            <Head title="Katalog Lembaga - Pare EDUHUB LMS" />
            
            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-700 text-white py-16">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-4">
                        Katalog Lembaga
                    </h1>
                    <p className="text-xl max-w-3xl mx-auto">
                        Temukan lembaga pendidikan berkualitas di Pare dengan rating dan ulasan terbaik
                    </p>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-4">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                            <Input
                                placeholder="Cari lembaga..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="pl-10"
                            />
                        </div>
                        <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                            <SelectTrigger>
                                <SelectValue placeholder="Pilih kategori" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="all">Semua Kategori</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                                <SelectItem value="standard">Standard</SelectItem>
                                <SelectItem value="basic">Basic</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button 
                            variant="outline" 
                            className="flex items-center gap-2"
                            onClick={() => setIsPremiumUser(!isPremiumUser)}
                        >
                            {isPremiumUser ? (
                                <>
                                    <Crown className="w-4 h-4 text-yellow-500" />
                                    Premium User
                                </>
                            ) : (
                                <>
                                    <Lock className="w-4 h-4" />
                                    Free User
                                </>
                            )}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Institutions List */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    {Object.keys(groupedInstitutions).length === 0 ? (
                        <div className="text-center py-12">
                            <Building2 className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                Tidak ada lembaga ditemukan
                            </h3>
                            <p className="text-gray-500">
                                Coba ubah filter pencarian Anda
                            </p>
                        </div>
                    ) : (
                        Object.entries(groupedInstitutions).map(([category, categoryInstitutions]) => (
                            <div key={category} className="mb-12">
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${getCategoryColor(category)}`}>
                                        <Award className="w-4 h-4" />
                                    </div>
                                    <h2 className="text-2xl font-bold">
                                        Kategori {getCategoryName(category)}
                                    </h2>
                                    <Badge variant="secondary">
                                        {categoryInstitutions.length} lembaga
                                    </Badge>
                                </div>
                                
                                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    {categoryInstitutions.map((institution) => (
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
                                                                {getCategoryName(institution.category)}
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
                                                        <span className="truncate">{institution.address}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-500">
                                                        <Globe className="w-4 h-4" />
                                                        <a 
                                                            href={institution.website} 
                                                            target="_blank" 
                                                            rel="noopener noreferrer"
                                                            className="text-blue-600 hover:underline flex items-center gap-1"
                                                        >
                                                            {institution.website}
                                                            <ExternalLink className="w-3 h-3" />
                                                        </a>
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center gap-4 text-sm text-gray-500">
                                                        <span>{institution.reviews} ulasan</span>
                                                        <div className="flex items-center gap-1">
                                                            <Users className="w-4 h-4" />
                                                            <span>1.2k siswa</span>
                                                        </div>
                                                    </div>
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
                        ))
                    )}
                </div>
            </section>

            {/* Premium Upgrade CTA */}
            {!isPremiumUser && (
                <section className="py-12 bg-gradient-to-r from-yellow-400 to-orange-500">
                    <div className="container mx-auto px-4 text-center">
                        <div className="max-w-2xl mx-auto">
                            <Crown className="w-16 h-16 text-white mx-auto mb-4" />
                            <h2 className="text-3xl font-bold text-white mb-4">
                                Upgrade ke Premium
                            </h2>
                            <p className="text-white/90 mb-6">
                                Dapatkan akses ke semua lembaga dan fitur premium lainnya
                            </p>
                            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                                Upgrade Sekarang
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </div>
                    </div>
                </section>
            )}
        </GuestLayout>
    );
}