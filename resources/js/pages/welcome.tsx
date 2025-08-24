import { useState, useEffect } from 'react';
import BaseLayout from '@/layouts/base-layout';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Phone, Mail, MapPin, Globe, Download, MessageCircle, Heart, Shield, BookOpen, Users, Award } from 'lucide-react';
import TawkToChat from '@/components/TawkToChat';
import WeatherWidget from '@/components/WeatherWidget';
import EmergencyHelp from '@/components/EmergencyHelp';

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
        if (rating >= 4.5) return "bg-green-100 text-green-800";
        if (rating >= 4.0) return "bg-blue-100 text-blue-800";
        if (rating >= 3.5) return "bg-yellow-100 text-yellow-800";
        return "bg-gray-100 text-gray-800";
    };

    const formatPrice = (price: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR'
        }).format(price);
    };

    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, i) => (
            <Star
                key={i}
                className={`w-4 h-4 ${i < Math.floor(rating) ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
            />
        ));
    };

    return (
        <>
            <TawkToChat propertyId="YOUR_PROPERTY_ID" widgetId="YOUR_WIDGET_ID" />
            <BaseLayout>
                {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-20">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold mb-6">
                            Selamat Datang di Platform LMS Terpercaya
                        </h1>
                        <p className="text-xl mb-8 max-w-3xl mx-auto">
                            Temukan ribuan kursus berkualitas dari lembaga terbaik. 
                            Mulai perjalanan belajar Anda hari ini!
                        </p>
                        <div className="flex gap-4 justify-center">
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
                    <h2 className="text-3xl font-bold text-center mb-12">Katalog Lembaga Terbaik</h2>
                    
                    {/* High Rating (4.5+) */}
                    <div className="mb-12">
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <Award className="w-6 h-6 text-yellow-500" />
                            Lembaga Premium (Rating 4.5+)
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {institutions.filter(inst => inst.rating >= 4.5).map((institution) => (
                                <Card key={institution.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            {institution.name}
                                            <Badge className={getRatingColor(institution.rating)}>
                                                {institution.rating}
                                            </Badge>
                                        </CardTitle>
                                        <CardDescription>{institution.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Star className="w-4 h-4 text-yellow-400" />
                                                <span>{institution.rating} ({institution.review_count} ulasan)</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Phone className="w-4 h-4" />
                                                <span>{institution.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Mail className="w-4 h-4" />
                                                <span>{institution.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <MapPin className="w-4 h-4" />
                                                <span>{institution.address}</span>
                                            </div>
                                            {institution.website && (
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Globe className="w-4 h-4" />
                                                    <a href={institution.website} target="_blank" rel="noopener noreferrer" 
                                                       className="text-blue-600 hover:underline">
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
                        <h3 className="text-2xl font-semibold mb-6 flex items-center gap-2">
                            <Users className="w-6 h-6 text-blue-500" />
                            Lembaga Terpercaya (Rating 4.0-4.4)
                        </h3>
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {institutions.filter(inst => inst.rating >= 4.0 && inst.rating < 4.5).map((institution) => (
                                <Card key={institution.id} className="hover:shadow-lg transition-shadow">
                                    <CardHeader>
                                        <CardTitle className="flex items-center justify-between">
                                            {institution.name}
                                            <Badge className={getRatingColor(institution.rating)}>
                                                {institution.rating}
                                            </Badge>
                                        </CardTitle>
                                        <CardDescription>{institution.description}</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="space-y-3">
                                            <div className="flex items-center gap-2 text-sm">
                                                <Star className="w-4 h-4 text-yellow-400" />
                                                <span>{institution.rating} ({institution.review_count} ulasan)</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Phone className="w-4 h-4" />
                                                <span>{institution.phone}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <Mail className="w-4 h-4" />
                                                <span>{institution.email}</span>
                                            </div>
                                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                                <MapPin className="w-4 h-4" />
                                                <span>{institution.address}</span>
                                            </div>
                                            {institution.website && (
                                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                                    <Globe className="w-4 h-4" />
                                                    <a href={institution.website} target="_blank" rel="noopener noreferrer" 
                                                       className="text-blue-600 hover:underline">
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
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-bold text-center mb-12">Kelas Pro - Akses Lengkap</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {proCourses.map((course) => (
                            <Card key={course.id} className="hover:shadow-lg transition-shadow">
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
                                            <BookOpen className="w-4 h-4" />
                                            <span>{course.institution.name}</span>
                                        </div>
                                        <div className="text-2xl font-bold text-green-600">
                                            {formatPrice(course.price)}
                                        </div>
                                        <div className="flex gap-2">
                                            <Button className="flex-1">Daftar Sekarang</Button>
                                            <Button variant="outline" size="sm">
                                                <Download className="w-4 h-4" />
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
                    <h2 className="text-3xl font-bold text-center mb-12">Kelas Gratis - Mulai Belajar</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {freeCourses.map((course) => (
                            <Card key={course.id} className="hover:shadow-lg transition-shadow">
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
                                            <BookOpen className="w-4 h-4" />
                                            <span>{course.institution.name}</span>
                                        </div>
                                        <div className="text-2xl font-bold text-green-600">
                                            Gratis
                                        </div>
                                        <div className="flex gap-2">
                                            <Button className="flex-1">Mulai Belajar</Button>
                                            <Button variant="outline" size="sm">
                                                <Download className="w-4 h-4" />
                                            </Button>
                                        </div>
                                        <p className="text-sm text-gray-500">
                                            Materi dasar tersedia. Untuk materi lengkap, 
                                            <a href="#" className="text-blue-600 hover:underline"> daftar kelas pro</a>
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </div>
            </section>

            {/* Emergency Help & Support */}
            <section className="py-16 bg-red-50">
                <div className="container mx-auto px-4">
                    <EmergencyHelp />
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-gray-900 text-white py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div>
                            <h3 className="text-xl font-bold mb-4">Platform LMS</h3>
                            <p className="text-gray-400">
                                Platform pembelajaran online terpercaya dengan ribuan kursus berkualitas.
                            </p>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Layanan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Kelas Gratis</a></li>
                                <li><a href="#" className="hover:text-white">Kelas Pro</a></li>
                                <li><a href="#" className="hover:text-white">Katalog Lembaga</a></li>
                                <li><a href="#" className="hover:text-white">Bantuan</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Perusahaan</h4>
                            <ul className="space-y-2 text-gray-400">
                                <li><a href="#" className="hover:text-white">Tentang Kami</a></li>
                                <li><a href="#" className="hover:text-white">Karir</a></li>
                                <li><a href="#" className="hover:text-white">Kontak</a></li>
                                <li><a href="#" className="hover:text-white">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h4 className="font-semibold mb-4">Ikuti Kami</h4>
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
                    <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
                        <p>&copy; 2024 Platform LMS. Semua hak dilindungi.</p>
                    </div>
                </div>
            </footer>
            </BaseLayout>
        </>
    );
}
