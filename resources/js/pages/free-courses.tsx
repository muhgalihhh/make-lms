import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GuestLayout from '@/layouts/guest-layout';
import {
    BookOpen,
    Star,
    Users,
    Clock,
    PlayCircle,
    Download,
    CheckCircle,
    ArrowRight,
    Search,
    Target,
    Zap,
    Gift,
    Lock,
    ExternalLink
} from 'lucide-react';

interface FreeCourse {
    id: number;
    title: string;
    description: string;
    duration: string;
    students: number;
    rating: number;
    reviews: number;
    category: string;
    instructor: string;
    features: string[];
    materials: string[];
    proCourseLink: string;
    isNew: boolean;
    image: string;
}

const freeCourses: FreeCourse[] = [
    {
        id: 1,
        title: "Dasar Bahasa Inggris",
        description: "Pelajari dasar-dasar bahasa Inggris dengan metode yang mudah dipahami. Cocok untuk pemula.",
        duration: "2 jam",
        students: 2500,
        rating: 4.8,
        reviews: 320,
        category: "Bahasa Inggris",
        instructor: "Sarah Johnson",
        features: [
            "Materi dasar lengkap",
            "Video pembelajaran",
            "Latihan interaktif",
            "Sertifikat gratis"
        ],
        materials: [
            "Basic Grammar.pdf",
            "Vocabulary List.pdf",
            "Pronunciation Guide.pdf"
        ],
        proCourseLink: "/pro-courses/1",
        isNew: false,
        image: "/images/basic-english.jpg"
    },
    {
        id: 2,
        title: "Grammar Dasar",
        description: "Kuasi tata bahasa Inggris dasar dengan penjelasan yang jelas dan contoh-contoh praktis.",
        duration: "1.5 jam",
        students: 1800,
        rating: 4.7,
        reviews: 245,
        category: "Grammar",
        instructor: "Robert Taylor",
        features: [
            "Penjelasan detail",
            "Contoh praktis",
            "Latihan soal",
            "Quiz interaktif"
        ],
        materials: [
            "Grammar Rules.pdf",
            "Exercise Book.pdf",
            "Common Mistakes.pdf"
        ],
        proCourseLink: "/pro-courses/6",
        isNew: false,
        image: "/images/grammar-basic.jpg"
    },
    {
        id: 3,
        title: "Pronunciation Basics",
        description: "Pelajari cara pengucapan yang benar dalam bahasa Inggris dengan audio dan video.",
        duration: "1 jam",
        students: 1200,
        rating: 4.6,
        reviews: 180,
        category: "Pronunciation",
        instructor: "Lisa Anderson",
        features: [
            "Audio pronunciation",
            "Video tutorial",
            "Practice exercises",
            "Feedback system"
        ],
        materials: [
            "Pronunciation Guide.pdf",
            "Audio Files.zip",
            "Practice Sheet.pdf"
        ],
        proCourseLink: "/pro-courses/5",
        isNew: true,
        image: "/images/pronunciation.jpg"
    },
    {
        id: 4,
        title: "Vocabulary Builder",
        description: "Tingkatkan kosakata bahasa Inggris Anda dengan metode yang efektif dan menyenangkan.",
        duration: "1.5 jam",
        students: 950,
        rating: 4.5,
        reviews: 156,
        category: "Vocabulary",
        instructor: "David Brown",
        features: [
            "100+ kata baru",
            "Context learning",
            "Memory techniques",
            "Flashcards"
        ],
        materials: [
            "Vocabulary List.pdf",
            "Flashcards.pdf",
            "Memory Techniques.pdf"
        ],
        proCourseLink: "/pro-courses/1",
        isNew: false,
        image: "/images/vocabulary.jpg"
    },
    {
        id: 5,
        title: "Reading Comprehension",
        description: "Tingkatkan kemampuan membaca dan memahami teks bahasa Inggris dengan strategi yang tepat.",
        duration: "2 jam",
        students: 800,
        rating: 4.4,
        reviews: 120,
        category: "Reading",
        instructor: "Emma Wilson",
        features: [
            "Reading strategies",
            "Comprehension exercises",
            "Speed reading tips",
            "Practice texts"
        ],
        materials: [
            "Reading Strategies.pdf",
            "Practice Texts.pdf",
            "Comprehension Guide.pdf"
        ],
        proCourseLink: "/pro-courses/3",
        isNew: false,
        image: "/images/reading.jpg"
    },
    {
        id: 6,
        title: "Basic Conversation",
        description: "Pelajari percakapan dasar bahasa Inggris untuk situasi sehari-hari.",
        duration: "1.5 jam",
        students: 1100,
        rating: 4.7,
        reviews: 200,
        category: "Conversation",
        instructor: "Michael Chen",
        features: [
            "Daily conversations",
            "Role play exercises",
            "Common phrases",
            "Cultural tips"
        ],
        materials: [
            "Conversation Guide.pdf",
            "Common Phrases.pdf",
            "Role Play Scripts.pdf"
        ],
        proCourseLink: "/pro-courses/5",
        isNew: true,
        image: "/images/conversation-basic.jpg"
    }
];

export default function FreeCourses() {
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');

    const filteredCourses = freeCourses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            course.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    const handleStartCourse = (courseId: number) => {
        console.log(`Starting free course ${courseId}`);
        // Implementasi untuk memulai kursus gratis
    };

    const handleDownloadMaterial = (material: string) => {
        console.log(`Downloading ${material}`);
        // Implementasi untuk download materi
    };

    const handleUpgradeToPro = (proCourseLink: string) => {
        console.log(`Upgrading to pro course: ${proCourseLink}`);
        // Navigasi ke halaman kelas pro
    };

    return (
        <GuestLayout>
            <Head title="Kelas Gratis - Pare EDU HUB" />
            
            {/* Header Section */}
            <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="mb-6">
                            <Gift className="w-16 h-16 mx-auto text-yellow-300 mb-4" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Kelas Gratis
                            </h1>
                        </div>
                        <p className="text-xl max-w-2xl mx-auto">
                            Mulai perjalanan belajar Anda dengan kelas gratis yang berkualitas. 
                            Materi dasar gratis, upgrade ke pro untuk konten lengkap.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Gift className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">100% Gratis</h3>
                            <p className="text-gray-600 text-sm">
                                Akses ke semua kelas gratis tanpa biaya apapun
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Download className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Download PDF</h3>
                            <p className="text-gray-600 text-sm">
                                Download materi dalam format PDF untuk belajar offline
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Target className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Upgrade ke Pro</h3>
                            <p className="text-gray-600 text-sm">
                                Dapatkan materi lengkap dengan upgrade ke kelas pro
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="flex-1">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    placeholder="Cari kelas gratis..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div className="w-full md:w-48">
                            <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih Kategori" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Semua Kategori</SelectItem>
                                    <SelectItem value="Bahasa Inggris">Bahasa Inggris</SelectItem>
                                    <SelectItem value="Grammar">Grammar</SelectItem>
                                    <SelectItem value="Pronunciation">Pronunciation</SelectItem>
                                    <SelectItem value="Vocabulary">Vocabulary</SelectItem>
                                    <SelectItem value="Reading">Reading</SelectItem>
                                    <SelectItem value="Conversation">Conversation</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredCourses.map((course) => (
                            <Card key={course.id} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-2">
                                            {course.isNew && (
                                                <Badge className="bg-green-500 text-white">
                                                    Baru
                                                </Badge>
                                            )}
                                            <Badge className="bg-green-600 text-white">
                                                Gratis
                                            </Badge>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium">{course.rating}</span>
                                        </div>
                                    </div>
                                    
                                    <CardTitle className="text-lg mb-2">{course.title}</CardTitle>
                                    <p className="text-gray-600 text-sm mb-4">{course.description}</p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <Clock className="w-4 h-4" />
                                                <span>{course.duration}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{course.students}</span>
                                            </div>
                                        </div>
                                        <Badge variant="outline">{course.category}</Badge>
                                    </div>
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="mb-4">
                                        <p className="text-sm text-gray-500 mb-2">
                                            Instruktur: {course.instructor}
                                        </p>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <span>{course.reviews} ulasan</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2">Fitur yang didapat:</h4>
                                        <ul className="space-y-1">
                                            {course.features.map((feature, index) => (
                                                <li key={index} className="flex items-center gap-2 text-sm text-gray-600">
                                                    <CheckCircle className="w-4 h-4 text-green-500" />
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2">Materi yang dapat diunduh:</h4>
                                        <div className="space-y-2">
                                            {course.materials.map((material, index) => (
                                                <div key={index} className="flex items-center justify-between">
                                                    <span className="text-sm text-gray-600">{material}</span>
                                                    <Button 
                                                        variant="outline" 
                                                        size="sm"
                                                        onClick={() => handleDownloadMaterial(material)}
                                                    >
                                                        <Download className="w-4 h-4" />
                                                    </Button>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        <Button 
                                            className="flex-1 bg-green-600 hover:bg-green-700"
                                            onClick={() => handleStartCourse(course.id)}
                                        >
                                            <PlayCircle className="w-4 h-4 mr-2" />
                                            Mulai Belajar
                                        </Button>
                                        <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => handleUpgradeToPro(course.proCourseLink)}
                                        >
                                            <Lock className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    
                                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                        <div className="flex items-center gap-2 text-sm text-blue-700">
                                            <Target className="w-4 h-4" />
                                            <span className="font-medium">Ingin materi lengkap?</span>
                                        </div>
                                        <p className="text-xs text-blue-600 mt-1">
                                            Upgrade ke kelas pro untuk mendapatkan akses ke semua materi dan fitur premium.
                                        </p>
                                        <Button 
                                            variant="link" 
                                            size="sm" 
                                            className="p-0 h-auto text-blue-700 underline mt-2"
                                            onClick={() => handleUpgradeToPro(course.proCourseLink)}
                                        >
                                            Lihat Kelas Pro
                                            <ArrowRight className="w-3 h-3 ml-1" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-12">
                            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                Tidak ada kelas ditemukan
                            </h3>
                            <p className="text-gray-500">
                                Coba ubah filter pencarian Anda
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Upgrade CTA Section */}
            <section className="py-12 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Siap untuk Level Selanjutnya?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Dapatkan akses ke materi lengkap, video HD, live session, dan sertifikat resmi dengan upgrade ke kelas pro.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                            <Target className="w-5 h-5 mr-2" />
                            Lihat Kelas Pro
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                            Pelajari Lebih Lanjut
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}