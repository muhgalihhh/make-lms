import { LucideIcon } from 'lucide-react';

interface ActivityItemProps {
    title: string;
    time: string;
    icon: LucideIcon;
    iconBgColor: string;
    iconColor: string;
}

export function ActivityItem({ 
    title, 
    time, 
    icon: Icon, 
    iconBgColor, 
    iconColor 
}: ActivityItemProps) {
    return (
        <div className="flex items-center space-x-3">
            <div className={`flex h-8 w-8 items-center justify-center rounded-full ${iconBgColor}`}>
                <Icon className={`h-4 w-4 ${iconColor}`} />
            </div>
            <div className="flex-1 space-y-1">
                <p className="text-sm font-medium">{title}</p>
                <p className="text-xs text-muted-foreground">{time}</p>
            </div>
        </div>
    );
}