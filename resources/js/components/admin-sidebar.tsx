import { Sidebar, SidebarContent, SidebarFooter, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/components/ui/sidebar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Badge } from '@/components/ui/badge';
import { type BreadcrumbItem } from '@/types';
import { Link } from '@inertiajs/react';
import { BookOpen, Building2, CreditCard, Users, LayoutDashboard, Tag, Home, Maximize2, Minimize2 } from 'lucide-react';
import { useSidebar } from '@/hooks/use-sidebar';
import { Suspense } from 'react';
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

export function AdminSidebar({ breadcrumbs: _ }: AdminSidebarProps) {
    const { isCollapsed } = useSidebar();

    return (
        <SidebarErrorBoundary>
            <Suspense fallback={<SidebarSkeleton isCollapsed={isCollapsed} />}>
                <Sidebar collapsible="icon" variant="inset">
                    <SidebarHeader>
                        <SidebarMenu>
                            <SidebarMenuItem>
                                <SidebarMenuButton size="lg" asChild>
                                    <Link href={route('admin.dashboard')} prefetch>
                                        <div className="flex items-center gap-2">
                                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary shrink-0">
                                                <Home className="h-4 w-4 text-primary-foreground" />
                                            </div>
                                            <span className="text-lg font-semibold">Admin Panel</span>
                                        </div>
                                    </Link>
                                </SidebarMenuButton>
                            </SidebarMenuItem>
                        </SidebarMenu>
                    </SidebarHeader>

                    <SidebarContent>
                        <ScrollArea className="h-full">
                            <SidebarMenu>
                                {menuItems.map((item) => {
                                    return (
                                        <SidebarMenuItem key={item.href}>
                                            <TooltipProvider delayDuration={300}>
                                                <Tooltip>
                                                    <TooltipTrigger asChild>
                                                        <SidebarMenuButton asChild>
                                                            <Link href={item.href}>
                                                                <item.icon className="h-4 w-4" />
                                                                <div className="flex flex-col items-start">
                                                                    <span className="truncate font-medium">{item.title}</span>
                                                                    <span className="text-xs text-muted-foreground truncate">
                                                                        {item.description}
                                                                    </span>
                                                                </div>
                                                            </Link>
                                                        </SidebarMenuButton>
                                                    </TooltipTrigger>
                                                    <TooltipContent side="right" className="max-w-xs">
                                                        <div className="flex flex-col gap-1">
                                                            <p className="font-medium">{item.title}</p>
                                                            <p className="text-xs text-muted-foreground">{item.description}</p>
                                                        </div>
                                                    </TooltipContent>
                                                </Tooltip>
                                            </TooltipProvider>
                                        </SidebarMenuItem>
                                    );
                                })}
                            </SidebarMenu>
                        </ScrollArea>
                    </SidebarContent>

                    <SidebarFooter>
                        {/* Sidebar Status */}
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
                    </SidebarFooter>
                </Sidebar>
            </Suspense>
        </SidebarErrorBoundary>
    );
}
