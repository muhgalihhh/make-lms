import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { UserMenuContent } from '@/components/user-menu-content';
import { useInitials } from '@/hooks/use-initials';
import { type SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { ChevronsUpDown, User } from 'lucide-react';

interface NavUserProps {
    collapsed?: boolean;
}

export function NavUser({ collapsed = false }: NavUserProps) {
    const { auth } = usePage<SharedData>().props;
    const getInitials = useInitials();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button 
                    variant="ghost" 
                    className={`w-full justify-start ${
                        collapsed ? 'justify-center px-2' : 'px-3'
                    }`}
                >
                    <Avatar className="h-8 w-8">
                        <AvatarImage src={auth.user.avatar} alt={auth.user.name} />
                        <AvatarFallback className="text-xs">
                            {getInitials(auth.user.name)}
                        </AvatarFallback>
                    </Avatar>
                    {!collapsed && (
                        <>
                            <div className="ml-3 flex-1 text-left">
                                <p className="text-sm font-medium">{auth.user.name}</p>
                                <p className="text-xs text-muted-foreground">{auth.user.email}</p>
                            </div>
                            <ChevronsUpDown className="ml-auto h-4 w-4" />
                        </>
                    )}
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent 
                className="w-56" 
                align="end"
                side={collapsed ? 'right' : 'bottom'}
            >
                <UserMenuContent user={auth.user} />
            </DropdownMenuContent>
        </DropdownMenu>
    );
}
