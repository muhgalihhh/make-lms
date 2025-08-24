import { useState } from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
    BookOpen,
    Building2,
    Users,
    Settings,
    LogOut,
    User,
    Crown,
    Home,
    GraduationCap,
    CreditCard,
    MessageSquare,
    Bed
} from 'lucide-react';

interface AuthenticatedLayoutProps {
    user: {
        id: number;
        name: string;
        email: string;
        role: string;
    };
    children: React.ReactNode;
}

export default function AuthenticatedLayout({ user, children }: AuthenticatedLayoutProps) {
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const navigation = [
        { name: 'Beranda', href: '/', icon: Home },
        { name: 'Lembaga', href: '/institutions', icon: Building2 },
        { name: 'Kelas Pro', href: '/pro-courses', icon: Crown },
        { name: 'Kelas Gratis', href: '/free-courses', icon: GraduationCap },
        { name: 'Katalog WA', href: '/catalog-wa', icon: MessageSquare },
        { name: 'Booking Hotel', href: '/hotel-booking', icon: Bed },
    ];

    const userNavigation = [
        { name: 'Dashboard', href: '/dashboard', icon: Home },
        { name: 'Kelas Saya', href: '/my-courses', icon: BookOpen },
        { name: 'Transaksi', href: '/transactions', icon: CreditCard },
        { name: 'Profil', href: '/profile', icon: User },
    ];

    const adminNavigation = [
        { name: 'Dashboard', href: '/admin', icon: Home },
        { name: 'Kelola Users', href: '/admin/users', icon: Users },
        { name: 'Kelola Lembaga', href: '/admin/institutions', icon: Building2 },
        { name: 'Kelola Kelas', href: '/admin/courses', icon: BookOpen },
        { name: 'Pengaturan', href: '/admin/settings', icon: Settings },
    ];

    const currentNavigation = user.role === 'admin' ? adminNavigation : userNavigation;

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16">
                        {/* Logo */}
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                                    <GraduationCap className="w-5 h-5 text-white" />
                                </div>
                                <span className="text-xl font-bold text-gray-900">Pare EDU HUB</span>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <nav className="hidden md:flex space-x-8">
                            {navigation.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="text-gray-600 hover:text-gray-900 px-3 py-2 text-sm font-medium flex items-center gap-2"
                                >
                                    <item.icon className="w-4 h-4" />
                                    {item.name}
                                </Link>
                            ))}
                        </nav>

                        {/* User Menu */}
                        <div className="flex items-center space-x-4">
                            {/* User Dropdown */}
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                                        <div className="h-8 w-8 rounded-full bg-blue-600 flex items-center justify-center">
                                            <span className="text-sm font-medium text-white">
                                                {user.name.charAt(0).toUpperCase()}
                                            </span>
                                        </div>
                                    </Button>
                                </DropdownMenuTrigger>
                                <DropdownMenuContent className="w-56" align="end" forceMount>
                                    <DropdownMenuLabel className="font-normal">
                                        <div className="flex flex-col space-y-1">
                                            <p className="text-sm font-medium leading-none">{user.name}</p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                {user.email}
                                            </p>
                                            <p className="text-xs leading-none text-muted-foreground">
                                                Role: {user.role === 'admin' ? 'Admin' : 'User'}
                                            </p>
                                        </div>
                                    </DropdownMenuLabel>
                                    <DropdownMenuSeparator />
                                    {currentNavigation.map((item) => (
                                        <DropdownMenuItem key={item.name} asChild>
                                            <Link href={item.href} className="flex items-center gap-2">
                                                <item.icon className="w-4 h-4" />
                                                {item.name}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                    <DropdownMenuSeparator />
                                    <DropdownMenuItem asChild>
                                        <Link href="/logout" method="post" className="flex items-center gap-2 text-red-600">
                                            <LogOut className="w-4 h-4" />
                                            Logout
                                        </Link>
                                    </DropdownMenuItem>
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                <div className="px-4 py-6 sm:px-0">
                    {children}
                </div>
            </main>
        </div>
    );
}