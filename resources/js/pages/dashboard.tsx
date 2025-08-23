import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
    Users, 
    TrendingUp, 
    DollarSign, 
    Activity,
    ArrowUpRight,
    ArrowDownRight
} from 'lucide-react';

export default function Dashboard() {
    const stats = [
        {
            title: 'Total Users',
            value: '2,847',
            change: '+12.5%',
            changeType: 'positive',
            icon: Users,
            description: 'Active users this month'
        },
        {
            title: 'Revenue',
            value: '$45,231',
            change: '+20.1%',
            changeType: 'positive',
            icon: DollarSign,
            description: 'Total revenue this month'
        },
        {
            title: 'Growth',
            value: '+573',
            change: '+201',
            changeType: 'positive',
            icon: TrendingUp,
            description: 'New users this week'
        },
        {
            title: 'Active Sessions',
            value: '1,234',
            change: '-5.2%',
            changeType: 'negative',
            icon: Activity,
            description: 'Current active sessions'
        }
    ];

    return (
        <div className="space-y-6">
            {/* Header */}
            <div>
                <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                <p className="text-muted-foreground">
                    Welcome back! Here's what's happening with your projects today.
                </p>
            </div>

            {/* Stats Grid */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {stats.map((stat) => (
                    <Card key={stat.title}>
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium">
                                {stat.title}
                            </CardTitle>
                            <stat.icon className="h-4 w-4 text-muted-foreground" />
                        </CardHeader>
                        <CardContent>
                            <div className="text-2xl font-bold">{stat.value}</div>
                            <div className="flex items-center space-x-2 text-xs text-muted-foreground">
                                <span className={`flex items-center ${
                                    stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                }`}>
                                    {stat.changeType === 'positive' ? (
                                        <ArrowUpRight className="h-3 w-3" />
                                    ) : (
                                        <ArrowDownRight className="h-3 w-3" />
                                    )}
                                    {stat.change}
                                </span>
                                <span>from last month</span>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">
                                {stat.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Content Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                    <CardHeader>
                        <CardTitle>Recent Activity</CardTitle>
                        <CardDescription>
                            You have 265 projects this year.
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center">
                                        <Users className="h-4 w-4 text-primary" />
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            New user registered
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            User {i} joined the platform
                                        </p>
                                    </div>
                                    <Badge variant="secondary">2m ago</Badge>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
                
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Quick Actions</CardTitle>
                        <CardDescription>
                            Common tasks and shortcuts
                        </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <Button className="w-full justify-start">
                            <Users className="mr-2 h-4 w-4" />
                            Add New User
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <Activity className="mr-2 h-4 w-4" />
                            View Reports
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <TrendingUp className="mr-2 h-4 w-4" />
                            Analytics
                        </Button>
                        <Button variant="outline" className="w-full justify-start">
                            <DollarSign className="mr-2 h-4 w-4" />
                            Billing
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Additional Content */}
            <div className="grid gap-4 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>System Status</CardTitle>
                        <CardDescription>
                            Current system performance and health
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">CPU Usage</span>
                                <Badge variant="default">45%</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Memory Usage</span>
                                <Badge variant="secondary">67%</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Disk Space</span>
                                <Badge variant="outline">23%</Badge>
                            </div>
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Network</span>
                                <Badge variant="default">89%</Badge>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>Recent Notifications</CardTitle>
                        <CardDescription>
                            Latest system notifications and alerts
                        </CardDescription>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[
                                { title: 'Backup completed', time: '2 hours ago', type: 'success' },
                                { title: 'New user registration', time: '4 hours ago', type: 'info' },
                                { title: 'System maintenance', time: '1 day ago', type: 'warning' },
                                { title: 'Security update', time: '2 days ago', type: 'success' }
                            ].map((notification, i) => (
                                <div key={i} className="flex items-center space-x-4">
                                    <div className={`h-2 w-2 rounded-full ${
                                        notification.type === 'success' ? 'bg-green-500' :
                                        notification.type === 'warning' ? 'bg-yellow-500' :
                                        'bg-blue-500'
                                    }`} />
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">
                                            {notification.title}
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            {notification.time}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}