import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardFooter, CardHeader } from '@/components/ui/card';
import GuestLayout from '@/layouts/guest-layout';
import { ArrowRight, Award, BookOpen, MessageSquare, PlayCircle, Star, Users, Zap } from 'lucide-react';
import React from 'react';
import { HeroSection, Section, SectionHeader, heroStyles, sectionStyles, cardStyles, featureStyles, testimonialStyles } from '@/components/ui/style-guide';

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

const Welcome: React.FC = () => {
    // --- Data Statis (Contoh) ---
    const NAMA_LEMBAGA = 'Pare EDUHUB'; // Nama perusahaan yang benar

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
            <HeroSection>
                {/* Logo */}
                <div className={heroStyles.logo}>
                    <img src="/logo.png" alt={`${NAMA_LEMBAGA} Logo`} className={heroStyles.logoImage} />
                </div>
                <h1 className={heroStyles.title}>
                    Belajar Skill Digital
                    <span className={heroStyles.subtitle}>Untuk Masa Depan</span>
                </h1>
                <p className={heroStyles.description}>
                    Platform pembelajaran online terpercaya dengan ribuan kursus berkualitas dari para ahli di bidangnya.
                </p>
                <div className={heroStyles.actions}>
                    <Button size="lg" className={heroStyles.primaryButton}>
                        Mulai Belajar Gratis
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className={heroStyles.secondaryButton}
                    >
                        <PlayCircle className="mr-2 h-5 w-5" /> Lihat Demo
                    </Button>
                </div>
            </HeroSection>

            {/* Features Section */}
            <Section>
                <SectionHeader 
                    title={`Mengapa Memilih ${NAMA_LEMBAGA}?`}
                    subtitle="Kami berkomitmen memberikan pengalaman belajar terbaik dengan berbagai fitur unggulan."
                />
                <div className={sectionStyles.grid4}>
                    {features.map((feature, index) => (
                        <div key={index} className={featureStyles.container}>
                            <div className={featureStyles.icon}>
                                {feature.icon}
                            </div>
                            <h3 className={featureStyles.title}>{feature.title}</h3>
                            <p className={featureStyles.description}>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </Section>

            {/* Pro Courses Section */}
            <Section className="bg-muted/50">
                <SectionHeader 
                    title="Kursus Pro Terpopuler"
                    subtitle="Tingkatkan skill Anda dengan kursus premium yang dirancang oleh para ahli."
                />
                <div className={sectionStyles.grid}>
                    {proCourses.map((course) => (
                        <Card key={course.id} className={cardStyles.container}>
                            <div className="relative">
                                <img src={course.thumbnail} alt={course.title} className={cardStyles.image} />
                                <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground">PRO</Badge>
                            </div>
                            <CardHeader className={cardStyles.content}>
                                <div className={cardStyles.header}>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary">{course.category}</Badge>
                                        <div className={cardStyles.rating}>
                                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>
                                    </div>
                                    <h3 className={cardStyles.title}>{course.title}</h3>
                                    <p className={cardStyles.description}>{course.description}</p>
                                </div>
                            </CardHeader>
                            <CardFooter className={cardStyles.footer}>
                                <div className={cardStyles.rating}>
                                    <Users className="mr-1 h-4 w-4" />
                                    {course.students.toLocaleString()} siswa
                                </div>
                                <div className={cardStyles.price}>Rp {course.price.toLocaleString()}</div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Free Courses Section */}
            <Section>
                <SectionHeader 
                    title="Mulai Gratis"
                    subtitle="Tidak perlu khawatir tentang biaya. Mulai belajar dengan kursus gratis kami."
                />
                <div className={sectionStyles.grid}>
                    {freeCourses.map((course) => (
                        <Card key={course.id} className={cardStyles.container}>
                            <div className="relative">
                                <img src={course.thumbnail} alt={course.title} className={cardStyles.image} />
                                <Badge className="absolute top-2 right-2 bg-green-500 text-white">GRATIS</Badge>
                            </div>
                            <CardHeader className={cardStyles.content}>
                                <div className={cardStyles.header}>
                                    <div className="flex items-center justify-between">
                                        <Badge variant="secondary">{course.category}</Badge>
                                        <div className={cardStyles.rating}>
                                            <Star className="mr-1 h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            {course.rating}
                                        </div>
                                    </div>
                                    <h3 className={cardStyles.title}>{course.title}</h3>
                                    <p className={cardStyles.description}>{course.description}</p>
                                </div>
                            </CardHeader>
                            <CardFooter className={cardStyles.footer}>
                                <div className={cardStyles.rating}>
                                    <Users className="mr-1 h-4 w-4" />
                                    {course.students.toLocaleString()} siswa
                                </div>
                                <div className="text-lg font-bold text-green-600">Gratis</div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* Testimonials Section */}
            <Section className="bg-muted/50">
                <SectionHeader 
                    title="Apa Kata Mereka?"
                    subtitle={`Ribuan siswa telah merasakan manfaat belajar di ${NAMA_LEMBAGA}.`}
                />
                <div className={sectionStyles.grid}>
                    {reviews.map((review) => (
                        <Card key={review.id} className={testimonialStyles.container}>
                            <div className={testimonialStyles.header}>
                                <Avatar className={testimonialStyles.avatar}>
                                    <AvatarImage src={review.avatar} alt={review.name} />
                                    <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div className={testimonialStyles.info}>
                                    <h4 className={testimonialStyles.name}>{review.name}</h4>
                                    <p className={testimonialStyles.role}>{review.role}</p>
                                </div>
                            </div>
                            <div className={testimonialStyles.rating}>
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className={`h-4 w-4 ${i < review.rating ? 'fill-yellow-400 text-yellow-400' : 'text-muted-foreground'}`}
                                    />
                                ))}
                            </div>
                            <p className={testimonialStyles.comment}>{review.comment}</p>
                        </Card>
                    ))}
                </div>
            </Section>

            {/* FAQ Section */}
            <Section>
                <SectionHeader 
                    title="Pertanyaan yang Sering Diajukan"
                    subtitle="Temukan jawaban untuk pertanyaan umum seputar platform kami."
                />
                <div className="mx-auto max-w-4xl">
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="border-border">
                                <AccordionTrigger className="text-left text-foreground hover:no-underline">{faq.question}</AccordionTrigger>
                                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </Section>

            {/* CTA Section */}
            <HeroSection className="bg-primary text-white">
                <h2 className={heroStyles.title}>Siap Memulai Perjalanan Belajar Anda?</h2>
                <p className={heroStyles.description}>
                    Bergabunglah dengan ribuan pelajar lainnya dan mulai bangun masa depan tech Anda hari ini.
                </p>
                <div className={heroStyles.actions}>
                    <Button size="lg" className={heroStyles.primaryButton}>
                        Daftar Sekarang
                        <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                    <Button
                        size="lg"
                        variant="outline"
                        className={heroStyles.secondaryButton}
                    >
                        <MessageSquare className="mr-2 h-5 w-5" /> Hubungi Kami
                    </Button>
                </div>
            </HeroSection>
        </GuestLayout>
    );
};

export default Welcome;
