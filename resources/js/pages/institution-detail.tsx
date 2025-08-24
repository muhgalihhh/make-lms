import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Progress } from '@/components/ui/progress';
import GuestLayout from '@/layouts/guest-layout';
import { 
    Building2, 
    Star, 
    Users, 
    Phone, 
    Mail, 
    Globe, 
    MapPin, 
    Clock,
    Award,
    BookOpen,
    MessageSquare,
    ExternalLink,
    Calendar,
    CheckCircle,
    ArrowRight,
    Heart,
    Share2,
    Download,
    Video,
    FileText
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
    banner: string;
    isPremium: boolean;
    foundedYear: number;
    totalStudents: number;
    totalCourses: number;
    operatingHours: string;
    socialMedia: {
        facebook?: string;
        instagram?: string;
        linkedin?: string;
        youtube?: string;
    };
    facilities: string[];
    programs: Program[];
    reviews: Review[];
    achievements: Achievement[];
}

interface Program {
    id: number;
    title: string;
    category: string;
    duration: string;
    price: number;
    originalPrice?: number;
    description: string;
    thumbnail: string;
    isPopular?: boolean;
    isNew?: boolean;
}

interface Review {
    id: number;
    name: string;
    avatar: string;
    rating: number;
    comment: string;
    date: string;
    program?: string;
}

interface Achievement {
    id: number;
    title: string;
    description: string;
    year: number;
    icon: string;
}

const InstitutionDetail: React.FC = () => {
    const [isPremiumUser, setIsPremiumUser] = useState(false);

    // Simulasi data lembaga
    const institution: Institution = {
        id: 1,
        name: 'Tech Academy Indonesia',
        phone: '+62 21 1234 5678',
        email: 'info@techacademy.id',
        address: 'Jl. Sudirman No. 123, Jakarta Pusat, DKI Jakarta 12190',
        website: 'https://techacademy.id',
        rating: 4.9,
        reviews: 1250,
        category: 'premium',
        description: 'Tech Academy Indonesia adalah lembaga pelatihan teknologi terkemuka yang berfokus pada pengembangan skill digital untuk karir di era teknologi. Dengan pengalaman lebih dari 5 tahun, kami telah melatih ribuan profesional yang sukses di berbagai perusahaan teknologi terkemuka.',
        logo: 'https://via.placeholder.com/120x120',
        banner: 'https://via.placeholder.com/1200x400',
        isPremium: true,
        foundedYear: 2019,
        totalStudents: 15000,
        totalCourses: 45,
        operatingHours: 'Senin - Jumat: 08:00 - 20:00, Sabtu: 09:00 - 17:00',
        socialMedia: {
            facebook: 'https://facebook.com/techacademyid',
            instagram: 'https://instagram.com/techacademyid',
            linkedin: 'https://linkedin.com/company/techacademyid',
            youtube: 'https://youtube.com/techacademyid'
        },
        facilities: [
            'Lab komputer modern',
            'Ruang meeting',
            'Cafeteria',
            'Parkir luas',
            'WiFi gratis',
            'Library digital',
            'Mentoring room',
            'Project showcase area'
        ],
        programs: [
            {
                id: 1,
                title: 'Full-Stack Web Development',
                category: 'Web Development',
                duration: '6 bulan',
                price: 8500000,
                originalPrice: 12000000,
                description: 'Program komprehensif untuk menjadi full-stack developer profesional.',
                thumbnail: 'https://via.placeholder.com/300x180',
                isPopular: true
            },
            {
                id: 2,
                title: 'UI/UX Design Mastery',
                category: 'Design',
                duration: '4 bulan',
                price: 6500000,
                originalPrice: 9000000,
                description: 'Pelajari desain antarmuka dan pengalaman pengguna dari dasar hingga advanced.',
                thumbnail: 'https://via.placeholder.com/300x180',
                isNew: true
            },
            {
                id: 3,
                title: 'Data Science Bootcamp',
                category: 'Data Science',
                duration: '5 bulan',
                price: 7500000,
                originalPrice: 11000000,
                description: 'Bootcamp intensif untuk menjadi data scientist profesional.',
                thumbnail: 'https://via.placeholder.com/300x180'
            }
        ],
        reviews: [
            {
                id: 1,
                name: 'Sarah Johnson',
                avatar: 'https://via.placeholder.com/40x40',
                rating: 5,
                comment: 'Program Full-Stack Web Development sangat membantu karir saya. Mentornya sangat berpengalaman dan materi yang disampaikan sangat praktis.',
                date: '2024-11-15',
                program: 'Full-Stack Web Development'
            },
            {
                id: 2,
                name: 'Ahmad Rizki',
                avatar: 'https://via.placeholder.com/40x40',
                rating: 5,
                comment: 'Fasilitas yang sangat lengkap dan modern. Staff sangat ramah dan membantu. Highly recommended!',
                date: '2024-11-10',
                program: 'UI/UX Design Mastery'
            },
            {
                id: 3,
                name: 'Maria Garcia',
                avatar: 'https://via.placeholder.com/40x40',
                rating: 4,
                comment: 'Kualitas pembelajaran sangat bagus. Hanya perlu perbaikan pada jadwal yang kadang berubah.',
                date: '2024-11-05',
                program: 'Data Science Bootcamp'
            }
        ],
        achievements: [
            {
                id: 1,
                title: 'Best Tech Academy 2023',
                description: 'Penghargaan dari Kementerian Pendidikan untuk lembaga pelatihan teknologi terbaik',
                year: 2023,
                icon: '🏆'
            },
            {
                id: 2,
                title: '15,000+ Alumni',
                description: 'Telah melatih lebih dari 15,000 profesional yang tersebar di berbagai perusahaan',
                year: 2024,
                icon: '👥'
            },
            {
                id: 3,
                title: '95% Job Placement',
                description: 'Tingkat penempatan kerja alumni mencapai 95% dalam 6 bulan setelah lulus',
                year: 2024,
                icon: '💼'
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

    const handleWhatsApp = () => {
        const message = encodeURIComponent(`Halo, saya tertarik dengan program di ${institution.name}. Bisa info lebih lanjut?`);
        const whatsappUrl = `https://wa.me/${institution.phone.replace(/\D/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const handleCall = () => {
        window.open(`tel:${institution.phone}`, '_self');
    };

    const handleEmail = () => {
        window.open(`mailto:${institution.email}`, '_self');
    };

    return (
        <GuestLayout
            title={`${institution.name} - Detail Lembaga`}
            description={`Informasi lengkap tentang ${institution.name}. Program, fasilitas, dan ulasan dari alumni.`}
            keywords={`${institution.name}, lembaga pelatihan, program teknologi, review lembaga`}
        >
            {/* Hero Section */}
            <section className="relative">
                <img src={institution.banner} alt={institution.name} className="w-full h-64 object-cover" />
                <div className="absolute inset-0 bg-black/50" />
                <div className="absolute inset-0 flex items-center">
                    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center gap-6">
                            <img src={institution.logo} alt={`${institution.name} Logo`} className="w-24 h-24 rounded-lg object-cover" />
                            <div className="text-white">
                                <h1 className="text-3xl font-bold mb-2">{institution.name}</h1>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-1">
                                        <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                                        <span className="font-semibold">{institution.rating}</span>
                                        <span className="text-gray-300">({institution.reviews} ulasan)</span>
                                    </div>
                                    <Badge className={getCategoryColor(institution.category)}>
                                        {institution.category === 'premium' ? 'Premium' : 
                                         institution.category === 'standard' ? 'Standard' : 'Basic'}
                                    </Badge>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content */}
            <section className="py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Main Content */}
                        <div className="lg:col-span-2">
                            <Tabs defaultValue="overview" className="w-full">
                                <TabsList className="grid w-full grid-cols-4">
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                    <TabsTrigger value="programs">Program</TabsTrigger>
                                    <TabsTrigger value="reviews">Ulasan</TabsTrigger>
                                    <TabsTrigger value="achievements">Pencapaian</TabsTrigger>
                                </TabsList>
                                
                                <TabsContent value="overview" className="space-y-6">
                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Tentang Kami</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <p className="text-muted-foreground leading-relaxed">
                                                {institution.description}
                                            </p>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Statistik</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-primary">{institution.foundedYear}</div>
                                                    <div className="text-sm text-muted-foreground">Tahun Berdiri</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-primary">{institution.totalStudents.toLocaleString()}</div>
                                                    <div className="text-sm text-muted-foreground">Total Alumni</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-primary">{institution.totalCourses}</div>
                                                    <div className="text-sm text-muted-foreground">Program Aktif</div>
                                                </div>
                                                <div className="text-center">
                                                    <div className="text-3xl font-bold text-primary">{institution.rating}</div>
                                                    <div className="text-sm text-muted-foreground">Rating</div>
                                                </div>
                                            </div>
                                        </CardContent>
                                    </Card>

                                    <Card>
                                        <CardHeader>
                                            <CardTitle>Fasilitas</CardTitle>
                                        </CardHeader>
                                        <CardContent>
                                            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                                {institution.facilities.map((facility, index) => (
                                                    <div key={index} className="flex items-center gap-2">
                                                        <CheckCircle className="h-4 w-4 text-green-500" />
                                                        <span className="text-sm">{facility}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </CardContent>
                                    </Card>
                                </TabsContent>
                                
                                <TabsContent value="programs" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {institution.programs.map((program) => (
                                            <Card key={program.id} className="overflow-hidden">
                                                <div className="relative">
                                                    <img src={program.thumbnail} alt={program.title} className="h-48 w-full object-cover" />
                                                    <div className="absolute top-2 left-2 flex gap-2">
                                                        {program.isPopular && <Badge className="bg-orange-500 text-white">Populer</Badge>}
                                                        {program.isNew && <Badge className="bg-green-500 text-white">Baru</Badge>}
                                                    </div>
                                                    {program.originalPrice && (
                                                        <div className="absolute top-2 right-2">
                                                            <Badge className="bg-red-500 text-white">
                                                                {Math.round(((program.originalPrice - program.price) / program.originalPrice) * 100)}% OFF
                                                            </Badge>
                                                        </div>
                                                    )}
                                                </div>
                                                <CardHeader>
                                                    <div className="flex items-center justify-between mb-2">
                                                        <Badge variant="secondary">{program.category}</Badge>
                                                        <span className="text-sm text-muted-foreground">{program.duration}</span>
                                                    </div>
                                                    <CardTitle className="text-lg">{program.title}</CardTitle>
                                                    <p className="text-sm text-muted-foreground">{program.description}</p>
                                                </CardHeader>
                                                <CardContent>
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-2">
                                                            <span className="text-xl font-bold text-primary">
                                                                Rp {program.price.toLocaleString()}
                                                            </span>
                                                            {program.originalPrice && (
                                                                <span className="text-sm text-muted-foreground line-through">
                                                                    Rp {program.originalPrice.toLocaleString()}
                                                                </span>
                                                            )}
                                                        </div>
                                                        <Button size="sm">
                                                            <ArrowRight className="mr-2 h-4 w-4" />
                                                            Detail
                                                        </Button>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="reviews" className="space-y-6">
                                    <div className="space-y-4">
                                        {institution.reviews.map((review) => (
                                            <Card key={review.id}>
                                                <CardContent className="pt-6">
                                                    <div className="flex items-start gap-4">
                                                        <img src={review.avatar} alt={review.name} className="w-12 h-12 rounded-full object-cover" />
                                                        <div className="flex-1">
                                                            <div className="flex items-center justify-between mb-2">
                                                                <div>
                                                                    <h4 className="font-semibold">{review.name}</h4>
                                                                    {review.program && (
                                                                        <p className="text-sm text-muted-foreground">{review.program}</p>
                                                                    )}
                                                                </div>
                                                                <div className="flex items-center gap-1">
                                                                    {[...Array(5)].map((_, i) => (
                                                                        <Star
                                                                            key={i}
                                                                            className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                                                                        />
                                                                    ))}
                                                                </div>
                                                            </div>
                                                            <p className="text-muted-foreground mb-2">{review.comment}</p>
                                                            <p className="text-xs text-muted-foreground">{review.date}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                                
                                <TabsContent value="achievements" className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {institution.achievements.map((achievement) => (
                                            <Card key={achievement.id}>
                                                <CardContent className="pt-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className="text-4xl">{achievement.icon}</div>
                                                        <div>
                                                            <h4 className="font-semibold">{achievement.title}</h4>
                                                            <p className="text-sm text-muted-foreground mb-1">{achievement.description}</p>
                                                            <p className="text-xs text-muted-foreground">{achievement.year}</p>
                                                        </div>
                                                    </div>
                                                </CardContent>
                                            </Card>
                                        ))}
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>

                        {/* Sidebar */}
                        <div className="space-y-6">
                            {/* Contact Card */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Informasi Kontak</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-4">
                                    <div className="space-y-3">
                                        <div className="flex items-center gap-3">
                                            <Phone className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{institution.phone}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Mail className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{institution.email}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <MapPin className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{institution.address}</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Globe className="h-4 w-4 text-muted-foreground" />
                                            <a href={institution.website} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline">
                                                {institution.website}
                                            </a>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <Clock className="h-4 w-4 text-muted-foreground" />
                                            <span className="text-sm">{institution.operatingHours}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="space-y-3">
                                        <Button className="w-full" onClick={handleWhatsApp}>
                                            <MessageSquare className="mr-2 h-4 w-4" />
                                            Konsultasi WhatsApp
                                        </Button>
                                        <Button variant="outline" className="w-full" onClick={handleCall}>
                                            <Phone className="mr-2 h-4 w-4" />
                                            Telepon
                                        </Button>
                                        <Button variant="outline" className="w-full" onClick={handleEmail}>
                                            <Mail className="mr-2 h-4 w-4" />
                                            Email
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Social Media */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Media Sosial</CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <div className="space-y-3">
                                        {institution.socialMedia.facebook && (
                                            <a href={institution.socialMedia.facebook} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary">
                                                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center text-white">f</div>
                                                <span>Facebook</span>
                                            </a>
                                        )}
                                        {institution.socialMedia.instagram && (
                                            <a href={institution.socialMedia.instagram} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary">
                                                <div className="w-8 h-8 bg-pink-600 rounded flex items-center justify-center text-white">📷</div>
                                                <span>Instagram</span>
                                            </a>
                                        )}
                                        {institution.socialMedia.linkedin && (
                                            <a href={institution.socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary">
                                                <div className="w-8 h-8 bg-blue-700 rounded flex items-center justify-center text-white">in</div>
                                                <span>LinkedIn</span>
                                            </a>
                                        )}
                                        {institution.socialMedia.youtube && (
                                            <a href={institution.socialMedia.youtube} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-primary">
                                                <div className="w-8 h-8 bg-red-600 rounded flex items-center justify-center text-white">▶</div>
                                                <span>YouTube</span>
                                            </a>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>

                            {/* Quick Actions */}
                            <Card>
                                <CardHeader>
                                    <CardTitle>Aksi Cepat</CardTitle>
                                </CardHeader>
                                <CardContent className="space-y-3">
                                    <Button variant="outline" className="w-full">
                                        <Heart className="mr-2 h-4 w-4" />
                                        Simpan ke Favorit
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        <Share2 className="mr-2 h-4 w-4" />
                                        Bagikan
                                    </Button>
                                    <Button variant="outline" className="w-full">
                                        <Download className="mr-2 h-4 w-4" />
                                        Download Brosur
                                    </Button>
                                </CardContent>
                            </Card>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default InstitutionDetail;