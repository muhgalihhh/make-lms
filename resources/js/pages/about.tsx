import GuestLayout from '@/layouts/guest-layout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
    Award, 
    BookOpen, 
    CheckCircle, 
    Globe, 
    Heart, 
    Lightbulb, 
    Target, 
    Users, 
    Zap 
} from 'lucide-react';
import React from 'react';

const AboutPage: React.FC = () => {
    const stats = [
        { label: 'Siswa Aktif', value: '50,000+', icon: <Users className="h-6 w-6" /> },
        { label: 'Kursus Tersedia', value: '500+', icon: <BookOpen className="h-6 w-6" /> },
        { label: 'Instruktur Ahli', value: '100+', icon: <Award className="h-6 w-6" /> },
        { label: 'Negara', value: '25+', icon: <Globe className="h-6 w-6" /> },
    ];

    const values = [
        {
            icon: <Target className="h-8 w-8" />,
            title: 'Misi Kami',
            description: 'Memberikan akses pendidikan teknologi berkualitas tinggi kepada semua orang, di mana saja dan kapan saja.',
        },
        {
            icon: <Lightbulb className="h-8 w-8" />,
            title: 'Visi Kami',
            description: 'Menjadi platform pembelajaran online terdepan yang menginspirasi dan memberdayakan generasi digital.',
        },
        {
            icon: <Heart className="h-8 w-8" />,
            title: 'Nilai-Nilai',
            description: 'Integritas, inovasi, kolaborasi, dan komitmen terhadap kesuksesan setiap siswa.',
        },
    ];

    const team = [
        {
            name: 'Ahmad Rizki',
            role: 'CEO & Founder',
            avatar: 'https://via.placeholder.com/150x150',
            bio: 'Pengembang software dengan pengalaman 10+ tahun di industri teknologi.',
        },
        {
            name: 'Sarah Johnson',
            role: 'Head of Education',
            avatar: 'https://via.placeholder.com/150x150',
            bio: 'Ahli pendidikan dengan passion untuk membuat pembelajaran yang menyenangkan.',
        },
        {
            name: 'Maria Garcia',
            role: 'Lead Instructor',
            avatar: 'https://via.placeholder.com/150x150',
            bio: 'Instruktur berpengalaman dengan spesialisasi dalam web development.',
        },
    ];

    const achievements = [
        'Platform pembelajaran terbaik 2023',
        'Sertifikasi ISO 27001 untuk keamanan data',
        'Partner resmi Google Developer Groups',
        'Award untuk inovasi pendidikan digital',
    ];

    return (
        <GuestLayout
            title="Tentang Kami - AkademiKoding"
            description="Pelajari lebih lanjut tentang AkademiKoding, misi kami dalam pendidikan teknologi, dan tim yang berdedikasi untuk kesuksesan Anda."
            keywords="tentang, visi, misi, tim, perusahaan, pendidikan, teknologi"
        >
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-primary via-primary/90 to-primary/80 py-20 text-white">
                <div className="absolute inset-0 bg-black/20" />
                <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-6 text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl">
                            Tentang
                            <span className="block text-primary-foreground">AkademiKoding</span>
                        </h1>
                        <p className="mb-8 text-xl text-primary-foreground/90 sm:text-2xl">
                            Platform pembelajaran online terpercaya yang telah membantu ribuan orang mengembangkan skill digital mereka.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                    {stat.icon}
                                </div>
                                <div className="text-3xl font-bold text-gray-900">{stat.value}</div>
                                <div className="text-sm text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Visi, Misi & Nilai-Nilai
                        </h2>
                        <p className="text-lg text-gray-600">
                            Fondasi yang membimbing setiap langkah kami dalam memberikan pendidikan terbaik.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {values.map((value, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                                        {value.icon}
                                    </div>
                                    <h3 className="text-xl font-semibold">{value.title}</h3>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{value.description}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team Section */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Tim Kami
                        </h2>
                        <p className="text-lg text-gray-600">
                            Bertemu dengan para ahli yang berdedikasi untuk kesuksesan Anda.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
                        {team.map((member, index) => (
                            <Card key={index} className="text-center">
                                <CardHeader>
                                    <img
                                        src={member.avatar}
                                        alt={member.name}
                                        className="mx-auto mb-4 h-32 w-32 rounded-full object-cover"
                                    />
                                    <h3 className="text-xl font-semibold">{member.name}</h3>
                                    <Badge variant="secondary">{member.role}</Badge>
                                </CardHeader>
                                <CardContent>
                                    <p className="text-gray-600">{member.bio}</p>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Achievements Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="mb-4 text-3xl font-bold text-gray-900 sm:text-4xl">
                            Pencapaian Kami
                        </h2>
                        <p className="text-lg text-gray-600">
                            Pengakuan dan sertifikasi yang membuktikan komitmen kami terhadap kualitas.
                        </p>
                    </div>
                    <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
                        {achievements.map((achievement, index) => (
                            <div key={index} className="flex items-center space-x-3 rounded-lg bg-white p-4 shadow-sm">
                                <CheckCircle className="h-6 w-6 text-green-500" />
                                <span className="text-gray-700">{achievement}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="bg-primary py-16 text-white">
                <div className="container mx-auto px-4 text-center sm:px-6 lg:px-8">
                    <h2 className="mb-4 text-3xl font-bold sm:text-4xl">
                        Bergabunglah dengan Kami
                    </h2>
                    <p className="mb-8 text-xl text-primary-foreground/90">
                        Mulai perjalanan belajar Anda bersama ribuan siswa lainnya.
                    </p>
                    <div className="flex flex-col justify-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
                        <Button size="lg" className="bg-white text-primary hover:bg-gray-100">
                            Mulai Belajar
                            <Zap className="ml-2 h-5 w-5" />
                        </Button>
                        <Button
                            size="lg"
                            variant="outline"
                            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
                        >
                            Hubungi Kami
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default AboutPage;