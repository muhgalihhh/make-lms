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
    Award
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

const Institutions: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [isPremiumUser, setIsPremiumUser] = useState(false); // Simulasi user premium

    const institutions: Institution[] = [
        {
            id: 1,
            name: 'Tech Academy Indonesia',
            phone: '+62 21 1234 5678',
            email: 'info@techacademy.id',
            address: 'Jl. Sudirman No. 123, Jakarta Pusat',
            website: 'https://techacademy.id',
            rating: 4.9,
            reviews: 1250,
            category: 'premium',
            description: 'Lembaga pelatihan teknologi terkemuka dengan fokus pada web development dan mobile apps.',
            logo: 'https://via.placeholder.com/80x80',
            isPremium: true
        },
        {
            id: 2,
            name: 'Digital Skills Center',
            phone: '+62 21 2345 6789',
            email: 'hello@digitalskills.id',
            address: 'Jl. Thamrin No. 45, Jakarta Pusat',
            website: 'https://digitalskills.id',
            rating: 4.7,
            reviews: 890,
            category: 'premium',
            description: 'Pusat pengembangan skill digital dengan kurikulum yang disesuaikan kebutuhan industri.',
            logo: 'https://via.placeholder.com/80x80',
            isPremium: true
        },
        {
            id: 3,
            name: 'Creative Learning Hub',
            phone: '+62 21 3456 7890',
            email: 'contact@creativehub.id',
            address: 'Jl. Gatot Subroto No. 67, Jakarta Selatan',
            website: 'https://creativehub.id',
            rating: 4.5,
            reviews: 650,
            category: 'standard',
            description: 'Lembaga pelatihan kreatif untuk design, marketing, dan content creation.',
            logo: 'https://via.placeholder.com/80x80',
            isPremium: false
        },
        {
            id: 4,
            name: 'Business School Indonesia',
            phone: '+62 21 4567 8901',
            email: 'info@businessschool.id',
            address: 'Jl. Kuningan No. 89, Jakarta Selatan',
            website: 'https://businessschool.id',
            rating: 4.3,
            reviews: 450,
            category: 'standard',
            description: 'Lembaga pelatihan bisnis dan manajemen untuk profesional.',
            logo: 'https://via.placeholder.com/80x80',
            isPremium: false
        },
        {
            id: 5,
            name: 'Language Center Pro',
            phone: '+62 21 5678 9012',
            email: 'hello@languagecenter.id',
            address: 'Jl. Menteng No. 12, Jakarta Pusat',
            website: 'https://languagecenter.id',
            rating: 4.1,
            reviews: 320,
            category: 'basic',
            description: 'Pusat pembelajaran bahasa asing dengan metode modern.',
            logo: 'https://via.placeholder.com/80x80',
            isPremium: false
        },
        {
            id: 6,
            name: 'Coding Bootcamp Indonesia',
            phone: '+62 21 6789 0123',
            email: 'info@codingbootcamp.id',
            address: 'Jl. Senayan No. 34, Jakarta Pusat',
            website: 'https://codingbootcamp.id',
            rating: 4.8,
            reviews: 780,
            category: 'premium',
            description: 'Bootcamp coding intensif untuk karir di bidang teknologi.',
            logo: 'https://via.placeholder.com/80x80',
            isPremium: true
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

    const getRatingCategory = (rating: number) => {
        if (rating >= 4.5) return 'excellent';
        if (rating >= 4.0) return 'good';
        if (rating >= 3.5) return 'average';
        return 'basic';
    };

    const getRatingCategoryColor = (category: string) => {
        switch (category) {
            case 'excellent':
                return 'bg-gradient-to-r from-yellow-400 to-orange-500 text-white';
            case 'good':
                return 'bg-gradient-to-r from-blue-500 to-purple-600 text-white';
            case 'average':
                return 'bg-gradient-to-r from-green-500 to-teal-600 text-white';
            case 'basic':
                return 'bg-gradient-to-r from-gray-500 to-gray-600 text-white';
            default:
                return 'bg-gray-500 text-white';
        }
    };

    const getRatingCategoryLabel = (category: string) => {
        switch (category) {
            case 'excellent':
                return 'Excellent (4.5+)';
            case 'good':
                return 'Good (4.0-4.4)';
            case 'average':
                return 'Average (3.5-3.9)';
            case 'basic':
                return 'Basic (<3.5)';
            default:
                return 'Unknown';
        }
    };

    const filteredInstitutions = institutions.filter(institution => {
        const matchesSearch = institution.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             institution.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || institution.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const groupedInstitutions = filteredInstitutions.reduce((acc, institution) => {
        const category = getRatingCategory(institution.rating);
        if (!acc[category]) {
            acc[category] = [];
        }
        acc[category].push(institution);
        return acc;
    }, {} as Record<string, Institution[]>);

    const canAccessInstitution = (institution: Institution) => {
        if (isPremiumUser) return true;
        return !institution.isPremium;
    };

    const handleWhatsApp = (institution: Institution) => {
        const message = encodeURIComponent(`Halo, saya tertarik dengan lembaga ${institution.name}. Bisa info lebih lanjut?`);
        const whatsappUrl = `https://wa.me/${institution.phone.replace(/\D/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <GuestLayout
            title="Katalog Lembaga - Pare EDUHUB"
            description="Temukan lembaga pelatihan terbaik yang dikelompokkan berdasarkan rating dan kualitas."
            keywords="lembaga pelatihan, katalog lembaga, rating lembaga, premium lembaga"
        >
            {/* Header Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Katalog Lembaga</h1>
                        <p className="text-xl text-primary-foreground/90">
                            Temukan lembaga pelatihan terbaik yang dikelompokkan berdasarkan rating dan kualitas
                        </p>
                        {!isPremiumUser && (
                            <div className="mt-6 p-4 bg-white/10 rounded-lg">
                                <div className="flex items-center justify-center gap-2">
                                    <Lock className="w-5 h-5" />
                                    <span>Akses terbatas untuk user gratis. Upgrade ke Premium untuk akses penuh!</span>
                                </div>
                            </div>
                        )}
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
                                placeholder="Cari lembaga..."
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
                                <SelectItem value="all">Semua Kategori</SelectItem>
                                <SelectItem value="premium">Premium</SelectItem>
                                <SelectItem value="standard">Standard</SelectItem>
                                <SelectItem value="basic">Basic</SelectItem>
                            </SelectContent>
                        </Select>
                        <Button 
                            variant="outline" 
                            onClick={() => setIsPremiumUser(!isPremiumUser)}
                            className="flex items-center gap-2"
                        >
                            {isPremiumUser ? <Crown className="w-4 h-4" /> : <Lock className="w-4 h-4" />}
                            {isPremiumUser ? 'Premium User' : 'Free User'}
                        </Button>
                    </div>
                </div>
            </section>

            {/* Institutions by Rating Category */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    {Object.entries(groupedInstitutions).map(([category, institutionsList]) => (
                        <div key={category} className="mb-16">
                            <div className="flex items-center gap-4 mb-8">
                                <Badge className={getRatingCategoryColor(category)}>
                                    {getRatingCategoryLabel(category)}
                                </Badge>
                                <h2 className="text-2xl font-bold text-foreground">
                                    {institutionsList.length} Lembaga
                                </h2>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {institutionsList.map((institution) => (
                                    <Card key={institution.id} className="overflow-hidden transition-transform hover:scale-105">
                                        <div className="relative p-6">
                                            {!canAccessInstitution(institution) && (
                                                <div className="absolute inset-0 bg-black/50 flex items-center justify-center z-10 rounded-lg">
                                                    <div className="text-center text-white">
                                                        <Lock className="w-8 h-8 mx-auto mb-2" />
                                                        <p className="text-sm">Akses Premium</p>
                                                    </div>
                                                </div>
                                            )}
                                            
                                            <div className="flex items-center gap-4 mb-4">
                                                <img src={institution.logo} alt={institution.name} className="w-16 h-16 rounded-lg object-cover" />
                                                <div className="flex-1">
                                                    <h3 className="text-lg font-semibold text-foreground">{institution.name}</h3>
                                                    <Badge className={getCategoryColor(institution.category)}>
                                                        {institution.category === 'premium' ? 'Premium' : 
                                                         institution.category === 'standard' ? 'Standard' : 'Basic'}
                                                    </Badge>
                                                </div>
                                            </div>
                                            
                                            <p className="text-sm text-muted-foreground mb-4">{institution.description}</p>
                                            
                                            <div className="flex items-center justify-between mb-4">
                                                <div className="flex items-center gap-1">
                                                    <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                    <span className="text-sm font-medium">{institution.rating}</span>
                                                    <span className="text-sm text-muted-foreground">({institution.reviews} ulasan)</span>
                                                </div>
                                                {institution.isPremium && (
                                                    <Crown className="w-4 h-4 text-yellow-500" />
                                                )}
                                            </div>
                                            
                                            <div className="space-y-2 text-sm text-muted-foreground">
                                                <div className="flex items-center gap-2">
                                                    <Phone className="w-4 h-4" />
                                                    <span>{institution.phone}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Mail className="w-4 h-4" />
                                                    <span>{institution.email}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <MapPin className="w-4 h-4" />
                                                    <span className="truncate">{institution.address}</span>
                                                </div>
                                                <div className="flex items-center gap-2">
                                                    <Globe className="w-4 h-4" />
                                                    <a href={institution.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                                                        {institution.website}
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="p-4 border-t">
                                            <div className="flex gap-2">
                                                <Button 
                                                    className="flex-1" 
                                                    disabled={!canAccessInstitution(institution)}
                                                >
                                                    Lihat Detail
                                                </Button>
                                                <Button 
                                                    variant="outline" 
                                                    size="sm"
                                                    onClick={() => handleWhatsApp(institution)}
                                                    disabled={!canAccessInstitution(institution)}
                                                >
                                                    💬 WA
                                                </Button>
                                            </div>
                                        </div>
                                    </Card>
                                ))}
                            </div>
                        </div>
                    ))}
                    
                    {Object.keys(groupedInstitutions).length === 0 && (
                        <div className="text-center py-16">
                            <Building2 className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">Tidak ada lembaga ditemukan</h3>
                            <p className="text-gray-500">Coba ubah filter pencarian Anda</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Upgrade CTA Section */}
            {!isPremiumUser && (
                <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16 text-white">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="mb-4 text-3xl font-bold">Upgrade ke Premium</h2>
                        <p className="mb-8 text-xl">
                            Dapatkan akses penuh ke semua lembaga premium dan fitur eksklusif lainnya
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                                <Crown className="mr-2 w-5 h-5" />
                                Upgrade Sekarang
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                                Pelajari Lebih Lanjut
                            </Button>
                        </div>
                    </div>
                </section>
            )}
        </GuestLayout>
    );
};

export default Institutions;