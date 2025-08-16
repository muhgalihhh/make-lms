import { AdminSidebar } from '@/components/admin-sidebar';
import { AppContent } from '@/components/app-content';
import { AppShell } from '@/components/app-shell';
import { FlashMessages } from '@/components/flash-messages';
import { AdminHeader } from '@/components/admin-header';
import { type BreadcrumbItem } from '@/types';
import { type ReactNode } from 'react';

interface AdminLayoutProps {
    children: ReactNode;
    breadcrumbs?: BreadcrumbItem[];
}

export default function AdminLayout({ children, breadcrumbs = [] }: AdminLayoutProps) {
    return (
        <AppShell variant="sidebar">
            <AdminSidebar breadcrumbs={breadcrumbs} />
            <div className="flex flex-col flex-1 md:ml-64">
                <AdminHeader breadcrumbs={breadcrumbs} />
                <AppContent variant="sidebar" className="overflow-x-hidden">
                    <div className="flex-1 space-y-6 p-6 lg:p-8">
                        <FlashMessages />
                        {children}
                    </div>
                </AppContent>
            </div>
        </AppShell>
    );
}