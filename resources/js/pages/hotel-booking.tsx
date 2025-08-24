import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import GuestLayout from '@/layouts/guest-layout';
import { 
    Search, 
    MapPin, 
    Calendar as CalendarIcon,
    Users,
    Star,
    Wifi,
    Car,
    Coffee,
    Parking,
    Pool,
    Gym,
    Restaurant,
    CreditCard,
    ExternalLink,
    Filter,
    SortAsc,
    SortDesc,
    Heart,
    Share2,
    Phone,
    Mail,
    MessageSquare
} from 'lucide-react';
import { format } from 'date-fns';
import { id } from 'date-fns/locale';

interface Hotel {
    id: number;
    name: string;
    location: string;
    rating: number;
    reviews: number;
    price: number;
    originalPrice?: number;
    image: string;
    amenities: string[];
    description: string;
    distance: string;
    isPopular?: boolean;
    isRecommended?: boolean;
    tiketComUrl?: string;
}

const HotelBooking: React.FC = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [checkInDate, setCheckInDate] = useState<Date | undefined>(undefined);
    const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(undefined);
    const [guests, setGuests] = useState<string>('1');
    const [rooms, setRooms] = useState<string>('1');
    const [sortBy, setSortBy] = useState<string>('recommended');
    const [priceRange, setPriceRange] = useState<string>('all');

    const hotels: Hotel[] = [
        {
            id: 1,
            name: 'Hotel Indonesia Kempinski Jakarta',
            location: 'Jakarta Pusat',
            rating: 4.8,
            reviews: 1247,
            price: 2500000,
            originalPrice: 3200000,
            image: 'https://via.placeholder.com/400x250',
            amenities: ['WiFi', 'Parking', 'Pool', 'Gym', 'Restaurant'],
            description: 'Hotel bintang 5 mewah di jantung Jakarta dengan pemandangan kota yang menakjubkan.',
            distance: '0.5 km dari pusat kota',
            isPopular: true,
            tiketComUrl: 'https://www.tiket.com/hotel/indonesia/hotel-indonesia-kempinski-jakarta-103001534534534'
        },
        {
            id: 2,
            name: 'Pullman Jakarta Indonesia',
            location: 'Jakarta Selatan',
            rating: 4.6,
            reviews: 892,
            price: 1800000,
            originalPrice: 2200000,
            image: 'https://via.placeholder.com/400x250',
            amenities: ['WiFi', 'Parking', 'Pool', 'Spa', 'Restaurant'],
            description: 'Hotel modern dengan fasilitas lengkap dan lokasi strategis di Jakarta Selatan.',
            distance: '2.1 km dari SCBD',
            isRecommended: true,
            tiketComUrl: 'https://www.tiket.com/hotel/indonesia/pullman-jakarta-indonesia-103001534534535'
        },
        {
            id: 3,
            name: 'Grand Hyatt Jakarta',
            location: 'Jakarta Pusat',
            rating: 4.7,
            reviews: 1567,
            price: 2200000,
            originalPrice: 2800000,
            image: 'https://via.placeholder.com/400x250',
            amenities: ['WiFi', 'Parking', 'Pool', 'Gym', 'Restaurant', 'Spa'],
            description: 'Hotel premium dengan standar internasional dan pelayanan terbaik.',
            distance: '1.2 km dari Bundaran HI',
            tiketComUrl: 'https://www.tiket.com/hotel/indonesia/grand-hyatt-jakarta-103001534534536'
        },
        {
            id: 4,
            name: 'Hotel Santika Premiere Jakarta',
            location: 'Jakarta Barat',
            rating: 4.4,
            reviews: 634,
            price: 1200000,
            originalPrice: 1500000,
            image: 'https://via.placeholder.com/400x250',
            amenities: ['WiFi', 'Parking', 'Restaurant'],
            description: 'Hotel nyaman dengan harga terjangkau dan lokasi strategis.',
            distance: '3.5 km dari Kota Tua',
            tiketComUrl: 'https://www.tiket.com/hotel/indonesia/hotel-santika-premiere-jakarta-103001534534537'
        },
        {
            id: 5,
            name: 'The Ritz-Carlton Jakarta',
            location: 'Jakarta Selatan',
            rating: 4.9,
            reviews: 2341,
            price: 3500000,
            originalPrice: 4200000,
            image: 'https://via.placeholder.com/400x250',
            amenities: ['WiFi', 'Parking', 'Pool', 'Gym', 'Restaurant', 'Spa', 'Concierge'],
            description: 'Hotel mewah dengan standar tertinggi dan pelayanan eksklusif.',
            distance: '0.8 km dari Plaza Senayan',
            isPopular: true,
            tiketComUrl: 'https://www.tiket.com/hotel/indonesia/the-ritz-carlton-jakarta-103001534534538'
        },
        {
            id: 6,
            name: 'Ibis Jakarta Kemayoran',
            location: 'Jakarta Pusat',
            rating: 4.2,
            reviews: 445,
            price: 800000,
            originalPrice: 1000000,
            image: 'https://via.placeholder.com/400x250',
            amenities: ['WiFi', 'Parking', 'Restaurant'],
            description: 'Hotel budget-friendly dengan kualitas terjamin dan lokasi dekat bandara.',
            distance: '5.2 km dari Bandara Halim',
            tiketComUrl: 'https://www.tiket.com/hotel/indonesia/ibis-jakarta-kemayoran-103001534534539'
        }
    ];

    const locations = ['Jakarta Pusat', 'Jakarta Selatan', 'Jakarta Barat', 'Jakarta Utara', 'Jakarta Timur'];
    const guestOptions = ['1', '2', '3', '4', '5', '6+'];
    const roomOptions = ['1', '2', '3', '4', '5+'];
    const sortOptions = [
        { value: 'recommended', label: 'Direkomendasikan' },
        { value: 'price_low', label: 'Harga Terendah' },
        { value: 'price_high', label: 'Harga Tertinggi' },
        { value: 'rating', label: 'Rating Tertinggi' },
        { value: 'distance', label: 'Jarak Terdekat' }
    ];
    const priceRanges = [
        { value: 'all', label: 'Semua Harga' },
        { value: 'budget', label: 'Budget (< 1M)' },
        { value: 'mid', label: 'Menengah (1M - 2M)' },
        { value: 'luxury', label: 'Luxury (> 2M)' }
    ];

    const filteredHotels = hotels.filter(hotel => {
        const matchesSearch = hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             hotel.location.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesLocation = !selectedLocation || hotel.location === selectedLocation;
        const matchesPriceRange = priceRange === 'all' || 
            (priceRange === 'budget' && hotel.price < 1000000) ||
            (priceRange === 'mid' && hotel.price >= 1000000 && hotel.price <= 2000000) ||
            (priceRange === 'luxury' && hotel.price > 2000000);
        
        return matchesSearch && matchesLocation && matchesPriceRange;
    });

    const sortedHotels = [...filteredHotels].sort((a, b) => {
        switch (sortBy) {
            case 'price_low':
                return a.price - b.price;
            case 'price_high':
                return b.price - a.price;
            case 'rating':
                return b.rating - a.rating;
            case 'distance':
                return parseFloat(a.distance) - parseFloat(b.distance);
            default:
                return 0;
        }
    });

    const getAmenityIcon = (amenity: string) => {
        switch (amenity.toLowerCase()) {
            case 'wifi':
                return <Wifi className="h-4 w-4" />;
            case 'parking':
                return <Parking className="h-4 w-4" />;
            case 'pool':
                return <Pool className="h-4 w-4" />;
            case 'gym':
                return <Gym className="h-4 w-4" />;
            case 'restaurant':
                return <Restaurant className="h-4 w-4" />;
            case 'spa':
                return <Coffee className="h-4 w-4" />;
            default:
                return <Star className="h-4 w-4" />;
        }
    };

    const handleBooking = (hotel: Hotel) => {
        if (hotel.tiketComUrl) {
            window.open(hotel.tiketComUrl, '_blank');
        } else {
            alert('Link booking tidak tersedia saat ini.');
        }
    };

    const handleWhatsApp = (hotel: Hotel) => {
        const message = encodeURIComponent(`Halo, saya tertarik dengan hotel ${hotel.name}. Bisa info lebih lanjut?`);
        const whatsappUrl = `https://wa.me/6281234567890?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    return (
        <GuestLayout
            title="Pesan Penginapan - Pare EDUHUB"
            description="Temukan dan pesan hotel terbaik untuk akomodasi Anda. Integrasi dengan tiket.com untuk booking yang mudah dan aman."
            keywords="hotel booking, penginapan, tiket.com, akomodasi, hotel jakarta"
        >
            {/* Header Section */}
            <section className="bg-gradient-to-r from-blue-500 to-blue-600 py-16 text-white">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h1 className="mb-4 text-4xl font-bold sm:text-5xl">Pesan Penginapan</h1>
                        <p className="text-xl text-blue-100">
                            Temukan hotel terbaik untuk akomodasi Anda. Booking mudah dan aman melalui tiket.com
                        </p>
                        <div className="mt-6 flex flex-wrap justify-center gap-4">
                            <div className="flex items-center gap-2">
                                <CreditCard className="w-5 h-5" />
                                <span>Pembayaran Aman</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Star className="w-5 h-5" />
                                <span>Hotel Terpercaya</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <ExternalLink className="w-5 h-5" />
                                <span>Integrasi tiket.com</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Search Section */}
            <section className="py-8 bg-gray-50">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <Card>
                        <CardContent className="pt-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                                <div className="relative">
                                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                                    <Input
                                        placeholder="Cari hotel..."
                                        value={searchTerm}
                                        onChange={(e) => setSearchTerm(e.target.value)}
                                        className="pl-10"
                                    />
                                </div>
                                
                                <Select value={selectedLocation} onValueChange={setSelectedLocation}>
                                    <SelectTrigger>
                                        <SelectValue placeholder="Pilih lokasi" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="">Semua Lokasi</SelectItem>
                                        {locations.map(location => (
                                            <SelectItem key={location} value={location}>
                                                {location}
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="justify-start text-left font-normal">
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {checkInDate ? format(checkInDate, 'PPP', { locale: id }) : 'Check-in'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkInDate}
                                            onSelect={setCheckInDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>

                                <Popover>
                                    <PopoverTrigger asChild>
                                        <Button variant="outline" className="justify-start text-left font-normal">
                                            <CalendarIcon className="mr-2 h-4 w-4" />
                                            {checkOutDate ? format(checkOutDate, 'PPP', { locale: id }) : 'Check-out'}
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent className="w-auto p-0" align="start">
                                        <Calendar
                                            mode="single"
                                            selected={checkOutDate}
                                            onSelect={setCheckOutDate}
                                            initialFocus
                                        />
                                    </PopoverContent>
                                </Popover>
                            </div>
                            
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
                                <Select value={guests} onValueChange={setGuests}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {guestOptions.map(option => (
                                            <SelectItem key={option} value={option}>
                                                {option} Tamu
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Select value={rooms} onValueChange={setRooms}>
                                    <SelectTrigger>
                                        <SelectValue />
                                    </SelectTrigger>
                                    <SelectContent>
                                        {roomOptions.map(option => (
                                            <SelectItem key={option} value={option}>
                                                {option} Kamar
                                            </SelectItem>
                                        ))}
                                    </SelectContent>
                                </Select>

                                <Button className="w-full">
                                    <Search className="mr-2 h-4 w-4" />
                                    Cari Hotel
                                </Button>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Filters and Sort */}
            <section className="py-4 bg-white border-b">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-4">
                            <span className="text-sm text-muted-foreground">
                                {sortedHotels.length} hotel ditemukan
                            </span>
                        </div>
                        
                        <div className="flex items-center gap-4">
                            <Select value={priceRange} onValueChange={setPriceRange}>
                                <SelectTrigger className="w-40">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {priceRanges.map(range => (
                                        <SelectItem key={range.value} value={range.value}>
                                            {range.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>

                            <Select value={sortBy} onValueChange={setSortBy}>
                                <SelectTrigger className="w-48">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    {sortOptions.map(option => (
                                        <SelectItem key={option.value} value={option.value}>
                                            {option.label}
                                        </SelectItem>
                                    ))}
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>
            </section>

            {/* Hotels Grid */}
            <section className="py-8">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {sortedHotels.map((hotel) => (
                            <Card key={hotel.id} className="overflow-hidden transition-transform hover:scale-105">
                                <div className="relative">
                                    <img src={hotel.image} alt={hotel.name} className="h-48 w-full object-cover" />
                                    <div className="absolute top-2 left-2 flex gap-2">
                                        {hotel.isPopular && <Badge className="bg-orange-500 text-white">Populer</Badge>}
                                        {hotel.isRecommended && <Badge className="bg-green-500 text-white">Direkomendasikan</Badge>}
                                    </div>
                                    {hotel.originalPrice && (
                                        <div className="absolute top-2 right-2">
                                            <Badge className="bg-red-500 text-white">
                                                {Math.round(((hotel.originalPrice - hotel.price) / hotel.originalPrice) * 100)}% OFF
                                            </Badge>
                                        </div>
                                    )}
                                </div>
                                
                                <CardHeader>
                                    <div className="flex items-start justify-between mb-2">
                                        <div className="flex-1">
                                            <h3 className="font-semibold text-lg">{hotel.name}</h3>
                                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                                <MapPin className="h-4 w-4" />
                                                <span>{hotel.location}</span>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <div className="flex items-center gap-1">
                                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                                                <span className="font-semibold">{hotel.rating}</span>
                                            </div>
                                            <p className="text-xs text-muted-foreground">({hotel.reviews} ulasan)</p>
                                        </div>
                                    </div>
                                    
                                    <p className="text-sm text-muted-foreground mb-3">{hotel.description}</p>
                                    
                                    <div className="flex items-center justify-between text-sm text-muted-foreground mb-3">
                                        <span>{hotel.distance}</span>
                                    </div>
                                    
                                    <div className="flex flex-wrap gap-2 mb-3">
                                        {hotel.amenities.slice(0, 4).map((amenity, index) => (
                                            <div key={index} className="flex items-center gap-1 text-xs text-muted-foreground">
                                                {getAmenityIcon(amenity)}
                                                <span>{amenity}</span>
                                            </div>
                                        ))}
                                        {hotel.amenities.length > 4 && (
                                            <span className="text-xs text-muted-foreground">
                                                +{hotel.amenities.length - 4} fasilitas
                                            </span>
                                        )}
                                    </div>
                                </CardHeader>
                                
                                <CardContent>
                                    <div className="flex items-center justify-between mb-4">
                                        <div className="flex items-center gap-2">
                                            <span className="text-2xl font-bold text-primary">
                                                Rp {hotel.price.toLocaleString()}
                                            </span>
                                            {hotel.originalPrice && (
                                                <span className="text-sm text-muted-foreground line-through">
                                                    Rp {hotel.originalPrice.toLocaleString()}
                                                </span>
                                            )}
                                        </div>
                                        <span className="text-sm text-muted-foreground">per malam</span>
                                    </div>
                                    
                                    <div className="flex gap-2">
                                        <Button 
                                            className="flex-1" 
                                            onClick={() => handleBooking(hotel)}
                                        >
                                            <ExternalLink className="mr-2 h-4 w-4" />
                                            Pesan via tiket.com
                                        </Button>
                                        <Button 
                                            variant="outline" 
                                            size="sm"
                                            onClick={() => handleWhatsApp(hotel)}
                                        >
                                            <MessageSquare className="h-4 w-4" />
                                        </Button>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                    
                    {sortedHotels.length === 0 && (
                        <div className="text-center py-16">
                            <MapPin className="w-16 h-16 mx-auto text-gray-400 mb-4" />
                            <h3 className="text-lg font-semibold text-gray-600 mb-2">Tidak ada hotel ditemukan</h3>
                            <p className="text-gray-500">Coba ubah filter pencarian Anda</p>
                        </div>
                    )}
                </div>
            </section>

            {/* Contact Section */}
            <section className="bg-gray-50 py-16">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto text-center">
                        <h2 className="text-3xl font-bold mb-8">Butuh Bantuan?</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <MessageSquare className="w-8 h-8 mx-auto text-green-600 mb-4" />
                                <h3 className="font-semibold mb-2">WhatsApp</h3>
                                <p className="text-sm text-muted-foreground mb-4">Konsultasi cepat dan mudah</p>
                                <Button 
                                    className="w-full"
                                    onClick={() => handleWhatsApp(hotels[0])}
                                >
                                    <MessageSquare className="mr-2 h-4 w-4" />
                                    Chat Sekarang
                                </Button>
                            </div>
                            
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <Phone className="w-8 h-8 mx-auto text-blue-600 mb-4" />
                                <h3 className="font-semibold mb-2">Telepon</h3>
                                <p className="text-sm text-muted-foreground mb-4">Layanan customer service</p>
                                <Button 
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => window.open('tel:+6281234567890', '_self')}
                                >
                                    <Phone className="mr-2 h-4 w-4" />
                                    Hubungi Kami
                                </Button>
                            </div>
                            
                            <div className="p-6 bg-white rounded-lg shadow-sm">
                                <Mail className="w-8 h-8 mx-auto text-purple-600 mb-4" />
                                <h3 className="font-semibold mb-2">Email</h3>
                                <p className="text-sm text-muted-foreground mb-4">Untuk pertanyaan detail</p>
                                <Button 
                                    variant="outline"
                                    className="w-full"
                                    onClick={() => window.open('mailto:booking@pareeduhub.com', '_self')}
                                >
                                    <Mail className="mr-2 h-4 w-4" />
                                    Kirim Email
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </GuestLayout>
    );
};

export default HotelBooking;