import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Input } from '@/components/ui/input';
import { useInitials } from '@/hooks/use-initials';
import { useSidebar } from '@/hooks/use-sidebar';
import { type BreadcrumbItem, type User as UserType } from '@/types';
import { Link, router, usePage } from '@inertiajs/react';
import { BarChart3, Bell, HelpCircle, LogOut, Search, Settings, Shield, User, Menu, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { KeyboardShortcutsHelp } from './keyboard-shortcuts-help';

interface AdminHeaderProps {
    breadcrumbs?: BreadcrumbItem[];
}

export function AdminHeader({ breadcrumbs: _ }: AdminHeaderProps) {
    const page = usePage<{ auth: { user: UserType } }>();
    const { auth } = page.props;
    const getInitials = useInitials();
    const { toggleSidebar, isCollapsed } = useSidebar();

    const handleLogout = () => {
        router.post(route('logout'));
    };

    return (
        <header className="w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-40">
            <div className="flex h-16 items-center justify-between px-4">
                {/* Left side - Toggle Sidebar and Search */}
                <div className="flex items-center gap-4">
                    {/* Desktop Toggle Button */}
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={toggleSidebar}
                        className={cn(
                            "h-9 w-9 p-0 transition-all duration-200",
                            "hover:bg-accent hover:text-accent-foreground",
                            "hidden md:flex"
                        )}
                        aria-label={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
                    >
                        {isCollapsed ? <Menu className="h-5 w-5" /> : <X className="h-5 w-5" />}
                    </Button>

                    {/* Search Bar */}
                    <div className="relative hidden sm:block sm:w-64 lg:w-80">
                        <Search className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none" />
                        <Input 
                            placeholder="Search users, courses, transactions..." 
                            className="pl-10 transition-all duration-200 focus:ring-2 focus:ring-primary/20"
                        />
                    </div>

                    {/* Mobile Search Toggle */}
                    <Button
                        variant="ghost"
                        size="sm"
                        className="sm:hidden h-9 w-9 p-0"
                        aria-label="Open search"
                    >
                        <Search className="h-5 w-5" />
                    </Button>
                </div>

                {/* Right side - Notifications, Help, and Profile */}
                <div className="flex items-center gap-2">
                    {/* Keyboard Shortcuts Help */}
                    <KeyboardShortcutsHelp />

                    {/* Notifications */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                size="icon" 
                                className="relative h-9 w-9 hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                                aria-label="Open notifications"
                            >
                                <Bell className="h-5 w-5" />
                                <Badge 
                                    variant="destructive" 
                                    className="absolute -top-1 -right-1 h-5 w-5 rounded-full p-0 text-xs animate-pulse"
                                >
                                    3
                                </Badge>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-80">
                            <DropdownMenuLabel className="flex items-center justify-between">
                                <span>Notifications</span>
                                <Badge variant="secondary" className="text-xs">
                                    New
                                </Badge>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <div className="max-h-64 overflow-y-auto">
                                <DropdownMenuItem className="flex flex-col items-start p-3 hover:bg-accent/50">
                                    <div className="flex items-center gap-2 w-full">
                                        <div className="h-2 w-2 rounded-full bg-blue-500 shrink-0" />
                                        <span className="text-sm font-medium">New user registered</span>
                                        <span className="text-xs text-muted-foreground ml-auto">2m</span>
                                    </div>
                                    <p className="mt-1 text-xs text-muted-foreground">John Doe has joined the platform</p>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex flex-col items-start p-3 hover:bg-accent/50">
                                    <div className="flex items-center gap-2 w-full">
                                        <div className="h-2 w-2 rounded-full bg-green-500 shrink-0" />
                                        <span className="text-sm font-medium">Course completed</span>
                                        <span className="text-xs text-muted-foreground ml-auto">1h</span>
                                    </div>
                                    <p className="mt-1 text-xs text-muted-foreground">Advanced React course has been completed</p>
                                </DropdownMenuItem>
                                <DropdownMenuItem className="flex flex-col items-start p-3 hover:bg-accent/50">
                                    <div className="flex items-center gap-2 w-full">
                                        <div className="h-2 w-2 rounded-full bg-yellow-500 shrink-0" />
                                        <span className="text-sm font-medium">System update</span>
                                        <span className="text-xs text-muted-foreground ml-auto">3h</span>
                                    </div>
                                    <p className="mt-1 text-xs text-muted-foreground">New features have been deployed</p>
                                </DropdownMenuItem>
                            </div>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem asChild>
                                <Link href="#" className="w-full text-center font-medium">
                                    View all notifications
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>

                    {/* Profile Dropdown */}
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button 
                                variant="ghost" 
                                className="relative h-9 w-9 rounded-full hover:bg-accent hover:text-accent-foreground transition-all duration-200"
                                aria-label="Open user menu"
                            >
                                <Avatar className="h-9 w-9">
                                    <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                                    <AvatarFallback className="text-xs bg-primary text-primary-foreground">
                                        {getInitials(auth.user.name)}
                                    </AvatarFallback>
                                </Avatar>
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent className="w-56" align="end" forceMount>
                            <DropdownMenuLabel className="font-normal">
                                <div className="flex flex-col gap-1">
                                    <p className="text-sm leading-none font-medium">{auth.user.name}</p>
                                    <p className="text-xs leading-none text-muted-foreground">{auth.user.email}</p>
                                    <Badge variant="secondary" className="mt-1 w-fit">
                                        <Shield className="mr-1 h-3 w-3" />
                                        {auth.user.role}
                                    </Badge>
                                </div>
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuGroup>
                                <DropdownMenuItem asChild>
                                    <Link href={route('profile.edit')} className="flex items-center hover:bg-accent/50">
                                        <User className="mr-2 h-4 w-4" />
                                        <span>Profile</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={route('admin.dashboard')} className="flex items-center hover:bg-accent/50">
                                        <BarChart3 className="mr-2 h-4 w-4" />
                                        <span>Dashboard</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href={route('profile.edit')} className="flex items-center hover:bg-accent/50">
                                        <Settings className="mr-2 h-4 w-4" />
                                        <span>Settings</span>
                                    </Link>
                                </DropdownMenuItem>
                                <DropdownMenuItem asChild>
                                    <Link href="#" className="flex items-center hover:bg-accent/50">
                                        <HelpCircle className="mr-2 h-4 w-4" />
                                        <span>Help & Support</span>
                                    </Link>
                                </DropdownMenuItem>
                            </DropdownMenuGroup>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem 
                                onClick={handleLogout} 
                                className="text-red-600 focus:text-red-600 hover:bg-red-50 focus:bg-red-50"
                            >
                                <LogOut className="mr-2 h-4 w-4" />
                                <span>Log out</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                </div>
            </div>
        </header>
    );
}
