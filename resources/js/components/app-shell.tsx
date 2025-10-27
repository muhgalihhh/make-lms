import { SidebarProvider } from '@/components/ui/sidebar';
import { SharedData } from '@/types';
import { usePage } from '@inertiajs/react';
import { useState } from 'react';

interface AppShellProps {
    children: React.ReactNode;
    variant?: 'header' | 'sidebar';
    defaultSidebarOpen?: boolean;
    onSidebarToggle?: (open: boolean) => void;
}

export function AppShell({ 
    children, 
    variant = 'header', 
    defaultSidebarOpen = true,
    onSidebarToggle 
}: AppShellProps) {
    const page = usePage<SharedData>();
    const [sidebarOpen, setSidebarOpen] = useState(defaultSidebarOpen);

    const handleSidebarToggle = (open: boolean) => {
        setSidebarOpen(open);
        onSidebarToggle?.(open);
    };

    if (variant === 'header') {
        return <div className="flex min-h-screen w-full flex-col">{children}</div>;
    }

    return (
        <SidebarProvider 
            defaultOpen={sidebarOpen}
            onOpenChange={handleSidebarToggle}
        >
            {children}
        </SidebarProvider>
    );
}
