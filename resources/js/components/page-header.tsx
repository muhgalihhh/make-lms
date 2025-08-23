import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { type BreadcrumbItem } from '@/types';
import { Link, router } from '@inertiajs/react';
import { ArrowLeft, Plus, Save, X } from 'lucide-react';
import { type ReactNode } from 'react';

interface PageHeaderProps {
    title: string;
    description?: string;
    breadcrumbs?: BreadcrumbItem[];
    backUrl?: string;
    showBackButton?: boolean;
    actions?: ReactNode;
    status?: {
        label: string;
        variant: 'default' | 'secondary' | 'destructive' | 'outline';
    };
}

export function PageHeader({
    title,
    description,
    breadcrumbs = [],
    backUrl,
    showBackButton = true,
    actions,
    status,
}: PageHeaderProps) {
    const handleBack = () => {
        if (backUrl) {
            router.visit(backUrl);
        } else {
            router.back();
        }
    };

    return (
        <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
            <div className="flex items-center space-x-4">
                {showBackButton && (
                    <Button
                        variant="ghost"
                        size="sm"
                        onClick={handleBack}
                        className="h-8 w-8 p-0 hover:bg-muted"
                    >
                        <ArrowLeft className="h-4 w-4" />
                        <span className="sr-only">Kembali</span>
                    </Button>
                )}
                
                <div className="flex-1">
                    <div className="flex items-center space-x-2">
                        <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                        {status && (
                            <Badge variant={status.variant} className="text-xs">
                                {status.label}
                            </Badge>
                        )}
                    </div>
                    
                    {description && (
                        <p className="text-sm text-muted-foreground mt-1">{description}</p>
                    )}
                    
                    {breadcrumbs.length > 0 && (
                        <nav className="flex items-center space-x-1 text-sm text-muted-foreground mt-2">
                            {breadcrumbs.map((crumb, index) => (
                                <div key={crumb.href} className="flex items-center">
                                    {index > 0 && <span className="mx-1">/</span>}
                                    <Link
                                        href={crumb.href}
                                        className="hover:text-foreground transition-colors"
                                    >
                                        {crumb.title}
                                    </Link>
                                </div>
                            ))}
                        </nav>
                    )}
                </div>
            </div>
            
            {actions && (
                <div className="flex items-center space-x-2">
                    {actions}
                </div>
            )}
        </div>
    );
}

// Predefined action buttons for common use cases
export function ActionButtons({
    onSave,
    onCancel,
    onDelete,
    saveLabel = 'Simpan',
    cancelLabel = 'Batal',
    deleteLabel = 'Hapus',
    isLoading = false,
    showSave = true,
    showCancel = true,
    showDelete = false,
    saveDisabled = false,
    deleteDisabled = false,
}: {
    onSave?: () => void;
    onCancel?: () => void;
    onDelete?: () => void;
    saveLabel?: string;
    cancelLabel?: string;
    deleteLabel?: string;
    isLoading?: boolean;
    showSave?: boolean;
    showCancel?: boolean;
    showDelete?: boolean;
    saveDisabled?: boolean;
    deleteDisabled?: boolean;
}) {
    return (
        <div className="flex items-center space-x-2">
            {showCancel && (
                <Button
                    variant="outline"
                    onClick={onCancel}
                    disabled={isLoading}
                    className="min-w-[80px]"
                >
                    <X className="mr-2 h-4 w-4" />
                    {cancelLabel}
                </Button>
            )}
            
            {showDelete && (
                <Button
                    variant="destructive"
                    onClick={onDelete}
                    disabled={isLoading || deleteDisabled}
                    className="min-w-[80px]"
                >
                    {deleteLabel}
                </Button>
            )}
            
            {showSave && (
                <Button
                    onClick={onSave}
                    disabled={isLoading || saveDisabled}
                    className="min-w-[80px]"
                >
                    <Save className="mr-2 h-4 w-4" />
                    {isLoading ? 'Menyimpan...' : saveLabel}
                </Button>
            )}
        </div>
    );
}

// Quick action button for adding new items
export function AddButton({
    href,
    label = 'Tambah Baru',
    icon = Plus,
}: {
    href: string;
    label?: string;
    icon?: any;
}) {
    const Icon = icon;
    
    return (
        <Button asChild>
            <Link href={href}>
                <Icon className="mr-2 h-4 w-4" />
                {label}
            </Link>
        </Button>
    );
}