import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import GuestLayout from '@/layouts/guest-layout';
import { ArrowRight, Award, BookOpen, MessageSquare, PlayCircle, Star, Users, Zap, Building2, Phone, Mail, Globe, MapPin } from 'lucide-react';
import React from 'react';
import WeatherWidget from '@/components/WeatherWidget';
import EmergencyHelp from '@/components/EmergencyHelp';
import TawkToChat from '@/components/TawkToChat';

// --- Tipe Data (sesuai migrasi) ---
interface Course {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    rating: number;
    students: number;
    price: number;
    isPro: boolean;
    description: string;
}

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

interface Review {
    id: number;
    name: string;
    role: string;
    avatar: string;
    comment: string;
    rating: number;
}

const Welcome: React.FC = () => {
    // --- Data Statis (Contoh) ---
    const NAMA_LEMBAGA = 'Pare EDUHUB'; // Nama perusahaan yang benar

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
            logo: 'https://via.placeholder.com/80x80'
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
            logo: 'https://via.placeholder.com/80x80'
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
            logo: 'https://via.placeholder.com/80x80'
        }
    ];

    const proCourses: Course[] = [
        {
            id: 1,
            title: 'Full-Stack Laravel & React Mastery',
            category: 'Web Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.9,
            students: 1342,
            price: 750000,
            isPro: true,
            description: 'Bangun aplikasi web modern dari awal hingga deployment.',
        },
        {
            id: 2,
            title: 'UI/UX Design for Modern Apps',
            category: 'Design',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.8,
            students: 876,
            price: 550000,
            isPro: true,
            description: 'Pelajari prinsip desain antarmuka yang intuitif dan menarik.',
        },
        {
            id: 5,
            title: 'Advanced DevOps with Kubernetes',
            category: 'DevOps',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.9,
            students: 950,
            price: 850000,
            isPro: true,
            description: 'Orkestrasi dan skalabilitas aplikasi tingkat lanjut.',
        },
    ];

    const freeCourses: Course[] = [
        {
            id: 3,
            title: 'Dasar-Dasar HTML & CSS',
            category: 'Web Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.7,
            students: 12503,
            price: 0,
            isPro: false,
            description: 'Pengenalan fundamental untuk memulai karir web development.',
        },
        {
            id: 4,
            title: 'Pengenalan Copywriting',
            category: 'Marketing',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.6,
            students: 9870,
            price: 0,
            isPro: false,
            description: 'Pelajari cara menulis teks iklan yang menjual dan efektif.',
        },
        {
            id: 6,
            title: 'Fundamental Git & GitHub',
            category: 'Tools',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.8,
            students: 15000,
            price: 0,
            isPro: false,
            description: 'Kontrol versi dan kolaborasi dalam pengembangan software.',
        },
    ];

    const reviews: Review[] = [
        {
            id: 1,
            name: 'Sarah Johnson',
            role: 'Frontend Developer',
            avatar: 'https://via.placeholder.com/40x40',
            comment: 'Kursus Laravel & React sangat membantu karir saya. Materi yang disampaikan sangat praktis dan mudah dipahami.',
            rating: 5,
        },
        {
            id: 2,
            name: 'Ahmad Rizki',
            role: 'UI/UX Designer',
            avatar: 'https://via.placeholder.com/40x40',
            comment: 'Platform yang sangat bagus untuk belajar design. Instruktur sangat berpengalaman dan responsive.',
            rating: 5,
        },
        {
            id: 3,
            name: 'Maria Garcia',
            role: 'DevOps Engineer',
            avatar: 'https://via.placeholder.com/40x40',
            comment: 'Kursus DevOps membantu saya memahami konsep deployment dan scaling dengan baik.',
            rating: 4,
        },
    ];

    const features = [
        {
            icon: <BookOpen className="h-6 w-6" />,
            title: 'Kursus Berkualitas',
            description: 'Ribuan kursus dari para ahli di bidangnya masing-masing.',
        },
        {
            icon: <Users className="h-6 w-6" />,
            title: 'Komunitas Aktif',
            description: 'Bergabung dengan ribuan pelajar dan developer lainnya.',
        },
        {
            icon: <Award className="h-6 w-6" />,
            title: 'Sertifikat Resmi',
            description: 'Dapatkan sertifikat yang diakui industri setelah menyelesaikan kursus.',
        },
        {
            icon: <Zap className="h-6 w-6" />,
            title: 'Belajar Fleksibel',
            description: 'Belajar kapan saja dan di mana saja sesuai jadwal Anda.',
        },
    ];

    const faqs = [
        {
            question: 'Apakah kursus gratis benar-benar gratis?',
            answer: 'Ya, semua kursus yang ditandai sebagai "Gratis" dapat diakses tanpa biaya sama sekali. Anda hanya perlu mendaftar akun untuk mulai belajar.',
        },
        {
            question: 'Berapa lama saya bisa mengakses kursus Pro?',
            answer: 'Setelah membeli kursus Pro, Anda memiliki akses seumur hidup ke materi kursus tersebut, termasuk update dan pembaruan konten.',
        },
        {
            question: 'Apakah ada jaminan uang kembali?',
            answer: 'Kami memberikan jaminan uang kembali 30 hari untuk semua kursus Pro. Jika Anda tidak puas, kami akan mengembalikan uang Anda.',
        },
        {
            question: 'Bagaimana cara mendapatkan sertifikat?',
            answer: 'Sertifikat akan otomatis tersedia setelah Anda menyelesaikan semua modul dan lulus ujian akhir dengan skor minimal 70%.',
        },
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

    return (
        <GuestLayout
            title={`${NAMA_LEMBAGA} - Platform Pembelajaran Online Terpercaya`}
            description="Belajar coding, design, dan skill digital lainnya dengan ribuan kursus berkualitas dari para ahli. Mulai karir tech Anda hari ini!"
            keywords="coding, programming, web development, design, online course, tutorial, laravel, react, javascript, php"
        >
            {/* Tawk.to Chat Integration */}
            <TawkToChat propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 text-white">
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        {/* Logo */}
                        <div className="mb-8 flex justify-center">
                            <img src="/logo.png" alt={`${NAMA_LEMBAGA} Logo`} className="h-16 w-auto" />
                        </div>
                        <h1 className="mb-6 text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl">
                            Belajar Skill Digital
                            <span className="block text-primary-foreground">Untuk Masa Depan</span>
                        </h1>
                        <p className="mb-8 text-xl text-primary-foreground/90 sm:text-2xl">
                            Platform pembelajaran online terpercaya dengan ribuan kursus berkualitas dari para ahli di bidangnya.
                        </p>
                        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                                Mulai Belajar Gratis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                            >
                                <PlayCircle className="mr-2 h-5 w-5" /> Lihat Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Weather Widget & Quick Actions */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        <div className="lg:col-span-2">
                            <div className="bg-white rounded-lg p-6 shadow-sm">
                                <h3 className="text-lg font-semibold mb-4">Akses Cepat</h3>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                                        <Building2 className="w-6 h-6" />
                                        <span className="text-sm">Katalog Lembaga</span>
                                    </Button>
                                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                                        <Award className="w-6 h-6" />
                                        <span className="text-sm">Kelas Pro</span>
                                    </Button>
                                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                                        <BookOpen className="w-6 h-6" />
                                        <span className="text-sm">Kelas Gratis</span>
                                    </Button>
                                    <Button variant="outline" className="h-auto p-4 flex flex-col items-center gap-2">
                                        <MessageSquare className="w-6 h-6" />
                                        <span className="text-sm">Katalog WA</span>
                                    </Button>
                                </div>
                            </div>
                        </div>
                        <div>
                            <WeatherWidget />
                        </div>
                    </div>
                </div>
            </section>

            {/* Top Institutions Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Lembaga Terpopuler</h2>
                        <p className="text-lg text-muted-foreground">Temukan lembaga pelatihan terbaik dengan rating tertinggi.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {institutions.map((institution) => (
                            <Card key={institution.id} className="overflow-hidden transition-transform hover:scale-105">
                                <div className="relative p-6">
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
                                <CardFooter className="flex gap-2">
                                    <Button className="flex-1">Lihat Detail</Button>
                                    <Button variant="outline" size="sm">💬 WA</Button>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Mengapa Memilih {NAMA_LEMBAGA}?</h2>
                        <p className="text-lg text-muted-foreground">
                            Kami berkomitmen memberikan pengalaman belajar terbaik dengan berbagai fitur unggulan.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-foreground">{feature.title}</h3>
                                <p className="text-muted-foreground">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pro Courses Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Kursus Pro Terpopuler</h2>
                        <p className="text-lg text-muted-foreground">Tingkatkan skill Anda dengan kursus premium yang dirancang oleh para ahli.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {proCourses.map((course) => (
                            <Card key={course.id} className="overflow-hidden transition-transform hover:scale-105">
                                <div className="relative">
                                    <img src={course.thumbnail} alt={course.title} className="h-48 w-full object-cover" />
                                    <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">PRO</Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary">{course.category}</Badge>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                                    <p className="text-sm text-muted-foreground">{course.description}</p>
                                </CardHeader>
                                <CardFooter className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Users className="mr-1 h-4 w-4" />
                                        {course.students.toLocaleString()} siswa
                                    </div>
                                    <div className="text-lg font-bold text-primary">Rp {course.price.toLocaleString()}</div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Courses Section */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Mulai Gratis</h2>
                        <p className="text-lg text-muted-foreground">Tidak perlu khawatir tentang biaya. Mulai belajar dengan kursus gratis kami.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {freeCourses.map((course) => (
                            <Card key={course.id} className="overflow-hidden transition-transform hover:scale-105">
                                <div className="relative">
                                    <img src={course.thumbnail} alt={course.title} className="h-48 w-full object-cover" />
                                    <Badge className="absolute top-2 right-2 bg-green-500 text-white">GRATIS</Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary">{course.category}</Badge>
                                        <div className="flex items-center text-sm text-muted-foreground">
                                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold text-foreground">{course.title}</h3>
                                    <p className="text-sm text-muted-foreground">{course.description}</p>
                                </CardHeader>
                                <CardFooter className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-muted-foreground">
                                        <Users className="mr-1 h-4 w-4" />
                                        {course.students.toLocaleString()} siswa
                                    </div>
                                    <div className="text-lg font-bold text-green-600">Gratis</div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Apa Kata Mereka?</h2>
                        <p className="text-lg text-muted-foreground">Ribuan siswa telah merasakan manfaat belajar di {NAMA_LEMBAGA}.</p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {reviews.map((review) => (
                            <Card key={review.id} className="p-6">
                                <div className="mb-4 flex items-center">
                                    <Avatar className="mr-3">
                                        <AvatarImage src={review.avatar} alt={review.name} />
                                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold text-foreground">{review.name}</h4>
                                        <p className="text-sm text-muted-foreground">{review.role}</p>
                                    </div>
                                </div>
                                <div className="mb-3 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                                        />
                                    ))}
                                </div>
                                <p className="text-muted-foreground">{review.comment}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency Help Section */}
            <section className="bg-muted/50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <EmergencyHelp />
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-foreground sm:text-4xl">Pertanyaan yang Sering Diajukan</h2>
                        <p className="text-lg text-muted-foreground">Temukan jawaban untuk pertanyaan umum seputar platform kami.</p>
                    </div>
                    <div className="mx-auto mt-12 max-w-4xl">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-border">
                                    <AccordionTrigger className="text-left text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                                    <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 text-white">
                <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">Siap Memulai Perjalanan Belajar Anda?</h2>
                    <p className="mb-8 text-xl text-primary-foreground/90">
                        Bergabunglah dengan ribuan pelajar lainnya dan mulai bangun masa depan tech Anda hari ini.
                    </p>
                    <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                            Daftar Sekarang
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                            <MessageSquare className="mr-2 h-5 w-5" /> Hubungi Kami
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default Welcome;
