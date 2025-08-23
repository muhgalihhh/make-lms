import { AppHeader } from '@/components/app-header';
import { AppSidebar } from '@/components/app-sidebar';
import { FlashMessages } from '@/components/flash-messages';
import { Toaster } from '@/components/ui/toaster';
import { useToastNotifications } from '@/hooks/use-toast-notifications';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode, useState } from 'react';

interface AppLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AppLayout({ children, breadcrumbs = [] }: AppLayoutProps) {
    useToastNotifications();
    const [sidebarOpen, setSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    return (
        <div className="flex min-h-screen bg-background">
            {/* Sidebar */}
            <aside className={`fixed left-0 top-0 z-40 h-full transition-all duration-300 ease-in-out ${
                sidebarOpen ? 'w-64' : 'w-16'
            }`}>
                <div className="h-full border-r bg-sidebar">
                    <AppSidebar collapsed={!sidebarOpen} />
                </div>
            </aside>

            {/* Main Content */}
            <div className={`flex-1 transition-all duration-300 ease-in-out ${
                sidebarOpen ? 'ml-64' : 'ml-16'
            }`}>
                <div className="flex min-h-screen flex-col">
                    {/* Sticky Header */}
                    <AppHeader 
                        breadcrumbs={breadcrumbs} 
                        onSidebarToggle={toggleSidebar}
                        sidebarOpen={sidebarOpen}
                    />
                    
                    {/* Main Content Area */}
                    <main className="flex-1">
                        <div className="mx-auto max-w-7xl p-4 lg:p-6">
                            <FlashMessages />
                            {children}
                        </div>
                    </main>
                </div>
            </div>
            
            <Toaster />
        </div>
    );
}
