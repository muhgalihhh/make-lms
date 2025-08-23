import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { 
    BookOpen, 
    Building2, 
    CreditCard, 
    Menu, 
    Users, 
    LayoutDashboard,
    Tag,
    BarChart3,
    Settings,
    Shield
} from 'lucide-react';

interface AdminSidebarProps {
    breadcrumbs?: BreadcrumbItem[];
}

const menuItems = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
        icon: LayoutDashboard,
    },
    {
        title: 'Users',
        href: route('admin.users.index'),
        icon: Users,
    },
    {
        title: 'Courses',
        href: route('admin.courses.index'),
        icon: BookOpen,
    },
    {
        title: 'Categories',
        href: route('admin.categories.index'),
        icon: Tag,
    },
    {
        title: 'Institutions',
        href: route('admin.institutions.index'),
        icon: Building2,
    },
    {
        title: 'Transactions',
        href: route('admin.transactions.index'),
        icon: CreditCard,
    },
    {
        title: 'Analytics',
        href: route('admin.analytics'),
        icon: BarChart3,
    },
    {
        title: 'Settings',
        href: route('admin.settings'),
        icon: Settings,
    },
];

export function AdminSidebar({ breadcrumbs }: AdminSidebarProps) {
    const { url } = usePage();

    return (
        <>
            {/* Mobile Sidebar */}
            <Sheet>
                <SheetTrigger asChild>
                    <Button variant="ghost" size="sm" className="md:hidden">
                        <Menu className="h-5 w-5" />
                        <span className="sr-only">Toggle sidebar</span>
                    </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-64 p-0">
                    <AdminSidebarContent />
                </SheetContent>
            </Sheet>

            {/* Desktop Sidebar */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
                <AdminSidebarContent />
            </div>
        </>
    );
}

function AdminSidebarContent() {
    const { url } = usePage();

    return (
        <div className="flex flex-grow flex-col border-r bg-gradient-to-b from-background to-muted/20">
            {/* Logo Section */}
            <div className="flex h-16 items-center border-b px-6 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <Link href={route('admin.dashboard')} className="flex items-center space-x-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-primary/80 shadow-lg">
                        <Shield className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-lg font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
                            Admin Panel
                        </span>
                        <span className="text-xs text-muted-foreground">LMS Management</span>
                    </div>
                </Link>
            </div>

            {/* Navigation */}
            <ScrollArea className="flex-1 px-3 py-4">
                <nav className="space-y-1">
                    {menuItems.map((item) => {
                        const isActive = url.startsWith(item.href);
                        return (
                            <Link key={item.href} href={item.href}>
                                <Button
                                    variant={isActive ? 'secondary' : 'ghost'}
                                    className={cn(
                                        'w-full justify-start h-11 px-3',
                                        isActive 
                                            ? 'bg-secondary text-secondary-foreground shadow-sm border border-secondary/50' 
                                            : 'hover:bg-muted/50 hover:text-foreground'
                                    )}
                                >
                                    {item.icon && (
                                        <item.icon className={cn(
                                            "mr-3 h-4 w-4",
                                            isActive ? "text-secondary-foreground" : "text-muted-foreground"
                                        )} />
                                    )}
                                    <span className="font-medium">{item.title}</span>
                                    {isActive && (
                                        <div className="ml-auto h-2 w-2 rounded-full bg-primary" />
                                    )}
                                </Button>
                            </Link>
                        );
                    })}
                </nav>
            </ScrollArea>

            {/* Footer */}
            <div className="border-t p-4 bg-muted/20">
                <div className="rounded-lg bg-background/50 p-3 backdrop-blur supports-[backdrop-filter]:bg-background/30">
                    <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse" />
                        <div className="text-sm">
                            <p className="font-medium text-foreground">System Status</p>
                            <p className="text-xs text-muted-foreground">All systems operational</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
