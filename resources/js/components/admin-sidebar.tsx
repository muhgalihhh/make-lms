import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';
import { type BreadcrumbItem } from '@/types';
import { Link, usePage } from '@inertiajs/react';
import { BookOpen, Building2, CreditCard, Menu, Users, LayoutDashboard, Tag, ChevronLeft, ChevronRight, Home, Maximize2, Minimize2 } from 'lucide-react';
import { useSidebar } from '@/hooks/use-sidebar';
import { useEffect, useRef, Suspense } from 'react';
import { SidebarErrorBoundary } from './sidebar-error-boundary';
import { SidebarSkeleton } from './sidebar-skeleton';

interface AdminSidebarProps {
    breadcrumbs?: BreadcrumbItem[];
}

const menuItems = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
        icon: LayoutDashboard,
        description: 'Overview and analytics',
    },
    {
        title: 'Users',
        href: route('admin.users.index'),
        icon: Users,
        description: 'Manage user accounts',
    },
    {
        title: 'Courses',
        href: route('admin.courses.index'),
        icon: BookOpen,
        description: 'Course management',
    },
    {
        title: 'Categories',
        href: route('admin.categories.index'),
        icon: Tag,
        description: 'Course categories',
    },
    {
        title: 'Profil Institusi',
        href: route('admin.institutions.index'),
        icon: Building2,
        description: 'Institution settings',
    },
    {
        title: 'Transactions',
        href: route('admin.transactions.index'),
        icon: CreditCard,
        description: 'Payment transactions',
    },
];

export function AdminSidebar({ breadcrumbs }: AdminSidebarProps) {
    const { url } = usePage();
    const { isCollapsed, isMobile, toggleSidebar } = useSidebar();
    const sidebarRef = useRef<HTMLDivElement>(null);

    // Close mobile sidebar when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (isMobile && sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                // This will be handled by the Sheet component
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isMobile]);

    return (
        <SidebarErrorBoundary>
            <Suspense fallback={<SidebarSkeleton isCollapsed={isCollapsed} />}>
                <>
                    {/* Mobile Sidebar */}
                    <Sheet>
                        <SheetTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="sm" 
                                className="md:hidden"
                                aria-label="Open sidebar menu"
                            >
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle sidebar</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent 
                            side="left" 
                            className="w-80 p-0 border-r"
                            ref={sidebarRef}
                        >
                            <AdminSidebarContent 
                                isCollapsed={false} 
                                toggleSidebar={toggleSidebar}
                                isMobile={true}
                            />
                        </SheetContent>
                    </Sheet>

                    {/* Desktop Sidebar */}
                    <div 
                        ref={sidebarRef}
                        className={cn(
                            "hidden md:flex md:flex-col transition-all duration-300 ease-in-out border-r bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60",
                            isCollapsed ? "md:w-16" : "md:w-64"
                        )}
                        role="navigation"
                        aria-label="Admin navigation"
                    >
                        <AdminSidebarContent 
                            isCollapsed={isCollapsed} 
                            toggleSidebar={toggleSidebar}
                            isMobile={false}
                        />
                    </div>
                </>
            </Suspense>
        </SidebarErrorBoundary>
    );
}

interface AdminSidebarContentProps {
    isCollapsed?: boolean;
    toggleSidebar?: () => void;
    isMobile?: boolean;
}

// Sidebar Status Component
function SidebarStatus({ isCollapsed, isMobile }: { isCollapsed: boolean; isMobile: boolean }) {
    if (isMobile) return null;

    return (
        <div className="px-3 py-2 border-t">
            <div className="flex items-center justify-between text-xs text-muted-foreground">
                <span>Sidebar</span>
                <Badge variant="outline" className="text-xs">
                    {isCollapsed ? (
                        <div className="flex items-center gap-1">
                            <Minimize2 className="h-3 w-3" />
                            <span>Collapsed</span>
                        </div>
                    ) : (
                        <div className="flex items-center gap-1">
                            <Maximize2 className="h-3 w-3" />
                            <span>Expanded</span>
                        </div>
                    )}
                </Badge>
            </div>
        </div>
    );
}

function AdminSidebarContent({ isCollapsed = false, toggleSidebar, isMobile = false }: AdminSidebarContentProps) {
    const { url } = usePage();

    return (
        <TooltipProvider delayDuration={300}>
            <div className="flex flex-grow flex-col h-full">
                {/* Header */}
                <div className="flex h-16 items-center border-b px-4 shrink-0">
                    <div className="flex items-center justify-between w-full">
                        <Link 
                            href={route('admin.dashboard')} 
                            className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                            aria-label="Go to admin dashboard"
                        >
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shrink-0">
                                <Home className="h-4 w-4 text-primary-foreground" />
                            </div>
                            {!isCollapsed && (
                                <span className="text-lg font-semibold truncate">
                                    Admin Panel
                                </span>
                            )}
                        </Link>
                        {!isCollapsed && toggleSidebar && !isMobile && (
                            <Tooltip>
                                <TooltipTrigger asChild>
                                    <Button
                                        variant="ghost"
                                        size="sm"
                                        onClick={toggleSidebar}
                                        className="h-8 w-8 p-0 shrink-0 hover:bg-accent"
                                        aria-label="Collapse sidebar"
                                    >
                                        <ChevronLeft className="h-4 w-4" />
                                    </Button>
                                </TooltipTrigger>
                                <TooltipContent side="right">
                                    <p>Collapse sidebar</p>
                                </TooltipContent>
                            </Tooltip>
                        )}
                    </div>
                </div>

                {/* Navigation */}
                <ScrollArea className="flex-1 px-3 py-4">
                    <nav className="space-y-1" role="navigation" aria-label="Main navigation">
                        {menuItems.map((item) => {
                            const isActive = url.startsWith(item.href);
                            const menuItem = (
                                <Link 
                                    key={item.href} 
                                    href={item.href}
                                    className="block"
                                    aria-current={isActive ? 'page' : undefined}
                                >
                                    <Button
                                        variant={isActive ? 'secondary' : 'ghost'}
                                        className={cn(
                                            'w-full justify-start h-11 transition-all duration-200',
                                            isActive && 'bg-secondary text-secondary-foreground shadow-sm',
                                            !isActive && 'hover:bg-accent hover:text-accent-foreground',
                                            isCollapsed && 'justify-center px-2'
                                        )}
                                    >
                                        {item.icon && (
                                            <item.icon 
                                                className={cn(
                                                    "h-4 w-4 shrink-0", 
                                                    !isCollapsed && "mr-3"
                                                )} 
                                            />
                                        )}
                                        {!isCollapsed && (
                                            <div className="flex flex-col items-start">
                                                <span className="truncate font-medium">{item.title}</span>
                                                <span className="text-xs text-muted-foreground truncate">
                                                    {item.description}
                                                </span>
                                            </div>
                                        )}
                                    </Button>
                                </Link>
                            );

                            // Wrap with tooltip if collapsed
                            if (isCollapsed && !isMobile) {
                                return (
                                    <Tooltip key={item.href}>
                                        <TooltipTrigger asChild>
                                            {menuItem}
                                        </TooltipTrigger>
                                        <TooltipContent side="right" className="max-w-xs">
                                            <div className="flex flex-col gap-1">
                                                <p className="font-medium">{item.title}</p>
                                                <p className="text-xs text-muted-foreground">{item.description}</p>
                                            </div>
                                        </TooltipContent>
                                    </Tooltip>
                                );
                            }

                            return menuItem;
                        })}
                    </nav>
                </ScrollArea>
                
                {/* Sidebar Status */}
                <SidebarStatus isCollapsed={isCollapsed} isMobile={isMobile} />
                
                {/* Footer with collapse button when sidebar is collapsed */}
                {isCollapsed && toggleSidebar && !isMobile && (
                    <div className="border-t p-2 shrink-0">
                        <Tooltip>
                            <TooltipTrigger asChild>
                                <Button
                                    variant="ghost"
                                    size="sm"
                                    onClick={toggleSidebar}
                                    className="h-8 w-8 p-0 mx-auto hover:bg-accent"
                                    title="Expand sidebar"
                                    aria-label="Expand sidebar"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </TooltipTrigger>
                            <TooltipContent side="right">
                                <p>Expand sidebar</p>
                            </TooltipContent>
                        </Tooltip>
                    </div>
                )}

                {/* Keyboard shortcut hint for mobile */}
                {isMobile && (
                    <div className="border-t p-3 text-xs text-muted-foreground text-center">
                        <p>Press <kbd className="px-1 py-0.5 bg-muted rounded text-xs">Ctrl+B</kbd> to toggle sidebar</p>
                    </div>
                )}
            </div>
        </TooltipProvider>
    );
}
