import { Head } from '@inertiajs/react';
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import GuestLayout from '@/layouts/guest-layout';
import {
    Bed,
    Star,
    MapPin,
    Calendar,
    Users,
    Search,
    Filter,
    ExternalLink,
    Phone,
    Mail,
    Globe,
    CheckCircle,
    Award,
    Clock
} from 'lucide-react';

interface Hotel {
    id: number;
    name: string;
    description: string;
    price: string;
    originalPrice: string;
    rating: number;
    reviews: number;
    stars: number;
    location: string;
    distance: string;
    amenities: string[];
    images: string[];
    tiketComUrl: string;
    phone: string;
    email: string;
    website: string;
    isPopular: boolean;
    isNew: boolean;
}

const hotels: Hotel[] = [
    {
        id: 1,
        name: "Hotel Pare English",
        description: "Hotel nyaman dengan lokasi strategis dekat dengan lembaga kursus bahasa Inggris. Cocok untuk siswa yang ingin belajar intensif.",
        price: "Rp 350.000",
        originalPrice: "Rp 450.000",
        rating: 4.8,
        reviews: 1250,
        stars: 4,
        location: "Jl. Brawijaya No. 123, Pare, Kediri",
        distance: "0.5 km dari Pare English Course",
        amenities: [
            "WiFi Gratis",
            "AC",
            "Kamar Mandi Dalam",
            "TV",
            "Sarapan",
            "Parkir Luas"
        ],
        images: ["/images/hotel-pare-english-1.jpg", "/images/hotel-pare-english-2.jpg"],
        tiketComUrl: "https://www.tiket.com/hotel/indonesia/hotel-pare-english-123456",
        phone: "+62 812-3456-7890",
        email: "info@hotelpareenglish.com",
        website: "https://hotelpareenglish.com",
        isPopular: true,
        isNew: false
    },
    {
        id: 2,
        name: "Kampung Inggris Guesthouse",
        description: "Guesthouse dengan suasana kampung yang nyaman dan ramah. Ideal untuk siswa yang ingin merasakan pengalaman belajar yang autentik.",
        price: "Rp 250.000",
        originalPrice: "Rp 300.000",
        rating: 4.6,
        reviews: 890,
        stars: 3,
        location: "Jl. Ahmad Yani No. 45, Pare, Kediri",
        distance: "0.8 km dari Kampung Inggris Global",
        amenities: [
            "WiFi Gratis",
            "Kipas Angin",
            "Kamar Mandi Bersama",
            "Dapur Umum",
            "Taman",
            "Area Bersantai"
        ],
        images: ["/images/guesthouse-kampung-inggris-1.jpg"],
        tiketComUrl: "https://www.tiket.com/hotel/indonesia/kampung-inggris-guesthouse-123457",
        phone: "+62 812-3456-7891",
        email: "hello@kampunginggrisguesthouse.com",
        website: "https://kampunginggrisguesthouse.com",
        isPopular: false,
        isNew: true
    },
    {
        id: 3,
        name: "Pare Language Center Hotel",
        description: "Hotel modern dengan fasilitas lengkap dan lokasi strategis. Cocok untuk siswa yang menginginkan kenyamanan maksimal.",
        price: "Rp 500.000",
        originalPrice: "Rp 600.000",
        rating: 4.9,
        reviews: 650,
        stars: 4,
        location: "Jl. Diponegoro No. 89, Pare, Kediri",
        distance: "1.2 km dari Pare Language Center",
        amenities: [
            "WiFi Gratis",
            "AC",
            "Kamar Mandi Dalam",
            "TV LED",
            "Sarapan Buffet",
            "Kolam Renang",
            "Gym",
            "Restaurant"
        ],
        images: ["/images/pare-language-center-hotel-1.jpg", "/images/pare-language-center-hotel-2.jpg"],
        tiketComUrl: "https://www.tiket.com/hotel/indonesia/pare-language-center-hotel-123458",
        phone: "+62 812-3456-7892",
        email: "reservation@parelanguagecenterhotel.com",
        website: "https://parelanguagecenterhotel.com",
        isPopular: true,
        isNew: false
    },
    {
        id: 4,
        name: "English Village Homestay",
        description: "Homestay dengan suasana keluarga yang hangat. Pengalaman menginap yang personal dan nyaman.",
        price: "Rp 200.000",
        originalPrice: "Rp 250.000",
        rating: 4.5,
        reviews: 450,
        stars: 3,
        location: "Jl. Soekarno-Hatta No. 67, Pare, Kediri",
        distance: "0.3 km dari English Village Pare",
        amenities: [
            "WiFi Gratis",
            "Kipas Angin",
            "Kamar Mandi Bersama",
            "Makan Bersama",
            "Keluarga Ramah",
            "Area Belajar"
        ],
        images: ["/images/english-village-homestay-1.jpg"],
        tiketComUrl: "https://www.tiket.com/hotel/indonesia/english-village-homestay-123459",
        phone: "+62 812-3456-7893",
        email: "stay@englishvillagehomestay.com",
        website: "https://englishvillagehomestay.com",
        isPopular: false,
        isNew: false
    },
    {
        id: 5,
        name: "Pare Student Lodge",
        description: "Lodge khusus untuk siswa dengan harga terjangkau dan fasilitas yang memadai untuk belajar.",
        price: "Rp 180.000",
        originalPrice: "Rp 220.000",
        rating: 4.3,
        reviews: 320,
        stars: 2,
        location: "Jl. Sudirman No. 12, Pare, Kediri",
        distance: "0.6 km dari Basic English Pare",
        amenities: [
            "WiFi Gratis",
            "Kipas Angin",
            "Kamar Mandi Bersama",
            "Dapur Umum",
            "Ruang Belajar",
            "Loker Pribadi"
        ],
        images: ["/images/pare-student-lodge-1.jpg"],
        tiketComUrl: "https://www.tiket.com/hotel/indonesia/pare-student-lodge-123460",
        phone: "+62 812-3456-7894",
        email: "info@parestudentlodge.com",
        website: "https://parestudentlodge.com",
        isPopular: false,
        isNew: true
    },
    {
        id: 6,
        name: "Pare Academy Resort",
        description: "Resort dengan suasana alam yang sejuk dan tenang. Ideal untuk siswa yang ingin fokus belajar dengan lingkungan yang mendukung.",
        price: "Rp 750.000",
        originalPrice: "Rp 900.000",
        rating: 4.7,
        reviews: 280,
        stars: 4,
        location: "Jl. Gatot Subroto No. 34, Pare, Kediri",
        distance: "2.0 km dari Pare English Academy",
        amenities: [
            "WiFi Gratis",
            "AC",
            "Kamar Mandi Dalam",
            "TV",
            "Sarapan",
            "Taman Luas",
            "Area BBQ",
            "Parkir Aman"
        ],
        images: ["/images/pare-academy-resort-1.jpg", "/images/pare-academy-resort-2.jpg"],
        tiketComUrl: "https://www.tiket.com/hotel/indonesia/pare-academy-resort-123461",
        phone: "+62 812-3456-7895",
        email: "booking@pareacademyresort.com",
        website: "https://pareacademyresort.com",
        isPopular: false,
        isNew: false
    }
];

const handleTiketComBooking = (url: string) => {
    window.open(url, '_blank');
};

export default function HotelBooking() {
    const [selectedStars, setSelectedStars] = useState<string>('all');
    const [searchTerm, setSearchTerm] = useState('');
    const [priceRange, setPriceRange] = useState<string>('all');

    const filteredHotels = hotels.filter(hotel => {
        const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            hotel.description.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesStars = selectedStars === 'all' || hotel.stars.toString() === selectedStars;
        
        let matchesPrice = true;
        if (priceRange !== 'all') {
            const price = parseInt(hotel.price.replace(/\D/g, ''));
            switch (priceRange) {
                case 'low':
                    matchesPrice = price <= 300000;
                    break;
                case 'medium':
                    matchesPrice = price > 300000 && price <= 500000;
                    break;
                case 'high':
                    matchesPrice = price > 500000;
                    break;
            }
        }
        
        return matchesSearch && matchesStars && matchesPrice;
    });

    return (
        <GuestLayout>
            <Head title="Booking Hotel - Pare EDU HUB" />
            
            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
                <div className="container mx-auto px-4">
                    <div className="text-center">
                        <div className="mb-6">
                            <Bed className="w-16 h-16 mx-auto text-yellow-300 mb-4" />
                            <h1 className="text-4xl md:text-5xl font-bold mb-4">
                                Booking Hotel
                            </h1>
                        </div>
                        <p className="text-xl max-w-2xl mx-auto">
                            Temukan dan pesan akomodasi terdekat dengan lembaga pendidikan di Pare. 
                            Integrasi dengan Tiket.com untuk pemesanan yang mudah dan aman.
                        </p>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <MapPin className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Lokasi Strategis</h3>
                            <p className="text-gray-600 text-sm">
                                Hotel dekat dengan lembaga kursus untuk kemudahan akses
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <ExternalLink className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Booking via Tiket.com</h3>
                            <p className="text-gray-600 text-sm">
                                Pemesanan aman dan terpercaya melalui platform Tiket.com
                            </p>
                        </Card>
                        
                        <Card className="text-center p-6">
                            <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                                <Award className="w-6 h-6 text-purple-600" />
                            </div>
                            <h3 className="text-lg font-semibold mb-2">Harga Terbaik</h3>
                            <p className="text-gray-600 text-sm">
                                Dapatkan harga terbaik dengan diskon khusus untuk siswa
                            </p>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Search and Filter Section */}
            <section className="py-8 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-4 gap-4">
                        <div className="md:col-span-2">
                            <div className="relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                                <Input
                                    placeholder="Cari hotel..."
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="pl-10"
                                />
                            </div>
                        </div>
                        <div>
                            <Select value={selectedStars} onValueChange={setSelectedStars}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Bintang Hotel" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Semua Bintang</SelectItem>
                                    <SelectItem value="5">5 Bintang</SelectItem>
                                    <SelectItem value="4">4 Bintang</SelectItem>
                                    <SelectItem value="3">3 Bintang</SelectItem>
                                    <SelectItem value="2">2 Bintang</SelectItem>
                                    <SelectItem value="1">1 Bintang</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div>
                            <Select value={priceRange} onValueChange={setPriceRange}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Rentang Harga" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="all">Semua Harga</SelectItem>
                                    <SelectItem value="low">≤ Rp 300.000</SelectItem>
                                    <SelectItem value="medium">Rp 300.000 - 500.000</SelectItem>
                                    <SelectItem value="high">≥ Rp 500.000</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotels Grid */}
            <section className="py-12">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredHotels.map((hotel) => (
                            <Card key={hotel.id} className="hover:shadow-lg transition-shadow duration-300">
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-4">
                                        <div className="flex gap-2">
                                            {hotel.isPopular && (
                                                <Badge className="bg-orange-500 text-white">
                                                    Terpopuler
                                                </Badge>
                                            )}
                                            {hotel.isNew && (
                                                <Badge className="bg-green-500 text-white">
                                                    Baru
                                                </Badge>
                                            )}
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <Star className="w-4 h-4 text-yellow-400 fill-current" />
                                            <span className="text-sm font-medium">{hotel.rating}</span>
                                        </div>
                                    </div>
                                    
                                    <CardTitle className="text-lg mb-2">{hotel.name}</CardTitle>
                                    <p className="text-gray-600 text-sm mb-4">{hotel.description}</p>
                                    
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-4 text-sm text-gray-500">
                                            <div className="flex items-center gap-1">
                                                <MapPin className="w-4 h-4" />
                                                <span>{hotel.distance}</span>
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Users className="w-4 h-4" />
                                                <span>{hotel.reviews} ulasan</span>
                                            </div>
                                        </div>
                                        <div className="flex">
                                            {[...Array(hotel.stars)].map((_, i) => (
                                                <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                                            ))}
                                        </div>
                                    </div>
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="mb-4">
                                        <div className="flex items-center gap-2 mb-2">
                                            <span className="text-2xl font-bold text-blue-600">
                                                {hotel.price}
                                            </span>
                                            <span className="text-sm text-gray-500 line-through">
                                                {hotel.originalPrice}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2 text-sm text-gray-500">
                                            <MapPin className="w-4 h-4" />
                                            <span>{hotel.location}</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mb-4">
                                        <h4 className="font-semibold text-sm mb-2">Fasilitas:</h4>
                                        <div className="flex flex-wrap gap-1">
                                            {hotel.amenities.slice(0, 4).map((amenity, index) => (
                                                <Badge key={index} variant="outline" className="text-xs">
                                                    {amenity}
                                                </Badge>
                                            ))}
                                            {hotel.amenities.length > 4 && (
                                                <Badge variant="outline" className="text-xs">
                                                    +{hotel.amenities.length - 4} lainnya
                                                </Badge>
                                            )}
                                        </div>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        <Button 
                                            className="flex-1 bg-blue-600 hover:bg-blue-700"
                                            onClick={() => handleTiketComBooking(hotel.tiketComUrl)}
                                        >
                                            <ExternalLink className="w-4 h-4 mr-2" />
                                            Booking via Tiket.com
                                        </Button>
                                        <Button variant="outline" size="sm">
                                            <Phone className="w-4 h-4" />
                                        </Button>
                                    </div>
                                    
                                    <div className="mt-4 p-3 bg-blue-50 rounded-lg">
                                        <div className="flex items-center gap-2 text-sm text-blue-700">
                                            <CheckCircle className="w-4 h-4" />
                                            <span className="font-medium">Diskon Khusus Siswa</span>
                                        </div>
                                        <p className="text-xs text-blue-600 mt-1">
                                            Dapatkan diskon khusus untuk siswa yang mengikuti kursus di Pare.
                                        </p>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {filteredHotels.length === 0 && (
                        <div className="text-center py-12">
                            <Bed className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                            <h3 className="text-xl font-semibold text-gray-600 mb-2">
                                Tidak ada hotel ditemukan
                            </h3>
                            <p className="text-gray-500">
                                Coba ubah filter pencarian Anda
                            </p>
                        </div>
                    )}
                </div>
            </section>

            {/* Booking Tips Section */}
            <section className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-8">
                        <h2 className="text-3xl font-bold mb-4">
                            Tips Booking Hotel
                        </h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Beberapa tips untuk mendapatkan pengalaman menginap yang terbaik di Pare
                        </p>
                    </div>
                    
                    <div className="grid md:grid-cols-3 gap-6">
                        <Card className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <Clock className="w-6 h-6 text-blue-600" />
                                <h3 className="font-semibold">Booking Lebih Awal</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Pesan hotel minimal 1-2 minggu sebelum kedatangan untuk mendapatkan harga terbaik dan ketersediaan kamar.
                            </p>
                        </Card>
                        
                        <Card className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <MapPin className="w-6 h-6 text-green-600" />
                                <h3 className="font-semibold">Pilih Lokasi Strategis</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Pilih hotel yang dekat dengan lembaga kursus untuk menghemat waktu dan biaya transportasi.
                            </p>
                        </Card>
                        
                        <Card className="p-6">
                            <div className="flex items-center gap-3 mb-4">
                                <CheckCircle className="w-6 h-6 text-purple-600" />
                                <h3 className="font-semibold">Cek Fasilitas</h3>
                            </div>
                            <p className="text-sm text-gray-600">
                                Pastikan hotel memiliki fasilitas yang Anda butuhkan seperti WiFi, AC, dan area belajar yang nyaman.
                            </p>
                        </Card>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
}