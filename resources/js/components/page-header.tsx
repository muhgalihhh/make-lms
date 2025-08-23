import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { router } from '@inertiajs/react';
import { ArrowLeft, LucideIcon } from 'lucide-react';

interface PageHeaderProps {
    title: string;
    description?: string;
    backUrl?: string;
    badge?: {
        text: string;
        icon?: LucideIcon;
        variant?: 'default' | 'secondary' | 'destructive' | 'outline';
    };
    actions?: React.ReactNode;
}

export function PageHeader({ 
    title, 
    description, 
    backUrl, 
    badge, 
    actions 
}: PageHeaderProps) {
    const handleBack = () => {
        if (backUrl) {
            router.visit(backUrl);
        } else {
            router.back();
        }
    };

    return (
        <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
                {backUrl && (
                    <Button 
                        variant="ghost" 
                        size="sm" 
                        onClick={handleBack}
                        className="h-8 w-8 p-0"
                    >
                        <ArrowLeft className="h-4 w-4" />
                    </Button>
                )}
                <div>
                    <h1 className="text-2xl font-bold tracking-tight">{title}</h1>
                    {description && (
                        <p className="text-muted-foreground">{description}</p>
                    )}
                </div>
            </div>
            <div className="flex items-center space-x-3">
                {badge && (
                    <Badge variant={badge.variant || 'outline'} className="flex items-center space-x-1">
                        {badge.icon && <badge.icon className="h-3 w-3" />}
                        <span>{badge.text}</span>
                    </Badge>
                )}
                {actions}
            </div>
        </div>
    );
}