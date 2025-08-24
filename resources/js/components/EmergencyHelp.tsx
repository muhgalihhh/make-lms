import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Phone, MessageSquare, MapPin, Clock, Shield, Heart, Users } from 'lucide-react';

interface EmergencyContact {
    id: number;
    name: string;
    type: 'police' | 'hospital' | 'fire' | 'ambulance' | 'support';
    phone: string;
    whatsapp?: string;
    address?: string;
    description: string;
    is24Hours: boolean;
}

const emergencyContacts: EmergencyContact[] = [
    {
        id: 1,
        name: "Polisi Pare",
        type: 'police',
        phone: "110",
        whatsapp: "+6281234567890",
        address: "Jl. Brawijaya No. 45, Pare, Kediri",
        description: "Kantor Polisi Pare untuk laporan darurat dan keamanan",
        is24Hours: true
    },
    {
        id: 2,
        name: "RSUD Pare",
        type: 'hospital',
        phone: "+62 354 123456",
        whatsapp: "+6281234567891",
        address: "Jl. Ahmad Yani No. 67, Pare, Kediri",
        description: "Rumah Sakit Umum Daerah Pare untuk layanan kesehatan darurat",
        is24Hours: true
    },
    {
        id: 3,
        name: "Pemadam Kebakaran",
        type: 'fire',
        phone: "113",
        whatsapp: "+6281234567892",
        address: "Jl. Soekarno-Hatta No. 23, Pare, Kediri",
        description: "Tim pemadam kebakaran untuk keadaan darurat kebakaran",
        is24Hours: true
    },
    {
        id: 4,
        name: "Ambulans Pare",
        type: 'ambulance',
        phone: "119",
        whatsapp: "+6281234567893",
        address: "Jl. Diponegoro No. 89, Pare, Kediri",
        description: "Layanan ambulans untuk transportasi medis darurat",
        is24Hours: true
    },
    {
        id: 5,
        name: "Pare EDU HUB Support",
        type: 'support',
        phone: "+6281234567894",
        whatsapp: "+6281234567894",
        address: "Jl. Gatot Subroto No. 12, Pare, Kediri",
        description: "Tim support Pare EDU HUB untuk bantuan teknis dan informasi",
        is24Hours: false
    }
];

const getContactIcon = (type: string) => {
    switch (type) {
        case 'police':
            return <Shield className="w-5 h-5 text-blue-600" />;
        case 'hospital':
            return <Heart className="w-5 h-5 text-red-600" />;
        case 'fire':
            return <Shield className="w-5 h-5 text-orange-600" />;
        case 'ambulance':
            return <Heart className="w-5 h-5 text-red-500" />;
        case 'support':
            return <Users className="w-5 h-5 text-green-600" />;
        default:
            return <Phone className="w-5 h-5 text-gray-600" />;
    }
};

const getContactColor = (type: string) => {
    switch (type) {
        case 'police':
            return 'bg-blue-50 border-blue-200';
        case 'hospital':
            return 'bg-red-50 border-red-200';
        case 'fire':
            return 'bg-orange-50 border-orange-200';
        case 'ambulance':
            return 'bg-red-50 border-red-200';
        case 'support':
            return 'bg-green-50 border-green-200';
        default:
            return 'bg-gray-50 border-gray-200';
    }
};

const getContactBadgeColor = (type: string) => {
    switch (type) {
        case 'police':
            return 'bg-blue-600 text-white';
        case 'hospital':
            return 'bg-red-600 text-white';
        case 'fire':
            return 'bg-orange-600 text-white';
        case 'ambulance':
            return 'bg-red-500 text-white';
        case 'support':
            return 'bg-green-600 text-white';
        default:
            return 'bg-gray-600 text-white';
    }
};

const handleCall = (phone: string) => {
    window.open(`tel:${phone}`, '_self');
};

const handleWhatsApp = (whatsapp: string, name: string) => {
    const message = `Halo, saya membutuhkan bantuan darurat dari ${name}. Mohon bantuannya.`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/${whatsapp}?text=${encodedMessage}`, '_blank');
};

export default function EmergencyHelp() {
    return (
        <div className="w-full">
            <div className="text-center mb-8">
                <h2 className="text-3xl font-bold mb-4">
                    Bantuan Darurat
                </h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Kontak darurat untuk situasi yang membutuhkan bantuan segera. 
                    Tim kami siap membantu 24/7 untuk keamanan dan kenyamanan Anda.
                </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {emergencyContacts.map((contact) => (
                    <Card key={contact.id} className={`${getContactColor(contact.type)} hover:shadow-lg transition-shadow duration-300`}>
                        <CardHeader>
                            <div className="flex items-start justify-between">
                                <div className="flex items-center gap-3">
                                    {getContactIcon(contact.type)}
                                    <div>
                                        <CardTitle className="text-lg">{contact.name}</CardTitle>
                                        <Badge className={getContactBadgeColor(contact.type)}>
                                            {contact.type === 'police' && 'Polisi'}
                                            {contact.type === 'hospital' && 'Rumah Sakit'}
                                            {contact.type === 'fire' && 'Pemadam'}
                                            {contact.type === 'ambulance' && 'Ambulans'}
                                            {contact.type === 'support' && 'Support'}
                                        </Badge>
                                    </div>
                                </div>
                                {contact.is24Hours && (
                                    <Badge variant="outline" className="border-green-500 text-green-700">
                                        <Clock className="w-3 h-3 mr-1" />
                                        24 Jam
                                    </Badge>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-gray-600 text-sm mb-4">
                                {contact.description}
                            </p>
                            
                            {contact.address && (
                                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                                    <MapPin className="w-4 h-4" />
                                    <span>{contact.address}</span>
                                </div>
                            )}
                            
                            <div className="space-y-2">
                                <Button 
                                    className="w-full bg-red-600 hover:bg-red-700"
                                    onClick={() => handleCall(contact.phone)}
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Panggil {contact.phone}
                                </Button>
                                
                                {contact.whatsapp && (
                                    <Button 
                                        variant="outline" 
                                        className="w-full"
                                        onClick={() => handleWhatsApp(contact.whatsapp!, contact.name)}
                                    >
                                        <MessageSquare className="w-4 h-4 mr-2" />
                                        WhatsApp
                                    </Button>
                                )}
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
            
            <div className="mt-8 p-6 bg-yellow-50 border border-yellow-200 rounded-lg">
                <div className="text-center">
                    <Shield className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold text-yellow-800 mb-2">
                        Keamanan Anda Prioritas Kami
                    </h3>
                    <p className="text-yellow-700 mb-4">
                        Jangan ragu untuk menghubungi tim darurat jika Anda membutuhkan bantuan. 
                        Tim kami siap membantu kapan saja.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button 
                            className="bg-red-600 hover:bg-red-700"
                            onClick={() => handleCall("110")}
                        >
                            <Phone className="w-4 h-4 mr-2" />
                            Panggil Darurat 110
                        </Button>
                        <Button 
                            variant="outline" 
                            className="border-yellow-600 text-yellow-700 hover:bg-yellow-100"
                            onClick={() => handleWhatsApp("+6281234567894", "Pare EDU HUB Support")}
                        >
                            <MessageSquare className="w-4 h-4 mr-2" />
                            Hubungi Support
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
}