import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Progress } from '@/components/ui/progress';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
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
    Filter,
    Video,
    FileText,
    ExternalLink,
    Lock,
    Crown,
    Award,
    MessageSquare
} from 'lucide-react';

interface Course {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    rating: number;
    students: number;
    description: string;
    duration: string;
    lessons: number;
    level: 'beginner' | 'intermediate' | 'advanced';
    instructor: string;
    isEnrolled: boolean;
    progress: number;
    materials: CourseMaterial[];
    proCourseLink?: string;
    proCoursePrice?: number;
}

interface CourseMaterial {
    id: number;
    title: string;
    type: 'video' | 'pdf' | 'quiz';
    duration?: string;
    isPreview: boolean;
    downloadUrl?: string;
    videoUrl?: string;
}

const FreeCourses: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

    const courses: Course[] = [
        {
            id: 1,
            title: 'Dasar-Dasar HTML & CSS',
            category: 'Web Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.7,
            students: 12503,
            description: 'Pengenalan fundamental untuk memulai karir web development. Pelajari HTML dan CSS dari dasar.',
            duration: '8 jam',
            lessons: 25,
            level: 'beginner',
            instructor: 'Ahmad Rizki',
            isEnrolled: true,
            progress: 60,
            proCourseLink: '/pro-courses/1',
            proCoursePrice: 750000,
            materials: [
                { id: 1, title: 'Pengenalan HTML', type: 'video', duration: '15 menit', isPreview: true, videoUrl: '#' },
                { id: 2, title: 'Struktur HTML Dasar', type: 'video', duration: '20 menit', isPreview: true, videoUrl: '#' },
                { id: 3, title: 'Pengenalan CSS', type: 'video', duration: '18 menit', isPreview: true, videoUrl: '#' },
                { id: 4, title: 'Materi HTML & CSS (PDF)', type: 'pdf', isPreview: true, downloadUrl: '/materials/html-css-basic.pdf' },
                { id: 5, title: 'Quiz HTML Dasar', type: 'quiz', isPreview: true },
                { id: 6, title: 'CSS Layout & Flexbox', type: 'video', duration: '25 menit', isPreview: false, videoUrl: '#' },
                { id: 7, title: 'CSS Grid System', type: 'video', duration: '30 menit', isPreview: false, videoUrl: '#' },
                { id: 8, title: 'Materi Lanjutan (PDF)', type: 'pdf', isPreview: false, downloadUrl: '/materials/html-css-advanced.pdf' }
            ]
        },
        {
            id: 2,
            title: 'Pengenalan Copywriting',
            category: 'Marketing',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.6,
            students: 9870,
            description: 'Pelajari cara menulis teks iklan yang menjual dan efektif untuk berbagai platform.',
            duration: '6 jam',
            lessons: 18,
            level: 'beginner',
            instructor: 'Sarah Johnson',
            isEnrolled: false,
            progress: 0,
            proCourseLink: '/pro-courses/2',
            proCoursePrice: 550000,
            materials: [
                { id: 1, title: 'Apa itu Copywriting?', type: 'video', duration: '12 menit', isPreview: true, videoUrl: '#' },
                { id: 2, title: 'Prinsip Copywriting', type: 'video', duration: '16 menit', isPreview: true, videoUrl: '#' },
                { id: 3, title: 'Materi Copywriting Dasar (PDF)', type: 'pdf', isPreview: true, downloadUrl: '/materials/copywriting-basic.pdf' },
                { id: 4, title: 'Quiz Copywriting', type: 'quiz', isPreview: true },
                { id: 5, title: 'Headline yang Menarik', type: 'video', duration: '22 menit', isPreview: false, videoUrl: '#' },
                { id: 6, title: 'Call-to-Action yang Efektif', type: 'video', duration: '20 menit', isPreview: false, videoUrl: '#' }
            ]
        },
        {
            id: 3,
            title: 'Fundamental Git & GitHub',
            category: 'Tools',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.8,
            students: 15000,
            description: 'Kontrol versi dan kolaborasi dalam pengembangan software dengan Git dan GitHub.',
            duration: '5 jam',
            lessons: 20,
            level: 'beginner',
            instructor: 'David Chen',
            isEnrolled: true,
            progress: 100,
            proCourseLink: '/pro-courses/3',
            proCoursePrice: 850000,
            materials: [
                { id: 1, title: 'Pengenalan Git', type: 'video', duration: '14 menit', isPreview: true, videoUrl: '#' },
                { id: 2, title: 'Setup Git & GitHub', type: 'video', duration: '18 menit', isPreview: true, videoUrl: '#' },
                { id: 3, title: 'Materi Git Dasar (PDF)', type: 'pdf', isPreview: true, downloadUrl: '/materials/git-basic.pdf' },
                { id: 4, title: 'Quiz Git Dasar', type: 'quiz', isPreview: true },
                { id: 5, title: 'Branching & Merging', type: 'video', duration: '24 menit', isPreview: false, videoUrl: '#' },
                { id: 6, title: 'Collaboration dengan GitHub', type: 'video', duration: '28 menit', isPreview: false, videoUrl: '#' },
                { id: 7, title: 'Materi Git Lanjutan (PDF)', type: 'pdf', isPreview: false, downloadUrl: '/materials/git-advanced.pdf' }
            ]
        },
        {
            id: 4,
            title: 'Pengenalan JavaScript',
            category: 'Web Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.5,
            students: 11200,
            description: 'Pelajari dasar-dasar JavaScript untuk membuat website yang interaktif.',
            duration: '10 jam',
            lessons: 30,
            level: 'beginner',
            instructor: 'Maria Garcia',
            isEnrolled: false,
            progress: 0,
            proCourseLink: '/pro-courses/4',
            proCoursePrice: 650000,
            materials: [
                { id: 1, title: 'Apa itu JavaScript?', type: 'video', duration: '16 menit', isPreview: true, videoUrl: '#' },
                { id: 2, title: 'Variabel & Tipe Data', type: 'video', duration: '20 menit', isPreview: true, videoUrl: '#' },
                { id: 3, title: 'Materi JavaScript Dasar (PDF)', type: 'pdf', isPreview: true, downloadUrl: '/materials/javascript-basic.pdf' },
                { id: 4, title: 'Quiz JavaScript', type: 'quiz', isPreview: true },
                { id: 5, title: 'Functions & Scope', type: 'video', duration: '26 menit', isPreview: false, videoUrl: '#' },
                { id: 6, title: 'DOM Manipulation', type: 'video', duration: '32 menit', isPreview: false, videoUrl: '#' }
            ]
        }
    ];

    const categories = ['all', 'Web Development', 'Design', 'Marketing', 'Tools', 'Data Science'];
    const levels = ['all', 'beginner', 'intermediate', 'advanced'];

    const filteredCourses = courses.filter(course => {
        const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             course.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
        const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
        return matchesSearch && matchesCategory && matchesLevel;
    });

    const getLevelColor = (level: string) => {
        switch (level) {
            case 'beginner':
                return 'bg-green-100 text-green-800';
            case 'intermediate':
                return 'bg-blue-100 text-blue-800';
            case 'advanced':
                return 'bg-red-100 text-red-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getLevelLabel = (level: string) => {
        switch (level) {
            case 'beginner':
                return 'Pemula';
            case 'intermediate':
                return 'Menengah';
            case 'advanced':
                return 'Lanjutan';
            default:
                return 'Unknown';
        }
    };

    const handleEnroll = (course: Course) => {
        // Simulasi enroll ke kursus gratis
        alert(`Anda berhasil mendaftar ke kursus "${course.title}"!`);
    };

    const handleDownload = (material: CourseMaterial) => {
        if (material.downloadUrl) {
            // Simulasi download
            const link = document.createElement('a');
            link.href = material.downloadUrl;
            link.download = material.title;
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);
        }
    };

    const handleWatchVideo = (material: CourseMaterial) => {
        if (material.isPreview) {
            alert(`Memutar video: ${material.title}`);
        } else {
            alert('Video ini hanya tersedia di versi Pro. Upgrade untuk akses penuh!');
        }
    };

    return (
        <GuestLayout
            title="Kelas Gratis - Pare EDUHUB"
            description="Mulai belajar dengan kursus gratis kami. Download materi PDF dan akses konten dasar tanpa biaya."
            keywords="kursus gratis, download pdf, materi pembelajaran, kelas online gratis"
        >
            {/* Header Section */}
            <section className="bg-gradient-to-r from-green-500 to-green-600 py-16 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Kelas Gratis</h1>
                        <p className="text-xl text-green-100">
                            Mulai belajar tanpa biaya. Download materi PDF dan akses konten dasar untuk upgrade skill Anda.
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                <span>Download PDF</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Video className="w-5 h-5" />
                                <span>Video Preview</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>100% Gratis</span>
                            </div>
                        </div>
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
                                placeholder="Cari kursus gratis..."
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
                                {categories.map(category => (
                                    <SelectItem key={category} value={category}>
                                        {category === 'all' ? 'Semua Kategori' : category}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        <Select value={selectedLevel} onValueChange={setSelectedLevel}>
                            <SelectTrigger className="w-full md:w-48">
                                <SelectValue placeholder="Pilih level" />
                            </SelectTrigger>
                            <SelectContent>
                                {levels.map(level => (
                                    <SelectItem key={level} value={level}>
                                        {level === 'all' ? 'Semua Level' : getLevelLabel(level)}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>
            </section>

            {/* Courses Grid */}
            <section className="py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredCourses.map((course) => (
                            <Card key={course.id} className="overflow-hidden transition-transform hover:scale-105">
                                <div className="relative">
                                    <img src={course.thumbnail} alt={course.title} className="h-48 w-full object-cover" />
                                    <div className="absolute top-2 left-2 flex gap-2">
                                        <Badge className="bg-green-500 text-white">GRATIS</Badge>
                                        {course.isEnrolled && <Badge className="bg-blue-500 text-white">Terdaftar</Badge>}
                                    </div>
                                </div>
                                
                                <CardHeader>
                                    <div className="flex items-center justify-between mb-2">
                                        <Badge variant="secondary">{course.category}</Badge>
                                        <Badge className={getLevelColor(course.level)}>
                                            {getLevelLabel(course.level)}
                                        </Badge>
                                    </div>
                                    <CardTitle className="text-lg">{course.title}</CardTitle>
                                    <p className="text-sm text-muted-foreground">{course.description}</p>
                                    
                                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                                        <div className="flex items-center gap-1">
                                            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                            <span>{course.rating}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Users className="h-4 w-4" />
                                            <span>{course.students.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Clock className="h-4 w-4" />
                                            <span>{course.duration}</span>
                                        </div>
                                    </div>

                                    {course.isEnrolled && (
                                        <div className="mt-4">
                                            <div className="flex justify-between text-sm mb-1">
                                                <span>Progress</span>
                                                <span>{course.progress}%</span>
                                            </div>
                                            <Progress value={course.progress} className="h-2" />
                                        </div>
                                    )}
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <span className="text-2xl font-bold text-green-600">Gratis</span>
                                            {course.proCourseLink && (
                                                <div className="text-right">
                                                    <p className="text-xs text-muted-foreground">Versi Pro:</p>
                                                    <p className="text-sm font-semibold text-primary">
                                                        Rp {course.proCoursePrice?.toLocaleString()}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Materi yang tersedia:</h4>
                                            <div className="grid grid-cols-1 gap-2">
                                                {course.materials.slice(0, 3).map((material, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        {material.type === 'video' && <Video className="h-3 w-3" />}
                                                        {material.type === 'pdf' && <FileText className="h-3 w-3" />}
                                                        {material.type === 'quiz' && <Award className="h-3 w-3" />}
                                                        <span>{material.title}</span>
                                                        {material.isPreview && <Badge className="text-xs">Preview</Badge>}
                                                    </div>
                                                ))}
                                                {course.materials.length > 3 && (
                                                    <div className="text-xs text-muted-foreground">
                                                        +{course.materials.length - 3} materi lainnya
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="flex gap-2">
                                            {!course.isEnrolled ? (
                                                <Button 
                                                    className="flex-1" 
                                                    onClick={() => handleEnroll(course)}
                                                >
                                                    <BookOpen className="mr-2 h-4 w-4" />
                                                    Daftar Gratis
                                                </Button>
                                            ) : (
                                                <Button 
                                                    className="flex-1"
                                                    onClick={() => setSelectedCourse(course)}
                                                >
                                                    <PlayCircle className="mr-2 h-4 w-4" />
                                                    Lanjutkan Belajar
                                                </Button>
                                            )}
                                            
                                            {course.proCourseLink && (
                                                <Button 
                                                    variant="outline" 
                                                    size="sm"
                                                    onClick={() => window.open(course.proCourseLink, '_blank')}
                                                >
                                                    <Crown className="w-4 h-4" />
                                                </Button>
                                            )}
                                        </div>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {filteredCourses.length === 0 && (
                        <div className="text-center py-16">
                            <BookOpen className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">Tidak ada kursus ditemukan</h3>
                            <p className="text-gray-500">Coba ubah filter pencarian Anda</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Course Detail Dialog */}
            {selectedCourse && (
                <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
                    <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
                        <div className="p-6">
                            <div className="flex justify-between items-start mb-6">
                                <div>
                                    <h2 className="text-2xl font-bold">{selectedCourse.title}</h2>
                                    <p className="text-muted-foreground">{selectedCourse.description}</p>
                                </div>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => setSelectedCourse(null)}
                                >
                                    ✕
                                </Button>
                            </div>

                            <Tabs defaultValue="materials" className="w-full">
                                <TabsList className="grid w-full grid-cols-2">
                                    <TabsTrigger value="materials">Materi Kursus</TabsTrigger>
                                    <TabsTrigger value="overview">Overview</TabsTrigger>
                                </TabsList>
                                
                                <TabsContent value="materials" className="space-y-4">
                                    <div className="space-y-3">
                                        {selectedCourse.materials.map((material, index) => (
                                            <div key={material.id} className="flex items-center justify-between p-4 border rounded-lg">
                                                <div className="flex items-center gap-3">
                                                    {material.type === 'video' && <Video className="h-5 w-5 text-blue-500" />}
                                                    {material.type === 'pdf' && <FileText className="h-5 w-5 text-red-500" />}
                                                    {material.type === 'quiz' && <Award className="h-5 w-5 text-yellow-500" />}
                                                    <div>
                                                        <h4 className="font-medium">{material.title}</h4>
                                                        {material.duration && (
                                                            <p className="text-sm text-muted-foreground">{material.duration}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center gap-2">
                                                    {material.isPreview && (
                                                        <Badge className="text-xs">Preview</Badge>
                                                    )}
                                                    {!material.isPreview && (
                                                        <Lock className="h-4 w-4 text-muted-foreground" />
                                                    )}
                                                    
                                                    {material.type === 'video' && material.isPreview && (
                                                        <Button 
                                                            size="sm" 
                                                            variant="outline"
                                                            onClick={() => handleWatchVideo(material)}
                                                        >
                                                            <PlayCircle className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                    
                                                    {material.type === 'pdf' && material.isPreview && (
                                                        <Button 
                                                            size="sm" 
                                                            variant="outline"
                                                            onClick={() => handleDownload(material)}
                                                        >
                                                            <Download className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                    
                                                    {material.type === 'quiz' && material.isPreview && (
                                                        <Button 
                                                            size="sm" 
                                                            variant="outline"
                                                        >
                                                            <Award className="h-4 w-4" />
                                                        </Button>
                                                    )}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    
                                    {selectedCourse.proCourseLink && (
                                        <div className="mt-6 p-4 bg-gradient-to-r from-yellow-50 to-orange-50 rounded-lg">
                                            <div className="flex items-center justify-between">
                                                <div>
                                                    <h4 className="font-semibold flex items-center gap-2">
                                                        <Crown className="h-5 w-5 text-yellow-600" />
                                                        Upgrade ke Versi Pro
                                                    </h4>
                                                    <p className="text-sm text-muted-foreground">
                                                        Dapatkan akses penuh ke semua materi dan fitur premium
                                                    </p>
                                                </div>
                                                <Button 
                                                    onClick={() => window.open(selectedCourse.proCourseLink, '_blank')}
                                                >
                                                    <ArrowRight className="mr-2 h-4 w-4" />
                                                    Upgrade Sekarang
                                                </Button>
                                            </div>
                                        </div>
                                    )}
                                </TabsContent>
                                
                                <TabsContent value="overview" className="space-y-4">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="p-4 border rounded-lg">
                                            <h4 className="font-semibold mb-2">Informasi Kursus</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span>Instruktur:</span>
                                                    <span>{selectedCourse.instructor}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Level:</span>
                                                    <span>{getLevelLabel(selectedCourse.level)}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Durasi:</span>
                                                    <span>{selectedCourse.duration}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Total Materi:</span>
                                                    <span>{selectedCourse.lessons} materi</span>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="p-4 border rounded-lg">
                                            <h4 className="font-semibold mb-2">Statistik</h4>
                                            <div className="space-y-2 text-sm">
                                                <div className="flex justify-between">
                                                    <span>Rating:</span>
                                                    <span className="flex items-center gap-1">
                                                        <Star className="h-3 w-3 fill-yellow-400 text-yellow-400" />
                                                        {selectedCourse.rating}
                                                    </span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Siswa:</span>
                                                    <span>{selectedCourse.students.toLocaleString()}</span>
                                                </div>
                                                <div className="flex justify-between">
                                                    <span>Progress Anda:</span>
                                                    <span>{selectedCourse.progress}%</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </TabsContent>
                            </Tabs>
                        </div>
                    </div>
                </div>
            )}

            {/* Upgrade CTA Section */}
            <section className="bg-gradient-to-r from-yellow-400 to-orange-500 py-16 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="mb-4 text-3xl font-bold">Siap untuk Level Selanjutnya?</h2>
                    <p className="mb-8 text-xl">
                        Upgrade ke versi Pro untuk mendapatkan akses penuh ke semua materi, sertifikat, dan fitur premium
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-white text-orange-500 hover:bg-gray-100">
                            <Crown className="mr-2 w-5 h-5" />
                            Lihat Kelas Pro
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-orange-500">
                            <MessageSquare className="mr-2 w-5 h-5" />
                            Konsultasi Gratis
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default FreeCourses;