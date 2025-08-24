import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    Building2,
    BookOpen,
    Award,
    MessageSquare,
    Bed,
    Menu,
    X,
    ChevronDown,
    User,
    Crown,
    Heart,
    Settings,
    LogOut
} from 'lucide-react';

const LMSNavigation: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const location = useLocation();

    const navigationItems = [
        {
            name: 'Beranda',
            href: '/',
            icon: null
        },
        {
            name: 'Lembaga',
            href: '/institutions',
            icon: <Building2 className="h-4 w-4" />
        },
        {
            name: 'Kelas Pro',
            href: '/pro-courses',
            icon: <Crown className="h-4 w-4" />
        },
        {
            name: 'Kelas Gratis',
            href: '/free-courses',
            icon: <BookOpen className="h-4 w-4" />
        },
        {
            name: 'Katalog WA',
            href: '/catalog-wa',
            icon: <MessageSquare className="h-4 w-4" />
        },
        {
            name: 'Penginapan',
            href: '/hotel-booking',
            icon: <Bed className="h-4 w-4" />
        }
    ];

    const isActive = (href: string) => {
        if (href === '/') {
            return location.pathname === '/';
        }
        return location.pathname.startsWith(href);
    };

    return (
        <nav className="bg-white shadow-sm border-b sticky top-0 z-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                                <Award className="h-5 w-5 text-white" />
                            </div>
                            <span className="font-bold text-xl text-primary">Pare EDUHUB</span>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navigationItems.map((item) => (
                            <Link
                                key={item.name}
                                to={item.href}
                                className={`flex items-center space-x-1 px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                                    isActive(item.href)
                                        ? 'text-primary bg-primary/10'
                                        : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                }`}
                            >
                                {item.icon && item.icon}
                                <span>{item.name}</span>
                            </Link>
                        ))}
                    </div>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex items-center space-x-4">
                        <Button variant="outline" size="sm">
                            <Heart className="h-4 w-4 mr-2" />
                            Favorit
                        </Button>
                        
                        <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                                <Button variant="outline" size="sm">
                                    <User className="h-4 w-4 mr-2" />
                                    Akun
                                    <ChevronDown className="h-4 w-4 ml-1" />
                                </Button>
                            </DropdownMenuTrigger>
                            <DropdownMenuContent align="end" className="w-48">
                                <DropdownMenuItem>
                                    <User className="h-4 w-4 mr-2" />
                                    Profil Saya
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <BookOpen className="h-4 w-4 mr-2" />
                                    Kursus Saya
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Crown className="h-4 w-4 mr-2" />
                                    Upgrade Premium
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <Settings className="h-4 w-4 mr-2" />
                                    Pengaturan
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <LogOut className="h-4 w-4 mr-2" />
                                    Keluar
                                </DropdownMenuItem>
                            </DropdownMenuContent>
                        </DropdownMenu>

                        <Button size="sm">
                            <MessageSquare className="h-4 w-4 mr-2" />
                            Konsultasi
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <Button
                            variant="outline"
                            size="sm"
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        >
                            {isMobileMenuOpen ? (
                                <X className="h-4 w-4" />
                            ) : (
                                <Menu className="h-4 w-4" />
                            )}
                        </Button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden border-t">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigationItems.map((item) => (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`flex items-center space-x-2 px-3 py-2 rounded-md text-base font-medium transition-colors ${
                                        isActive(item.href)
                                            ? 'text-primary bg-primary/10'
                                            : 'text-gray-600 hover:text-primary hover:bg-gray-50'
                                    }`}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                >
                                    {item.icon && item.icon}
                                    <span>{item.name}</span>
                                </Link>
                            ))}
                            
                            <div className="pt-4 space-y-2">
                                <Button variant="outline" className="w-full justify-start">
                                    <Heart className="h-4 w-4 mr-2" />
                                    Favorit
                                </Button>
                                <Button variant="outline" className="w-full justify-start">
                                    <User className="h-4 w-4 mr-2" />
                                    Akun Saya
                                </Button>
                                <Button className="w-full justify-start">
                                    <MessageSquare className="h-4 w-4 mr-2" />
                                    Konsultasi
                                </Button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default LMSNavigation;