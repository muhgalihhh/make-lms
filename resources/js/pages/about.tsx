import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import GuestLayout from '@/layouts/guest-layout';
import {
    GraduationCap,
    Users,
    Award,
    Target,
    CheckCircle,
    Heart,
    Shield,
    Zap,
    BookOpen,
    MessageSquare,
    MapPin,
    Phone,
    Mail,
    Globe
} from 'lucide-react';

export default function About() {
    return (
        <GuestLayout>
            <Head title="Tentang Kami - Pare EDU HUB" />
            
            {/* Hero Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="mb-6">
                            <GraduationCap className="w-16 h-16 mx-auto text-yellow-300 mb-4" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Tentang Pare EDU HUB
                            </h1>
                        </div>
                        <p className="text-xl max-w-2xl mx-auto">
                            Platform pembelajaran online eksklusif untuk lembaga pendidikan di Pare, 
                            menghubungkan siswa dengan lembaga berkualitas terbaik.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission & Vision */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-8">
                        <Card className="text-center p-8">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Target className="w-8 h-8 text-blue-600" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Misi Kami</h2>
                            <p className="text-gray-600">
                                Menyediakan platform pembelajaran online yang berkualitas tinggi untuk 
                                memudahkan akses pendidikan bahasa Inggris di Pare, dengan fokus pada 
                                kualitas materi dan pengalaman belajar yang optimal.
                            </p>
                        </Card>
                        
                        <Card className="text-center p-8">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-purple-600" />
                            </div>
                            <h2 className="text-2xl font-bold mb-4">Visi Kami</h2>
                            <p className="text-gray-600">
                                Menjadi platform pembelajaran online terdepan di Indonesia yang 
                                menghubungkan siswa dengan lembaga pendidikan berkualitas, 
                                mendorong inovasi dalam pembelajaran bahasa Inggris.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Features */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Mengapa Memilih Pare EDU HUB?
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Kami menyediakan berbagai fitur unggulan untuk memastikan pengalaman belajar yang terbaik
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <BookOpen className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Materi Berkualitas</h3>
                            <p className="text-gray-600 text-sm">
                                Materi pembelajaran yang dirancang oleh instruktur berpengalaman dan teruji
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Zap className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Akses Fleksibel</h3>
                            <p className="text-gray-600 text-sm">
                                Belajar kapan saja dan di mana saja dengan akses 24/7
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MessageSquare className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Support 24/7</h3>
                            <p className="text-gray-600 text-sm">
                                Tim support yang siap membantu Anda kapan saja
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-6 h-6 text-orange-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Pembayaran Aman</h3>
                            <p className="text-gray-600 text-sm">
                                Sistem pembayaran yang aman dan terpercaya melalui QRIS
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-6 h-6 text-red-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Kelas Gratis</h3>
                            <p className="text-gray-600 text-sm">
                                Tersedia kelas gratis untuk memulai perjalanan belajar Anda
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Users className="w-6 h-6 text-yellow-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Komunitas Aktif</h3>
                            <p className="text-gray-600 text-sm">
                                Bergabung dengan komunitas pembelajar yang aktif dan mendukung
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Stats */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-6 text-center">
                        <div>
                            <div className="text-3xl font-bold text-blue-600 mb-2">1000+</div>
                            <div className="text-gray-600">Siswa Aktif</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-green-600 mb-2">50+</div>
                            <div className="text-gray-600">Kelas Tersedia</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-purple-600 mb-2">10+</div>
                            <div className="text-gray-600">Lembaga Partner</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold text-orange-600 mb-2">98%</div>
                            <div className="text-gray-600">Kepuasan Siswa</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Info */}
            <section className="py-16 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold mb-4">
                            Hubungi Kami
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Tim kami siap membantu Anda dengan pertanyaan atau informasi lebih lanjut
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Alamat</h3>
                            <p className="text-gray-600 text-sm">
                                Jl. Brawijaya No. 123<br />
                                Pare, Kediri, Jawa Timur<br />
                                Indonesia
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Phone className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Telepon</h3>
                            <p className="text-gray-600 text-sm">
                                +62 812-3456-7890<br />
                                Senin - Jumat: 08:00 - 17:00<br />
                                Sabtu: 08:00 - 15:00
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Mail className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="font-semibold mb-2">Email</h3>
                            <p className="text-gray-600 text-sm">
                                info@pareeduhub.com<br />
                                support@pareeduhub.com<br />
                                admin@pareeduhub.com
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl font-bold mb-4">
                        Siap Memulai Perjalanan Belajar?
                    </h2>
                    <p className="text-xl mb-8 max-w-2xl mx-auto">
                        Bergabunglah dengan ribuan siswa yang telah merasakan manfaat pembelajaran di Pare EDU HUB
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" className="bg-yellow-400 text-gray-900 hover:bg-yellow-300">
                            Mulai Belajar Sekarang
                        </Button>
                        <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-gray-900">
                            Hubungi Kami
                        </Button>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}