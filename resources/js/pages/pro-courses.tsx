import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { Progress } from '@/components/ui/progress';
import GuestLayout from '@/layouts/guest-layout';
import { 
    Award, 
    Star, 
    Users, 
    Clock, 
    PlayCircle, 
    Download, 
    CheckCircle,
    CreditCard,
    QrCode,
    ShoppingCart,
    ArrowRight,
    Filter,
    Search,
    BookOpen,
    Certificate,
    Video,
    FileText
} from 'lucide-react';

interface Course {
    id: number;
    title: string;
    category: string;
    thumbnail: string;
    rating: number;
    students: number;
    price: number;
    originalPrice?: number;
    description: string;
    duration: string;
    lessons: number;
    level: 'beginner' | 'intermediate' | 'advanced';
    instructor: string;
    features: string[];
    curriculum: CourseModule[];
    isPopular?: boolean;
    isNew?: boolean;
}

interface CourseModule {
    id: number;
    title: string;
    lessons: number;
    duration: string;
    isPreview?: boolean;
}

const ProCourses: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState<string>('all');
    const [selectedLevel, setSelectedLevel] = useState<string>('all');
    const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);
    const [showPaymentDialog, setShowPaymentDialog] = useState(false);
    const [paymentMethod, setPaymentMethod] = useState<'qris' | 'bank_transfer' | 'credit_card'>('qris');

    const courses: Course[] = [
        {
            id: 1,
            title: 'Full-Stack Laravel & React Mastery',
            category: 'Web Development',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.9,
            students: 1342,
            price: 750000,
            originalPrice: 1200000,
            description: 'Bangun aplikasi web modern dari awal hingga deployment dengan Laravel dan React. Kursus komprehensif untuk menjadi full-stack developer.',
            duration: '40 jam',
            lessons: 120,
            level: 'intermediate',
            instructor: 'Ahmad Rizki',
            isPopular: true,
            features: [
                'Akses seumur hidup',
                'Sertifikat resmi',
                'Proyek real-world',
                'Mentoring 1-on-1',
                'Download materi PDF',
                'Forum diskusi'
            ],
            curriculum: [
                { id: 1, title: 'Pengenalan Laravel & React', lessons: 5, duration: '2 jam', isPreview: true },
                { id: 2, title: 'Setup Development Environment', lessons: 3, duration: '1.5 jam' },
                { id: 3, title: 'Laravel Backend Development', lessons: 25, duration: '15 jam' },
                { id: 4, title: 'React Frontend Development', lessons: 30, duration: '18 jam' },
                { id: 5, title: 'API Integration', lessons: 15, duration: '8 jam' },
                { id: 6, title: 'Deployment & Production', lessons: 12, duration: '5.5 jam' }
            ]
        },
        {
            id: 2,
            title: 'UI/UX Design for Modern Apps',
            category: 'Design',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.8,
            students: 876,
            price: 550000,
            originalPrice: 800000,
            description: 'Pelajari prinsip desain antarmuka yang intuitif dan menarik. Dari wireframe hingga prototype interaktif.',
            duration: '32 jam',
            lessons: 85,
            level: 'beginner',
            instructor: 'Sarah Johnson',
            features: [
                'Akses seumur hidup',
                'Sertifikat resmi',
                'Design kit lengkap',
                'Portfolio review',
                'Download template',
                'Komunitas designer'
            ],
            curriculum: [
                { id: 1, title: 'Fundamental UI/UX Design', lessons: 8, duration: '4 jam', isPreview: true },
                { id: 2, title: 'User Research & Persona', lessons: 12, duration: '6 jam' },
                { id: 3, title: 'Wireframing & Prototyping', lessons: 20, duration: '10 jam' },
                { id: 4, title: 'Visual Design Principles', lessons: 15, duration: '8 jam' },
                { id: 5, title: 'Design Systems', lessons: 10, duration: '4 jam' }
            ]
        },
        {
            id: 3,
            title: 'Advanced DevOps with Kubernetes',
            category: 'DevOps',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.9,
            students: 950,
            price: 850000,
            originalPrice: 1500000,
            description: 'Orkestrasi dan skalabilitas aplikasi tingkat lanjut dengan Kubernetes dan tools DevOps modern.',
            duration: '45 jam',
            lessons: 150,
            level: 'advanced',
            instructor: 'Maria Garcia',
            isNew: true,
            features: [
                'Akses seumur hidup',
                'Sertifikat resmi',
                'Hands-on labs',
                'Cloud credits',
                'Download cheatsheet',
                'Slack community'
            ],
            curriculum: [
                { id: 1, title: 'Container Fundamentals', lessons: 10, duration: '5 jam', isPreview: true },
                { id: 2, title: 'Docker Deep Dive', lessons: 15, duration: '8 jam' },
                { id: 3, title: 'Kubernetes Architecture', lessons: 20, duration: '12 jam' },
                { id: 4, title: 'CI/CD Pipelines', lessons: 25, duration: '15 jam' },
                { id: 5, title: 'Monitoring & Logging', lessons: 15, duration: '5 jam' }
            ]
        },
        {
            id: 4,
            title: 'Data Science with Python',
            category: 'Data Science',
            thumbnail: 'https://via.placeholder.com/300x180',
            rating: 4.7,
            students: 1100,
            price: 650000,
            originalPrice: 1000000,
            description: 'Pelajari data science dari dasar hingga advanced dengan Python. Analisis data, machine learning, dan visualisasi.',
            duration: '38 jam',
            lessons: 110,
            level: 'intermediate',
            instructor: 'David Chen',
            features: [
                'Akses seumur hidup',
                'Sertifikat resmi',
                'Dataset lengkap',
                'Jupyter notebooks',
                'Download tools',
                'Kaggle competitions'
            ],
            curriculum: [
                { id: 1, title: 'Python for Data Science', lessons: 8, duration: '4 jam', isPreview: true },
                { id: 2, title: 'Data Manipulation with Pandas', lessons: 15, duration: '8 jam' },
                { id: 3, title: 'Data Visualization', lessons: 12, duration: '6 jam' },
                { id: 4, title: 'Machine Learning Basics', lessons: 20, duration: '12 jam' },
                { id: 5, title: 'Advanced ML Algorithms', lessons: 15, duration: '8 jam' }
            ]
        }
    ];

    const categories = ['all', 'Web Development', 'Design', 'DevOps', 'Data Science', 'Mobile Development', 'Marketing'];
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
        setSelectedCourse(course);
        setShowPaymentDialog(true);
    };

    const handlePayment = async () => {
        if (!selectedCourse) return;

        try {
            // Simulasi integrasi Midtrans
            const orderData = {
                course_id: selectedCourse.id,
                course_title: selectedCourse.title,
                amount: selectedCourse.price,
                payment_method: paymentMethod,
                customer_name: 'John Doe', // Akan diambil dari user data
                customer_email: 'john@example.com' // Akan diambil dari user data
            };

            console.log('Processing payment with Midtrans:', orderData);

            // Di sini akan ada API call ke backend untuk membuat order di Midtrans
            // const response = await fetch('/api/create-payment', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify(orderData)
            // });

            // Simulasi response
            setTimeout(() => {
                alert('Pembayaran berhasil! Anda akan diarahkan ke halaman kursus.');
                setShowPaymentDialog(false);
                setSelectedCourse(null);
            }, 2000);

        } catch (error) {
            console.error('Payment error:', error);
            alert('Terjadi kesalahan dalam pemrosesan pembayaran.');
        }
    };

    return (
        <GuestLayout
            title="Kelas Pro - Pare EDUHUB"
            description="Tingkatkan skill Anda dengan kursus premium yang dirancang oleh para ahli di bidangnya."
            keywords="kursus pro, kelas premium, pembayaran online, midtrans, qris"
        >
            {/* Header Section */}
            <section className="bg-gradient-to-r from-primary to-primary/80 py-16 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Kelas Pro</h1>
                        <p className="text-xl text-primary-foreground/90">
                            Tingkatkan skill Anda dengan kursus premium yang dirancang oleh para ahli
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <Award className="w-5 h-5" />
                                <span>Sertifikat Resmi</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Download className="w-5 h-5" />
                                <span>Download Materi</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5" />
                                <span>Akses Seumur Hidup</span>
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
                                placeholder="Cari kursus..."
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
                                        <Badge className="bg-primary text-primary-foreground">PRO</Badge>
                                        {course.isPopular && <Badge className="bg-orange-500 text-white">Populer</Badge>}
                                        {course.isNew && <Badge className="bg-green-500 text-white">Baru</Badge>}
                                    </div>
                                    {course.originalPrice && (
                                        <div className="absolute top-2 right-2">
                                            <Badge className="bg-red-500 text-white">
                                                {Math.round(((course.originalPrice - course.price) / course.originalPrice) * 100)}% OFF
                                            </Badge>
                                        </div>
                                    )}
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
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <span className="text-2xl font-bold text-primary">
                                                    Rp {course.price.toLocaleString()}
                                                </span>
                                                {course.originalPrice && (
                                                    <span className="text-sm text-muted-foreground line-through">
                                                        Rp {course.originalPrice.toLocaleString()}
                                                    </span>
                                                )}
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2">
                                            <h4 className="font-semibold text-sm">Fitur yang didapat:</h4>
                                            <div className="grid grid-cols-2 gap-2">
                                                {course.features.slice(0, 4).map((feature, index) => (
                                                    <div key={index} className="flex items-center gap-2 text-xs text-muted-foreground">
                                                        <CheckCircle className="h-3 w-3 text-green-500" />
                                                        <span>{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                        
                                        <Button 
                                            className="w-full" 
                                            onClick={() => handleEnroll(course)}
                                        >
                                            <ShoppingCart className="mr-2 h-4 w-4" />
                                            Daftar Sekarang
                                        </Button>
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

            {/* Payment Dialog */}
            <Dialog open={showPaymentDialog} onOpenChange={setShowPaymentDialog}>
                <DialogContent className="max-w-md">
                    <DialogHeader>
                        <DialogTitle>Pembayaran Kursus</DialogTitle>
                    </DialogHeader>
                    
                    {selectedCourse && (
                        <div className="space-y-6">
                            <div className="bg-gray-50 p-4 rounded-lg">
                                <h3 className="font-semibold mb-2">{selectedCourse.title}</h3>
                                <div className="flex justify-between items-center">
                                    <span className="text-sm text-muted-foreground">Total Pembayaran:</span>
                                    <span className="text-lg font-bold text-primary">
                                        Rp {selectedCourse.price.toLocaleString()}
                                    </span>
                                </div>
                            </div>
                            
                            <div className="space-y-4">
                                <h4 className="font-semibold">Pilih Metode Pembayaran:</h4>
                                
                                <div className="space-y-3">
                                    <div 
                                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                            paymentMethod === 'qris' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                        }`}
                                        onClick={() => setPaymentMethod('qris')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <QrCode className="w-6 h-6 text-green-600" />
                                            <div>
                                                <div className="font-medium">QRIS</div>
                                                <div className="text-sm text-muted-foreground">Bayar dengan QRIS</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                            paymentMethod === 'bank_transfer' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                        }`}
                                        onClick={() => setPaymentMethod('bank_transfer')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="w-6 h-6 text-blue-600" />
                                            <div>
                                                <div className="font-medium">Transfer Bank</div>
                                                <div className="text-sm text-muted-foreground">BCA, Mandiri, BNI, dll</div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div 
                                        className={`p-4 border rounded-lg cursor-pointer transition-colors ${
                                            paymentMethod === 'credit_card' ? 'border-primary bg-primary/5' : 'border-gray-200'
                                        }`}
                                        onClick={() => setPaymentMethod('credit_card')}
                                    >
                                        <div className="flex items-center gap-3">
                                            <CreditCard className="w-6 h-6 text-purple-600" />
                                            <div>
                                                <div className="font-medium">Kartu Kredit/Debit</div>
                                                <div className="text-sm text-muted-foreground">Visa, Mastercard, JCB</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex gap-3">
                                <Button 
                                    variant="outline" 
                                    className="flex-1"
                                    onClick={() => setShowPaymentDialog(false)}
                                >
                                    Batal
                                </Button>
                                <Button 
                                    className="flex-1"
                                    onClick={handlePayment}
                                >
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    Bayar Sekarang
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
        </GuestLayout>
    );
};

export default ProCourses;