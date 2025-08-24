import GuestLayout from '@/layouts/guest-layout';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { ArrowRight, Award, BookOpen, CloudSun, Eye, LifeBuoy, Lock, MessageSquare, PlayCircle, Star, Users, Zap } from 'lucide-react';
import React from 'react';

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

interface Review {
    id: number;
    name: string;
    role: string;
    avatar: string;
    comment: string;
    rating: number;
}

const WelcomeWithLayout: React.FC = () => {
    // --- Data Statis (Contoh) ---
    const NAMA_LEMBAGA = 'Akademi Koding Pro'; // Ganti dengan nama lembaga Anda

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

    return (
        <GuestLayout
            title={`${NAMA_LEMBAGA} - Platform Pembelajaran Online Terpercaya`}
            description="Belajar coding, design, dan skill digital lainnya dengan ribuan kursus berkualitas dari para ahli. Mulai karir tech Anda hari ini!"
            keywords="coding, programming, web development, design, online course, tutorial, laravel, react, javascript, php"
        >
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 text-white dark:from-primary/90 dark:via-primary/80 dark:to-primary/70">
                <div className="absolute inset-0 bg-black/20 dark:bg-black/30" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Belajar Skill Digital
                            <span className="block text-primary-foreground">Untuk Masa Depan</span>
                        </h1>
                        <p className="mb-8 text-xl text-primary-foreground/90 sm:text-2xl">
                            Platform pembelajaran online terpercaya dengan ribuan kursus berkualitas dari para ahli di bidangnya.
                        </p>
                        <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 dark:bg-white dark:text-primary dark:hover:bg-gray-100">
                                Mulai Belajar Gratis
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                            <Button
                                size="lg"
                                variant="outline"
                                className="border-primary-foreground px-8 py-6 text-lg text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
                            >
                                <PlayCircle className="mr-2 h-5 w-5" /> Lihat Demo
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Mengapa Memilih {NAMA_LEMBAGA}?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Kami berkomitmen memberikan pengalaman belajar terbaik dengan berbagai fitur unggulan.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {features.map((feature, index) => (
                            <div key={index} className="text-center">
                                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    {feature.icon}
                                </div>
                                <h3 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">{feature.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pro Courses Section */}
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Kursus Pro Terpopuler
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Tingkatkan skill Anda dengan kursus premium yang dirancang oleh para ahli.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {proCourses.map((course) => (
                            <Card key={course.id} className="overflow-hidden transition-transform hover:scale-105 dark:bg-gray-700 dark:border-gray-600">
                                <div className="relative">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="h-48 w-full object-cover"
                                    />
                                    <Badge className="absolute right-2 top-2 bg-primary text-primary-foreground">
                                        PRO
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary">{course.category}</Badge>
                                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold dark:text-white">{course.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{course.description}</p>
                                </CardHeader>
                                <CardFooter className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                        <Users className="mr-1 h-4 w-4" />
                                        {course.students.toLocaleString()} siswa
                                    </div>
                                    <div className="text-lg font-bold text-primary">
                                        Rp {course.price.toLocaleString()}
                                    </div>
                                </CardFooter>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Free Courses Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Mulai Gratis
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Tidak perlu khawatir tentang biaya. Mulai belajar dengan kursus gratis kami.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {freeCourses.map((course) => (
                            <Card key={course.id} className="overflow-hidden transition-transform hover:scale-105 dark:bg-gray-700 dark:border-gray-600">
                                <div className="relative">
                                    <img
                                        src={course.thumbnail}
                                        alt={course.title}
                                        className="h-48 w-full object-cover"
                                    />
                                    <Badge className="absolute right-2 top-2 bg-green-500 text-white">
                                        GRATIS
                                    </Badge>
                                </div>
                                <CardHeader>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary">{course.category}</Badge>
                                        <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
                                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>
                                    </div>
                                    <h3 className="text-lg font-semibold dark:text-white">{course.title}</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300">{course.description}</p>
                                </CardHeader>
                                <CardFooter className="flex items-center justify-between">
                                    <div className="flex items-center text-sm text-gray-600 dark:text-gray-300">
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
            <section className="bg-gray-50 dark:bg-gray-800 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Apa Kata Mereka?
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Ribuan siswa telah merasakan manfaat belajar di {NAMA_LEMBAGA}.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {reviews.map((review) => (
                            <Card key={review.id} className="p-6 dark:bg-gray-700 dark:border-gray-600">
                                <div className="mb-4 flex items-center">
                                    <Avatar className="mr-3">
                                        <AvatarImage src={review.avatar} alt={review.name} />
                                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <div>
                                        <h4 className="font-semibold dark:text-white">{review.name}</h4>
                                        <p className="text-sm text-gray-600 dark:text-gray-300">{review.role}</p>
                                    </div>
                                </div>
                                <div className="mb-3 flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${
                                                i < review.rating
                                                    ? 'fill-yellow-400 text-yellow-400'
                                                    : 'text-gray-300 dark:text-gray-600'
                                            }`}
                                        />
                                    ))}
                                </div>
                                <p className="text-gray-600 dark:text-gray-300">{review.comment}</p>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white sm:text-4xl">
                            Pertanyaan yang Sering Diajukan
                        </h2>
                        <p className="text-lg text-gray-600 dark:text-gray-300">
                            Temukan jawaban untuk pertanyaan umum seputar platform kami.
                        </p>
                    </div>
                    <div className="mx-auto mt-12 max-w-4xl">
                        <Accordion type="single" collapsible className="w-full">
                            {faqs.map((faq, index) => (
                                <AccordionItem key={index} value={`item-${index}`} className="border-gray-200 dark:border-gray-700">
                                    <AccordionTrigger className="text-left dark:text-white hover:no-underline">
                                        {faq.question}
                                    </AccordionTrigger>
                                    <AccordionContent className="text-gray-600 dark:text-gray-300">
                                        {faq.answer}
                                    </AccordionContent>
                                </AccordionItem>
                            ))}
                        </Accordion>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 text-white dark:bg-primary/90">
                <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                        Siap Memulai Perjalanan Belajar Anda?
                    </h2>
                    <p className="mb-8 text-xl text-primary-foreground/90">
                        Bergabunglah dengan ribuan pelajar lainnya dan mulai bangun masa depan tech Anda hari ini.
                    </p>
                    <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100 dark:bg-white dark:text-primary dark:hover:bg-gray-100">
                            Daftar Sekarang
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary-foreground px-8 py-6 text-lg text-primary-foreground hover:bg-primary-foreground hover:text-primary dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-primary"
                        >
                            <MessageSquare className="mr-2 h-5 w-5" /> Hubungi Kami
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default WelcomeWithLayout;