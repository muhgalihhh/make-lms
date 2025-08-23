// resources/js/pages/admin/dashboard.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { StatCard } from '@/components/stat-card';
import { ActivityItem } from '@/components/activity-item';
import { ChartCard } from '@/components/chart-card';
import { SimpleChart } from '@/components/simple-chart';
import { LineChart } from '@/components/line-chart';
import { DashboardFilters } from '@/components/dashboard-filters';
import AdminLayout from '@/layouts/admin-layout';
import { type BreadcrumbItem, type PageProps, type User } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { BookOpen, Users, TrendingUp, DollarSign, ArrowRight, Calendar, Mail, BarChart3, Crown, Download } from 'lucide-react';
import { useState } from 'react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
    },
];

interface Stats {
    totalUsers: number;
    totalCourses: number;
}

interface DashboardProps extends PageProps {
    stats: Stats;
    recentUsers: User[];
}

export default function Dashboard({ stats, recentUsers }: DashboardProps) {
    const [chartPeriod, setChartPeriod] = useState('30d');

    // Sample data for charts
    const userTypeData = [
        { label: 'Regular', value: 1250, color: '#3b82f6' },
        { label: 'Premium', value: 320, color: '#10b981' },
        { label: 'Enterprise', value: 85, color: '#8b5cf6' },
    ];

    const registrationTrendData = [
        { date: 'Jan', regular: 45, premium: 12 },
        { date: 'Feb', regular: 52, premium: 18 },
        { date: 'Mar', regular: 38, premium: 15 },
        { date: 'Apr', regular: 67, premium: 25 },
        { date: 'May', regular: 73, premium: 32 },
        { date: 'Jun', regular: 89, premium: 41 },
    ];

    const monthlyStatsData = [
        { label: 'Jan', value: 57, color: '#3b82f6' },
        { label: 'Feb', value: 70, color: '#3b82f6' },
        { label: 'Mar', value: 53, color: '#3b82f6' },
        { label: 'Apr', value: 92, color: '#3b82f6' },
        { label: 'May', value: 105, color: '#3b82f6' },
        { label: 'Jun', value: 130, color: '#3b82f6' },
    ];

    const handleExportData = () => {
        // Implement export functionality
        console.log('Exporting dashboard data...');
    };

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex-1 space-y-6">
                {/* Header */}
                <div className="flex items-center justify-between">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-muted-foreground">
                            Welcome back! Here's what's happening with your platform today.
                        </p>
                    </div>
                    <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">
                            <Calendar className="mr-2 h-4 w-4" />
                            Today
                        </Button>
                        <Button variant="outline" size="sm" onClick={handleExportData}>
                            <Download className="mr-2 h-4 w-4" />
                            Export
                        </Button>
                    </div>
                </div>

                {/* Dashboard Filters */}
                <DashboardFilters
                    period={chartPeriod}
                    onPeriodChange={setChartPeriod}
                    onExport={handleExportData}
                    showExport={true}
                />

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                    <StatCard
                        title="Total Pengguna"
                        value={stats.totalUsers}
                        description="dari bulan lalu"
                        icon={Users}
                        trend={{ value: "+12%", isPositive: true }}
                    />
                    
                    <StatCard
                        title="Total Kursus"
                        value={stats.totalCourses}
                        description="dari bulan lalu"
                        icon={BookOpen}
                        trend={{ value: "+8%", isPositive: true }}
                    />

                    <StatCard
                        title="Pendapatan"
                        value="Rp 2.4M"
                        description="dari bulan lalu"
                        icon={DollarSign}
                        trend={{ value: "+23%", isPositive: true }}
                    />

                    <StatCard
                        title="Pertumbuhan"
                        value="+15.2%"
                        description="dari bulan lalu"
                        icon={TrendingUp}
                        trend={{ value: "+2.1%", isPositive: true }}
                    />
                </div>

                {/* Charts Section */}
                <div className="grid gap-6 md:grid-cols-2">
                    {/* User Registration Trend */}
                    <ChartCard
                        title="Trend Pendaftaran"
                        icon={BarChart3}
                        filters={{
                            period: chartPeriod,
                            onPeriodChange: setChartPeriod
                        }}
                        trend={{
                            value: "+18%",
                            isPositive: true,
                            label: "vs bulan lalu"
                        }}
                    >
                        <LineChart data={registrationTrendData} />
                    </ChartCard>

                    {/* User Types Distribution */}
                    <ChartCard
                        title="Distribusi Tipe User"
                        icon={Crown}
                        trend={{
                            value: "+5%",
                            isPositive: true,
                            label: "Premium growth"
                        }}
                    >
                        <SimpleChart data={userTypeData} />
                    </ChartCard>
                </div>

                {/* Monthly Registration Stats */}
                <ChartCard
                    title="Pendaftaran Bulanan"
                    icon={Users}
                    filters={{
                        period: chartPeriod,
                        onPeriodChange: setChartPeriod
                    }}
                >
                    <SimpleChart data={monthlyStatsData} showValues={false} />
                </ChartCard>

                {/* Recent Activity */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                    <Card className="col-span-4">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>Pengguna Terbaru</CardTitle>
                                <Button variant="ghost" size="sm" asChild>
                                    <Link href={route('admin.users.index')}>
                                        Lihat Semua
                                        <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-6">
                                {recentUsers.map((user) => (
                                    <div className="flex items-center" key={user.id}>
                                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-muted">
                                            <Users className="h-5 w-5 text-muted-foreground" />
                                        </div>
                                        <div className="ml-4 space-y-1">
                                            <p className="text-sm font-medium leading-none">{user.name}</p>
                                            <div className="flex items-center space-x-2">
                                                <Mail className="h-3 w-3 text-muted-foreground" />
                                                <p className="text-sm text-muted-foreground">{user.email}</p>
                                            </div>
                                        </div>
                                        <div className="ml-auto flex items-center space-x-2">
                                            <Badge variant={user.role === 'admin' ? 'default' : 'secondary'}>
                                                {user.role}
                                            </Badge>
                                            <p className="text-sm text-muted-foreground">
                                                {new Date(user.created_at).toLocaleDateString('id-ID', {
                                                    day: 'numeric',
                                                    month: 'short',
                                                    year: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </CardContent>
                    </Card>

                    <Card className="col-span-3">
                        <CardHeader>
                            <CardTitle>Aktivitas Terbaru</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <ActivityItem
                                    title="User baru mendaftar"
                                    time="2 menit yang lalu"
                                    icon={Users}
                                    iconBgColor="bg-green-100"
                                    iconColor="text-green-600"
                                />
                                
                                <ActivityItem
                                    title="Kursus baru ditambahkan"
                                    time="1 jam yang lalu"
                                    icon={BookOpen}
                                    iconBgColor="bg-blue-100"
                                    iconColor="text-blue-600"
                                />
                                
                                <ActivityItem
                                    title="Transaksi berhasil"
                                    time="3 jam yang lalu"
                                    icon={DollarSign}
                                    iconBgColor="bg-yellow-100"
                                    iconColor="text-yellow-600"
                                />
                                
                                <ActivityItem
                                    title="Laporan bulanan selesai"
                                    time="1 hari yang lalu"
                                    icon={TrendingUp}
                                    iconBgColor="bg-purple-100"
                                    iconColor="text-purple-600"
                                />
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}
