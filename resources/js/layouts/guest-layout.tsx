import ThemeToggle from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { BookOpen, ChevronDown, Facebook, Instagram, Linkedin, Menu, Search, Twitter, X, Youtube } from 'lucide-react';
import { useState, type PropsWithChildren, type ReactNode } from 'react';

// --- Types ---
interface GuestLayoutProps extends PropsWithChildren {
    title?: string;
    description?: string;
    keywords?: string;
    showHeader?: boolean;
    showFooter?: boolean;
    className?: string;
    headerClassName?: string;
    footerClassName?: string;
    mainClassName?: string;
}

interface NavigationItem {
    label: string;
    href: string;
    external?: boolean;
    children?: NavigationItem[];
}

interface SocialLink {
    name: string;
    href: string;
    icon: ReactNode;
}

// --- Constants ---
const NAVIGATION_ITEMS: NavigationItem[] = [
    {
        label: 'Beranda',
        href: '/',
    },
    {
        label: 'Kursus',
        href: '/courses',
        children: [
            { label: 'Kelas Gratis', href: '/courses/free' },
            { label: 'Kelas Pro', href: '/courses/pro' },
            { label: 'Sertifikat', href: '/courses/certificates' },
        ],
    },
    {
        label: 'Tentang',
        href: '/about',
    },
    {
        label: 'Kontak',
        href: '/contact',
    },
    {
        label: 'Blog',
        href: '/blog',
    },
];

const SOCIAL_LINKS: SocialLink[] = [
    {
        name: 'Facebook',
        href: 'https://facebook.com',
        icon: <Facebook className="h-5 w-5" />,
    },
    {
        name: 'Twitter',
        href: 'https://twitter.com',
        icon: <Twitter className="h-5 w-5" />,
    },
    {
        name: 'Instagram',
        href: 'https://instagram.com',
        icon: <Instagram className="h-5 w-5" />,
    },
    {
        name: 'YouTube',
        href: 'https://youtube.com',
        icon: <Youtube className="h-5 w-5" />,
    },
    {
        name: 'LinkedIn',
        href: 'https://linkedin.com',
        icon: <Linkedin className="h-5 w-5" />,
    },
];

const FOOTER_LINKS = {
    company: [
        { label: 'Tentang Kami', href: '/about' },
        { label: 'Karir', href: '/careers' },
        { label: 'Tim', href: '/team' },
        { label: 'Press', href: '/press' },
    ],
    resources: [
        { label: 'Blog', href: '/blog' },
        { label: 'Tutorial', href: '/tutorials' },
        { label: 'Dokumentasi', href: '/docs' },
        { label: 'API', href: '/api' },
    ],
    support: [
        { label: 'Bantuan', href: '/help' },
        { label: 'Kontak', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Status', href: '/status' },
    ],
    legal: [
        { label: 'Privasi', href: '/privacy' },
        { label: 'Syarat & Ketentuan', href: '/terms' },
        { label: 'Cookie Policy', href: '/cookies' },
        { label: 'GDPR', href: '/gdpr' },
    ],
};

// --- Components ---
const NavigationDropdown = ({ item }: { item: NavigationItem }) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!item.children) {
        return (
            <a
                href={item.href}
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                target={item.external ? '_blank' : undefined}
                rel={item.external ? 'noopener noreferrer' : undefined}
            >
                {item.label}
            </a>
        );
    }

    return (
        <div className="relative" onMouseEnter={() => setIsOpen(true)} onMouseLeave={() => setIsOpen(false)}>
            <button
                className="flex items-center px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                aria-expanded={isOpen}
                aria-haspopup="true"
            >
                {item.label}
                <ChevronDown className="ml-1 h-4 w-4" />
            </button>
            {isOpen && (
                <div className="ring-opacity-5 absolute left-0 z-50 mt-1 w-48 rounded-md bg-white py-1 shadow-lg ring-1 ring-black dark:bg-gray-800 dark:ring-gray-700">
                    {item.children.map((child, index) => (
                        <a
                            key={index}
                            href={child.href}
                            className="block px-4 py-2 text-sm text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-white"
                            target={child.external ? '_blank' : undefined}
                            rel={child.external ? 'noopener noreferrer' : undefined}
                        >
                            {child.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};

const Header = ({ className }: { className?: string }) => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);

    return (
        <header
            className={cn(
                'sticky top-0 z-40 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 dark:border-gray-800 dark:bg-gray-900/95',
                className,
            )}
        >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex h-16 items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/" className="flex items-center space-x-2">
                            <BookOpen className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold text-gray-900 dark:text-white">AkademiKoding</span>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex md:items-center md:space-x-1">
                        {NAVIGATION_ITEMS.map((item, index) => (
                            <NavigationDropdown key={index} item={item} />
                        ))}
                    </nav>

                    {/* Desktop Actions */}
                    <div className="hidden md:flex md:items-center md:space-x-4">
                        {/* Search */}
                        <button
                            onClick={() => setIsSearchOpen(!isSearchOpen)}
                            className="rounded-full p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                            aria-label="Search"
                        >
                            <Search className="h-5 w-5" />
                        </button>

                        {/* Theme Toggle */}
                        <ThemeToggle />

                        {/* Auth Buttons */}
                        <Button variant="ghost" size="sm">
                            Masuk
                        </Button>
                        <Button size="sm">Daftar</Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="rounded-md p-2 text-gray-400 transition-colors hover:bg-gray-100 hover:text-gray-500 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                            aria-label="Toggle menu"
                        >
                            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </button>
                    </div>
                </div>

                {/* Mobile Navigation */}
                {isMobileMenuOpen && (
                    <div className="md:hidden">
                        <div className="space-y-1 px-2 pt-2 pb-3">
                            {NAVIGATION_ITEMS.map((item, index) => (
                                <div key={index}>
                                    <a
                                        href={item.href}
                                        className="block rounded-md px-3 py-2 text-base font-medium text-gray-700 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
                                    >
                                        {item.label}
                                    </a>
                                    {item.children && (
                                        <div className="mt-1 ml-4 space-y-1">
                                            {item.children.map((child, childIndex) => (
                                                <a
                                                    key={childIndex}
                                                    href={child.href}
                                                    className="block rounded-md px-3 py-2 text-sm text-gray-600 transition-colors hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
                                                >
                                                    {child.label}
                                                </a>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                        <div className="border-t border-gray-200 px-2 py-3 dark:border-gray-700">
                            <div className="mb-3 flex items-center justify-between">
                                <span className="text-sm text-gray-600 dark:text-gray-400">Tema</span>
                                <ThemeToggle />
                            </div>
                            <Button variant="ghost" className="w-full justify-start">
                                Masuk
                            </Button>
                            <Button className="mt-2 w-full">Daftar</Button>
                        </div>
                    </div>
                )}

                {/* Search Bar */}
                {isSearchOpen && (
                    <div className="border-t border-gray-200 px-2 py-3 dark:border-gray-700">
                        <div className="relative">
                            <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Cari kursus, tutorial, atau topik..."
                                className="w-full rounded-md border border-gray-300 bg-white py-2 pr-4 pl-10 text-sm focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400"
                            />
                        </div>
                    </div>
                )}
            </div>
        </header>
    );
};

const Footer = ({ className }: { className?: string }) => {
    return (
        <footer className={cn('bg-gray-900 text-gray-300 dark:bg-gray-950', className)}>
            <div className="container mx-auto px-4 py-12 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-5">
                    {/* Brand */}
                    <div className="lg:col-span-2">
                        <div className="flex items-center space-x-2">
                            <BookOpen className="h-8 w-8 text-primary" />
                            <span className="text-xl font-bold text-white">AkademiKoding</span>
                        </div>
                        <p className="mt-4 max-w-md text-sm text-gray-400">
                            Platform pembelajaran online terpercaya dengan ribuan kursus berkualitas untuk mengembangkan skill digital Anda.
                        </p>
                        <div className="mt-6 flex space-x-4">
                            {SOCIAL_LINKS.map((social) => (
                                <a
                                    key={social.name}
                                    href={social.href}
                                    className="rounded-full bg-gray-800 p-2 text-gray-400 transition-colors hover:bg-gray-700 hover:text-white"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.name}
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Company */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Perusahaan</h3>
                        <ul className="mt-4 space-y-2">
                            {FOOTER_LINKS.company.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Resources */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Sumber Daya</h3>
                        <ul className="mt-4 space-y-2">
                            {FOOTER_LINKS.resources.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Support */}
                    <div>
                        <h3 className="text-sm font-semibold tracking-wider text-white uppercase">Dukungan</h3>
                        <ul className="mt-4 space-y-2">
                            {FOOTER_LINKS.support.map((link) => (
                                <li key={link.label}>
                                    <a href={link.href} className="text-sm text-gray-400 transition-colors hover:text-white">
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="mt-12 border-t border-gray-800 pt-8">
                    <div className="flex flex-col items-center justify-between space-y-4 md:flex-row md:space-y-0">
                        <div className="flex flex-wrap justify-center space-x-6 text-sm text-gray-400">
                            {FOOTER_LINKS.legal.map((link) => (
                                <a key={link.label} href={link.href} className="transition-colors hover:text-white">
                                    {link.label}
                                </a>
                            ))}
                        </div>
                        <p className="text-sm text-gray-400">&copy; {new Date().getFullYear()} AkademiKoding. Semua hak dilindungi.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

// --- Main Component ---
export default function GuestLayout({
    children,
    title = 'AkademiKoding - Platform Pembelajaran Online Terpercaya',
    description = 'Belajar coding, design, dan skill digital lainnya dengan ribuan kursus berkualitas dari para ahli.',
    keywords = 'coding, programming, web development, design, online course, tutorial',
    showHeader = true,
    showFooter = true,
    className,
    headerClassName,
    footerClassName,
    mainClassName,
}: GuestLayoutProps) {
    return (
        <div className={cn('min-h-screen bg-gray-50 dark:bg-gray-900', className)}>
            {/* SEO Meta Tags */}
            <head>
                <title>{title}</title>
                <meta name="description" content={description} />
                <meta name="keywords" content={keywords} />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta property="og:title" content={title} />
                <meta property="og:description" content={description} />
                <meta property="og:type" content="website" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:title" content={title} />
                <meta name="twitter:description" content={description} />
            </head>

            {/* Header */}
            {showHeader && <Header className={headerClassName} />}

            {/* Main Content */}
            <main className={cn('flex-1', mainClassName)}>{children}</main>

            {/* Footer */}
            {showFooter && <Footer className={footerClassName} />}
        </div>
    );
}
