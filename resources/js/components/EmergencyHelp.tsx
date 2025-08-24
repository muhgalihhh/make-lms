import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
    Phone, 
    MessageCircle, 
    Heart, 
    Shield, 
    AlertTriangle, 
    Clock,
    MapPin,
    Mail
} from 'lucide-react';

interface EmergencyContact {
    id: number;
    name: string;
    phone: string;
    email?: string;
    description: string;
    type: 'emergency' | 'support' | 'general';
    available: boolean;
}

interface EmergencyHelpProps {
    className?: string;
}

export default function EmergencyHelp({ className = '' }: EmergencyHelpProps) {
    const [selectedContact, setSelectedContact] = useState<EmergencyContact | null>(null);

    const emergencyContacts: EmergencyContact[] = [
        {
            id: 1,
            name: "Tim Darurat 24/7",
            phone: "+62 21 1234 5678",
            email: "emergency@platformlms.com",
            description: "Bantuan darurat untuk masalah teknis atau keamanan",
            type: 'emergency',
            available: true
        },
        {
            id: 2,
            name: "Customer Support",
            phone: "+62 21 2345 6789",
            email: "support@platformlms.com",
            description: "Bantuan umum untuk pengguna platform",
            type: 'support',
            available: true
        },
        {
            id: 3,
            name: "Bantuan Akademik",
            phone: "+62 21 3456 7890",
            email: "academic@platformlms.com",
            description: "Bantuan terkait materi pembelajaran dan kursus",
            type: 'general',
            available: true
        }
    ];

    const handleCall = (contact: EmergencyContact) => {
        window.open(`tel:${contact.phone}`, '_self');
    };

    const handleEmail = (contact: EmergencyContact) => {
        if (contact.email) {
            window.open(`mailto:${contact.email}`, '_self');
        }
    };

    const handleWhatsApp = (contact: EmergencyContact) => {
        const message = encodeURIComponent(`Halo, saya membutuhkan bantuan dari ${contact.name}`);
        const whatsappUrl = `https://wa.me/${contact.phone.replace(/\D/g, '')}?text=${message}`;
        window.open(whatsappUrl, '_blank');
    };

    const getTypeColor = (type: string) => {
        switch (type) {
            case 'emergency':
                return 'bg-red-100 text-red-800';
            case 'support':
                return 'bg-blue-100 text-blue-800';
            case 'general':
                return 'bg-green-100 text-green-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    const getTypeIcon = (type: string) => {
        switch (type) {
            case 'emergency':
                return <AlertTriangle className="w-4 h-4" />;
            case 'support':
                return <MessageCircle className="w-4 h-4" />;
            case 'general':
                return <Heart className="w-4 h-4" />;
            default:
                return <Shield className="w-4 h-4" />;
        }
    };

    return (
        <div className={`space-y-6 ${className}`}>
            <div className="text-center">
                <h2 className="text-3xl font-bold mb-4">Bantuan & Dukungan</h2>
                <p className="text-gray-600 max-w-2xl mx-auto">
                    Tim kami siap membantu Anda 24/7. Pilih layanan yang sesuai dengan kebutuhan Anda.
                </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                {emergencyContacts.map((contact) => (
                    <Card key={contact.id} className="hover:shadow-lg transition-shadow">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    {getTypeIcon(contact.type)}
                                    <Badge className={getTypeColor(contact.type)}>
                                        {contact.type === 'emergency' ? 'Darurat' : 
                                         contact.type === 'support' ? 'Support' : 'Umum'}
                                    </Badge>
                                </div>
                                {contact.available && (
                                    <div className="flex items-center gap-1 text-green-600 text-sm">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <span>Online</span>
                                    </div>
                                )}
                            </div>
                            <CardTitle className="text-lg">{contact.name}</CardTitle>
                            <p className="text-sm text-gray-600">{contact.description}</p>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Phone className="w-4 h-4" />
                                    <span>{contact.phone}</span>
                                </div>
                                {contact.email && (
                                    <div className="flex items-center gap-2 text-sm text-gray-600">
                                        <Mail className="w-4 h-4" />
                                        <span>{contact.email}</span>
                                    </div>
                                )}
                                <div className="flex items-center gap-2 text-sm text-gray-600">
                                    <Clock className="w-4 h-4" />
                                    <span>24/7 Tersedia</span>
                                </div>
                            </div>

                            <div className="flex gap-2">
                                <Button 
                                    className="flex-1" 
                                    onClick={() => handleCall(contact)}
                                    disabled={!contact.available}
                                >
                                    <Phone className="w-4 h-4 mr-2" />
                                    Telepon
                                </Button>
                                <Button 
                                    variant="outline" 
                                    size="sm"
                                    onClick={() => handleWhatsApp(contact)}
                                    disabled={!contact.available}
                                >
                                    💬
                                </Button>
                            </div>

                            {contact.email && (
                                <Button 
                                    variant="outline" 
                                    className="w-full"
                                    onClick={() => handleEmail(contact)}
                                    disabled={!contact.available}
                                >
                                    <Mail className="w-4 h-4 mr-2" />
                                    Kirim Email
                                </Button>
                            )}
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Quick Actions */}
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Shield className="w-5 h-5" />
                        Akses Cepat
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <Button 
                            variant="outline" 
                            className="h-auto p-4 flex flex-col items-center gap-2"
                            onClick={() => {
                                if (typeof window !== 'undefined' && (window as any).Tawk_API) {
                                    (window as any).Tawk_API.maximize();
                                }
                            }}
                        >
                            <MessageCircle className="w-6 h-6" />
                            <span className="text-sm">Live Chat</span>
                        </Button>
                        
                        <Button 
                            variant="outline" 
                            className="h-auto p-4 flex flex-col items-center gap-2"
                            onClick={() => window.open('/faq', '_blank')}
                        >
                            <Shield className="w-6 h-6" />
                            <span className="text-sm">FAQ</span>
                        </Button>
                        
                        <Button 
                            variant="outline" 
                            className="h-auto p-4 flex flex-col items-center gap-2"
                            onClick={() => window.open('/help-center', '_blank')}
                        >
                            <Heart className="w-6 h-6" />
                            <span className="text-sm">Pusat Bantuan</span>
                        </Button>
                        
                        <Button 
                            variant="outline" 
                            className="h-auto p-4 flex flex-col items-center gap-2"
                            onClick={() => window.open('/contact', '_blank')}
                        >
                            <MapPin className="w-6 h-6" />
                            <span className="text-sm">Kontak Kami</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}