import { NavFooter } from '@/components/nav-footer';
import { NavMain } from '@/components/nav-main';
import { NavUser } from '@/components/nav-user';
import { type NavItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Folder, LayoutGrid, Home, Users, Settings } from 'lucide-react';
import AppLogo from './app-logo';
import AppLogoIcon from './app-logo-icon';

const mainNavItems: NavItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
        icon: Home,
    },
    {
        title: 'Users',
        href: '/users',
        icon: Users,
    },
    {
        title: 'Settings',
        href: '/settings',
        icon: Settings,
    },
];

const footerNavItems: NavItem[] = [
    {
        title: 'Repository',
        href: 'https://github.com/laravel/react-starter-kit',
        icon: Folder,
    },
    {
        title: 'Documentation',
        href: 'https://laravel.com/docs/starter-kits#react',
        icon: BookOpen,
    },
];

interface AppSidebarProps {
    collapsed?: boolean;
}

export function AppSidebar({ collapsed = false }: AppSidebarProps) {
    return (
        <div className="flex h-full flex-col bg-sidebar">
            {/* Header */}
            <div className="flex h-16 items-center border-b border-sidebar-border px-4">
                <Link href="/dashboard" prefetch className="flex items-center space-x-2">
                    {collapsed ? (
                        <AppLogoIcon className="h-6 w-6 fill-current text-black dark:text-white" />
                    ) : (
                        <AppLogo />
                    )}
                </Link>
            </div>

            {/* Navigation */}
            <div className="flex-1 overflow-y-auto">
                <nav className="space-y-1 p-4">
                    {mainNavItems.map((item) => (
                        <Link
                            key={item.title}
                            href={item.href}
                            className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                                collapsed ? 'justify-center' : 'space-x-3'
                            }`}
                        >
                            {item.icon && <item.icon className="h-5 w-5" />}
                            {!collapsed && <span>{item.title}</span>}
                        </Link>
                    ))}
                </nav>
            </div>

            {/* Footer */}
            <div className="border-t border-sidebar-border p-4">
                <div className="space-y-1">
                    {footerNavItems.map((item) => (
                        <a
                            key={item.title}
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`group flex items-center rounded-lg px-3 py-2 text-sm font-medium transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground ${
                                collapsed ? 'justify-center' : 'space-x-3'
                            }`}
                        >
                            {item.icon && <item.icon className="h-5 w-5" />}
                            {!collapsed && <span>{item.title}</span>}
                        </a>
                    ))}
                </div>
                
                {/* User Section */}
                <div className="mt-4 pt-4 border-t border-sidebar-border">
                    <NavUser collapsed={collapsed} />
                </div>
            </div>
        </div>
    );
}
