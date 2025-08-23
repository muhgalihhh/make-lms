import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import { LucideIcon, Calendar, TrendingUp, TrendingDown } from 'lucide-react';

interface ChartCardProps {
    title: string;
    icon?: LucideIcon;
    children: React.ReactNode;
    filters?: {
        period: string;
        onPeriodChange: (value: string) => void;
    };
    trend?: {
        value: string;
        isPositive: boolean;
        label: string;
    };
}

export function ChartCard({ 
    title, 
    icon: Icon, 
    children, 
    filters,
    trend 
}: ChartCardProps) {
    return (
        <Card>
            <CardHeader>
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                        {Icon && <Icon className="h-5 w-5 text-muted-foreground" />}
                        <CardTitle className="text-lg">{title}</CardTitle>
                    </div>
                    <div className="flex items-center space-x-2">
                        {trend && (
                            <div className="flex items-center space-x-1 text-sm">
                                {trend.isPositive ? (
                                    <TrendingUp className="h-4 w-4 text-green-600" />
                                ) : (
                                    <TrendingDown className="h-4 w-4 text-red-600" />
                                )}
                                <span className={trend.isPositive ? 'text-green-600' : 'text-red-600'}>
                                    {trend.value}
                                </span>
                                <span className="text-muted-foreground">{trend.label}</span>
                            </div>
                        )}
                        {filters && (
                            <Select value={filters.period} onValueChange={filters.onPeriodChange}>
                                <SelectTrigger className="w-32">
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="7d">7 Hari</SelectItem>
                                    <SelectItem value="30d">30 Hari</SelectItem>
                                    <SelectItem value="90d">90 Hari</SelectItem>
                                    <SelectItem value="1y">1 Tahun</SelectItem>
                                </SelectContent>
                            </Select>
                        )}
                    </div>
                </div>
            </CardHeader>
            <CardContent>
                {children}
            </CardContent>
        </Card>
    );
}