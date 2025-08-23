// resources/js/pages/admin/dashboard.tsx

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import AdminLayout from '@/layouts/admin-layout';
import { type BreadcrumbItem, type PageProps, type User } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { 
    BookOpen, 
    Users, 
    CreditCard, 
    TrendingUp, 
    TrendingDown,
    Building2,
    Eye,
    Plus,
    ArrowUpRight,
    Calendar,
    DollarSign,
    UserCheck
} from 'lucide-react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: route('admin.dashboard'),
    },
];

interface Stats {
    totalUsers: number;
    totalCourses: number;
    totalTransactions: number;
    totalRevenue: number;
    activeUsers: number;
    totalInstitutions: number;
    monthlyGrowth: number;
    conversionRate: number;
}

interface DashboardProps extends PageProps {
    stats: Stats;
    recentUsers: User[];
}

export default function Dashboard({ stats, recentUsers }: DashboardProps) {
    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('id-ID', {
            style: 'currency',
            currency: 'IDR',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    const formatNumber = (num: number) => {
        return new Intl.NumberFormat('id-ID').format(num);
    };

    const statCards = [
        {
            title: 'Total Pengguna',
            value: formatNumber(stats.totalUsers),
            description: 'Jumlah pengguna terdaftar',
            icon: Users,
            trend: '+12%',
            trendUp: true,
            color: 'text-blue-600',
            bgColor: 'bg-blue-50',
            href: route('admin.users.index'),
        },
        {
            title: 'Kursus Aktif',
            value: formatNumber(stats.totalCourses),
            description: 'Kursus yang tersedia',
            icon: BookOpen,
            trend: '+8%',
            trendUp: true,
            color: 'text-green-600',
            bgColor: 'bg-green-50',
            href: route('admin.courses.index'),
        },
        {
            title: 'Pendapatan',
            value: formatCurrency(stats.totalRevenue),
            description: 'Total pendapatan bulan ini',
            icon: DollarSign,
            trend: '+15%',
            trendUp: true,
            color: 'text-emerald-600',
            bgColor: 'bg-emerald-50',
            href: route('admin.transactions.index'),
        },
        {
            title: 'Transaksi',
            value: formatNumber(stats.totalTransactions),
            description: 'Transaksi berhasil',
            icon: CreditCard,
            trend: '+5%',
            trendUp: true,
            color: 'text-purple-600',
            bgColor: 'bg-purple-50',
            href: route('admin.transactions.index'),
        },
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            
            {/* Header Section */}
            <div className="flex flex-col space-y-4 sm:flex-row sm:items-center sm:justify-between sm:space-y-0">
                <div>
                    <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                    <p className="text-muted-foreground">
                        Selamat datang kembali! Berikut adalah ringkasan aktivitas sistem Anda.
                    </p>
                </div>
                <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        Bulan Ini
                    </Button>
                    <Button size="sm">
                        <Plus className="mr-2 h-4 w-4" />
                        Tambah Data
                    </Button>
                </div>
            </div>

            {/* Stats Cards */}
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                {statCards.map((card, index) => (
                    <Card key={index} className="group hover:shadow-lg transition-all duration-200">
                        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                            <CardTitle className="text-sm font-medium text-muted-foreground">
                                {card.title}
                            </CardTitle>
                            <div className={`p-2 rounded-lg ${card.bgColor}`}>
                                <card.icon className={`h-4 w-4 ${card.color}`} />
                            </div>
                        </CardHeader>
                        <CardContent>
                            <div className="flex items-center justify-between">
                                <div className="text-2xl font-bold">{card.value}</div>
                                <Badge 
                                    variant={card.trendUp ? "default" : "secondary"}
                                    className={`text-xs ${card.trendUp ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}
                                >
                                    {card.trend}
                                </Badge>
                            </div>
                            <p className="text-xs text-muted-foreground mt-1">{card.description}</p>
                            <div className="mt-3">
                                <Progress value={75} className="h-1" />
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>

            {/* Main Content Grid */}
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-7">
                {/* Recent Users */}
                <Card className="col-span-4">
                    <CardHeader className="flex flex-row items-center justify-between">
                        <CardTitle>Pengguna Terbaru</CardTitle>
                        <Button variant="outline" size="sm" asChild>
                            <Link href={route('admin.users.index')}>
                                Lihat Semua
                                <ArrowUpRight className="ml-2 h-4 w-4" />
                            </Link>
                        </Button>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-6">
                            {recentUsers.map((user) => (
                                <div className="flex items-center space-x-4" key={user.id}>
                                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary/10 to-primary/20">
                                        <span className="text-sm font-medium text-primary">
                                            {user.name.charAt(0).toUpperCase()}
                                        </span>
                                    </div>
                                    <div className="flex-1 space-y-1">
                                        <p className="text-sm font-medium leading-none">{user.name}</p>
                                        <p className="text-sm text-muted-foreground">{user.email}</p>
                                    </div>
                                    <div className="flex items-center space-x-2">
                                        <Badge variant="outline" className="text-xs">
                                            {user.role}
                                        </Badge>
                                        <span className="text-xs text-muted-foreground">
                                            {new Date(user.created_at).toLocaleDateString('id-ID', {
                                                day: 'numeric',
                                                month: 'short',
                                                year: 'numeric'
                                            })}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>

                {/* Quick Stats */}
                <Card className="col-span-3">
                    <CardHeader>
                        <CardTitle>Statistik Cepat</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                        {/* Active Users */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Pengguna Aktif</span>
                                <span className="text-sm text-muted-foreground">{formatNumber(stats.activeUsers)}</span>
                            </div>
                            <Progress value={(stats.activeUsers / stats.totalUsers) * 100} className="h-2" />
                        </div>

                        {/* Conversion Rate */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Tingkat Konversi</span>
                                <span className="text-sm text-muted-foreground">{stats.conversionRate}%</span>
                            </div>
                            <Progress value={stats.conversionRate} className="h-2" />
                        </div>

                        {/* Monthly Growth */}
                        <div className="space-y-2">
                            <div className="flex items-center justify-between">
                                <span className="text-sm font-medium">Pertumbuhan Bulanan</span>
                                <span className="text-sm text-muted-foreground">{stats.monthlyGrowth}%</span>
                            </div>
                            <Progress value={stats.monthlyGrowth} className="h-2" />
                        </div>

                        {/* Quick Actions */}
                        <div className="pt-4 border-t">
                            <h4 className="text-sm font-medium mb-3">Aksi Cepat</h4>
                            <div className="space-y-2">
                                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                    <Link href={route('admin.users.create')}>
                                        <UserCheck className="mr-2 h-4 w-4" />
                                        Tambah User
                                    </Link>
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                    <Link href={route('admin.courses.create')}>
                                        <BookOpen className="mr-2 h-4 w-4" />
                                        Tambah Kursus
                                    </Link>
                                </Button>
                                <Button variant="outline" size="sm" className="w-full justify-start" asChild>
                                    <Link href={route('admin.institutions.create')}>
                                        <Building2 className="mr-2 h-4 w-4" />
                                        Tambah Institusi
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}
