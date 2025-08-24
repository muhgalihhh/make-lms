import EmergencyHelp from '@/components/EmergencyHelp';
import TawkToChat from '@/components/TawkToChat';
import WeatherWidget from '@/components/WeatherWidget';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import BaseLayout from '@/layouts/base-layout';
import { Award, BookOpen, Download, Globe, Mail, MapPin, Phone, Star, Users } from 'lucide-react';

interface Institution {
    id: number;
    name: string;
    description: string;
    phone: string;
    email: string;
    address: string;
    website: string;
    rating: number;
    review_count: number;
}

interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    is_pro: boolean;
    institution: Institution;
    category: {
        id: number;
        name: string;
    };
}

interface WelcomeProps {
    institutions: Institution[];
    proCourses: Course[];
    freeCourses: Course[];
}

export default function Welcome({ institutions, proCourses, freeCourses }: WelcomeProps) {
    const getRatingColor = (rating: number) => {
        if (rating >= 4.5) return 'bg-green-100 text-green-800';
        if (rating >= 4.0) return 'bg-blue-100 text-blue-800';
        if (rating >= 3.5) return 'bg-yellow-100 text-yellow-800';
        return 'bg-gray-100 text-gray-800';
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
        }).format(price);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star key={i} className={`h-4 w-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
        ));
    };

    return (
        <>
            <TawkToChat propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
            <BaseLayout>
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20 text-white">
                    <div className="container mx-auto px-4">
                        <div className="text-center">
                            <h1 className="mb-6 text-5xl font-bold">Selamat Datang di Platform LMS Terpercaya</h1>
                            <p className="mx-auto mb-8 max-w-3xl text-xl">
                                Temukan ribuan kursus berkualitas dari lembaga terbaik. Mulai perjalanan belajar Anda hari ini!
                            </p>
                            <div className="flex justify-center gap-4">
                                <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                                    Mulai Belajar Gratis
                                </Button>
                                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
                                    Lihat Kelas Pro
                                </Button>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Weather Widget */}
                <section className="bg-gray-50 py-8">
                    <div className="container mx-auto px-4">
                        <WeatherWidget />
                    </div>
                </section>

                {/* Institution Catalog by Rating */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">Katalog Lembaga Terbaik</h2>

                        {/* High Rating (4.5+) */}
                        <div className="mb-12">
                            <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
                                <Award className="h-6 w-6 text-yellow-500" />
                                Lembaga Premium (Rating 4.5+)
                            </h3>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {institutions
                                    .filter((inst) => inst.rating >= 4.5)
                                    .map((institution) => (
                                        <Card key={institution.id} className="transition-shadow hover:shadow-lg">
                                            <CardHeader>
                                                <CardTitle className="flex items-center justify-between">
                                                    {institution.name}
                                                    <Badge className={getRatingColor(institution.rating)}>{institution.rating}</Badge>
                                                </CardTitle>
                                                <CardDescription>{institution.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Star className="h-4 w-4 text-yellow-400" />
                                                        <span>
                                                            {institution.rating} ({institution.review_count} ulasan)
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Phone className="h-4 w-4" />
                                                        <span>{institution.phone}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Mail className="h-4 w-4" />
                                                        <span>{institution.email}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>{institution.address}</span>
                                                    </div>
                                                    {institution.website && (
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <Globe className="h-4 w-4" />
                                                            <a
                                                                href={institution.website}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:underline"
                                                            >
                                                                {institution.website}
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                            </div>
                        </div>

                        {/* Medium Rating (4.0-4.4) */}
                        <div className="mb-12">
                            <h3 className="mb-6 flex items-center gap-2 text-2xl font-semibold">
                                <Users className="h-6 w-6 text-blue-500" />
                                Lembaga Terpercaya (Rating 4.0-4.4)
                            </h3>
                            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                                {institutions
                                    .filter((inst) => inst.rating >= 4.0 && inst.rating < 4.5)
                                    .map((institution) => (
                                        <Card key={institution.id} className="transition-shadow hover:shadow-lg">
                                            <CardHeader>
                                                <CardTitle className="flex items-center justify-between">
                                                    {institution.name}
                                                    <Badge className={getRatingColor(institution.rating)}>{institution.rating}</Badge>
                                                </CardTitle>
                                                <CardDescription>{institution.description}</CardDescription>
                                            </CardHeader>
                                            <CardContent>
                                                <div className="space-y-3">
                                                    <div className="flex items-center gap-2 text-sm">
                                                        <Star className="h-4 w-4 text-yellow-400" />
                                                        <span>
                                                            {institution.rating} ({institution.review_count} ulasan)
                                                        </span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Phone className="h-4 w-4" />
                                                        <span>{institution.phone}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <Mail className="h-4 w-4" />
                                                        <span>{institution.email}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                                        <MapPin className="h-4 w-4" />
                                                        <span>{institution.address}</span>
                                                    </div>
                                                    {institution.website && (
                                                        <div className="flex items-center gap-2 text-sm text-gray-600">
                                                            <Globe className="h-4 w-4" />
                                                            <a
                                                                href={institution.website}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="text-blue-600 hover:underline"
                                                            >
                                                                {institution.website}
                                                            </a>
                                                        </div>
                                                    )}
                                                </div>
                                            </CardContent>
                                        </Card>
                                    ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Pro Courses */}
                <section className="bg-gray-50 py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">Kelas Pro - Akses Lengkap</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {proCourses.map((course) => (
                                <Card key={course.id} className="transition-shadow hover:shadow-lg">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <Badge className="bg-green-100 text-green-800">Pro</Badge>
                                            <Badge className="bg-blue-100 text-blue-800">{course.category.name}</Badge>
                                        </div>
                                        <CardTitle>{course.title}</CardTitle>
                                        <CardDescription>{course.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <BookOpen className="h-4 w-4" />
                                                <span>{course.institution.name}</span>
                                            </div>
                                            <div className="text-2xl font-bold text-green-600">{formatPrice(course.price)}</div>
                                            <div className="flex gap-2">
                                                <Button className="flex-1">Daftar Sekarang</Button>
                                                <Button variant="outline" size="sm">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Free Courses */}
                <section className="py-16">
                    <div className="container mx-auto px-4">
                        <h2 className="mb-12 text-center text-3xl font-bold">Kelas Gratis - Mulai Belajar</h2>
                        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                            {freeCourses.map((course) => (
                                <Card key={course.id} className="transition-shadow hover:shadow-lg">
                                    <CardHeader>
                                        <div className="flex items-center justify-between">
                                            <Badge className="bg-blue-100 text-blue-800">Gratis</Badge>
                                            <Badge className="bg-gray-100 text-gray-800">{course.category.name}</Badge>
                                        </div>
                                        <CardTitle>{course.title}</CardTitle>
                                        <CardDescription>{course.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-4">
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <BookOpen className="h-4 w-4" />
                                                <span>{course.institution.name}</span>
                                            </div>
                                            <div className="text-2xl font-bold text-green-600">Gratis</div>
                                            <div className="flex gap-2">
                                                <Button className="flex-1">Mulai Belajar</Button>
                                                <Button variant="outline" size="sm">
                                                    <Download className="h-4 w-4" />
                                                </Button>
                                            </div>
                                            <p className="text-sm text-gray-500">
                                                Materi dasar tersedia. Untuk materi lengkap,
                                                <a href="#" className="text-blue-600 hover:underline">
                                                    {' '}
                                                    daftar kelas pro
                                                </a>
                                            </p>
                                        </div>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Emergency Help & Support */}
                <section className="bg-red-50 py-16">
                    <div className="container mx-auto px-4">
                        <EmergencyHelp />
                    </div>
                </section>

                {/* Footer */}
                <footer className="bg-gray-900 py-12 text-white">
                    <div className="container mx-auto px-4">
                        <div className="grid gap-8 md:grid-cols-4">
                            <div>
                                <h3 className="mb-4 text-xl font-bold">Platform LMS</h3>
                                <p className="text-gray-400">Platform pembelajaran online terpercaya dengan ribuan kursus berkualitas.</p>
                            </div>
                            <div>
                                <h4 className="mb-4 font-semibold">Layanan</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Kelas Gratis
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Kelas Pro
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Katalog Lembaga
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Bantuan
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 font-semibold">Perusahaan</h4>
                                <ul className="space-y-2 text-gray-400">
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Tentang Kami
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Karir
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Kontak
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" className="hover:text-white">
                                            Blog
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="mb-4 font-semibold">Ikuti Kami</h4>
                                <div className="flex space-x-4">
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <span className="sr-only">Facebook</span>
                                        📘
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <span className="sr-only">Twitter</span>
                                        🐦
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <span className="sr-only">Instagram</span>
                                        📷
                                    </a>
                                    <a href="#" className="text-gray-400 hover:text-white">
                                        <span className="sr-only">YouTube</span>
                                        📺
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="mt-8 border-t border-gray-800 pt-8 text-center text-gray-400">
                            <p>&copy; 2024 Platform LMS. Semua hak dilindungi.</p>
                        </div>
                    </div>
                </footer>
            </BaseLayout>
        </>
    );
}
