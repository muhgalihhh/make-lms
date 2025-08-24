// resources/js/pages/admin/dashboard.tsx

import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AuthenticatedLayout from '@/layouts/authenticated-layout';
import {
    Users,
    Building2,
    BookOpen,
    CreditCard,
    TrendingUp,
    TrendingDown,
    DollarSign,
    Award,
    ArrowRight,
    Calendar,
    Target,
    Settings
} from 'lucide-react';

interface AdminDashboardProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
            role: string;
        };
    };
}

export default function AdminDashboard({ auth }: AdminDashboardProps) {
    // Mock data untuk admin dashboard
    const adminStats = {
        totalUsers: 1250,
        totalInstitutions: 15,
        totalCourses: 50,
        totalRevenue: 25000000,
        newUsersThisMonth: 45,
        activeCourses: 35,
        pendingTransactions: 8,
        averageRating: 4.7
    };

    const recentUsers = [
        {
            id: 1,
            name: "Ahmad Rizki",
            email: "ahmad@example.com",
            joinedAt: "2 jam yang lalu",
            status: "active"
        },
        {
            id: 2,
            name: "Sarah Putri",
            email: "sarah@example.com",
            joinedAt: "4 jam yang lalu",
            status: "active"
        },
        {
            id: 3,
            name: "Michael Chen",
            email: "michael@example.com",
            joinedAt: "1 hari yang lalu",
            status: "pending"
        }
    ];

    const recentTransactions = [
        {
            id: 1,
            user: "Ahmad Rizki",
            course: "Kelas Bahasa Inggris Intensif",
            amount: 2500000,
            status: "completed",
            date: "2 jam yang lalu"
        },
        {
            id: 2,
            user: "Sarah Putri",
            course: "TOEFL Preparation",
            amount: 1800000,
            status: "pending",
            date: "4 jam yang lalu"
        },
        {
            id: 3,
            user: "Michael Chen",
            course: "IELTS Master Class",
            amount: 3200000,
            status: "completed",
            date: "1 hari yang lalu"
        }
    ];

    const topInstitutions = [
        {
            id: 1,
            name: "Pare English Course",
            rating: 4.8,
            students: 500,
            revenue: 12500000
        },
        {
            id: 2,
            name: "Kampung Inggris Global",
            rating: 4.6,
            students: 350,
            revenue: 8750000
        },
        {
            id: 3,
            name: "English Village Pare",
            rating: 4.4,
            students: 280,
            revenue: 7000000
        }
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Admin Dashboard - Pare EDU HUB" />
            
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Admin Dashboard 👨‍💼
                </h1>
                <p className="text-gray-600">
                    Kelola platform Pare EDU HUB dan pantau performa sistem
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Users</CardTitle>
                        <Users className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{adminStats.totalUsers.toLocaleString()}</div>
                        <div className="flex items-center gap-1 text-xs text-green-600">
                            <TrendingUp className="w-3 h-3" />
                            +{adminStats.newUsersThisMonth} bulan ini
                        </div>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Lembaga</CardTitle>
                        <Building2 className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{adminStats.totalInstitutions}</div>
                        <p className="text-xs text-gray-600">Lembaga terdaftar</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Kelas Aktif</CardTitle>
                        <BookOpen className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{adminStats.activeCourses}</div>
                        <p className="text-xs text-gray-600">Dari {adminStats.totalCourses} total</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Revenue</CardTitle>
                        <DollarSign className="h-4 w-4 text-yellow-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">
                            Rp {(adminStats.totalRevenue / 1000000).toFixed(1)}M
                        </div>
                        <div className="flex items-center gap-1 text-xs text-green-600">
                            <TrendingUp className="w-3 h-3" />
                            +12% bulan ini
                        </div>
                    </CardContent>
                </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-8">
                {/* Recent Users */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Users className="w-5 h-5" />
                            User Terbaru
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentUsers.map((user) => (
                                <div key={user.id} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div>
                                        <h3 className="font-medium text-sm">{user.name}</h3>
                                        <p className="text-xs text-gray-500">{user.email}</p>
                                        <p className="text-xs text-gray-400 mt-1">
                                            Bergabung: {user.joinedAt}
                                        </p>
                                    </div>
                                    <Badge 
                                        variant={user.status === 'active' ? 'default' : 'secondary'}
                                        className={user.status === 'active' ? 'bg-green-600' : 'bg-yellow-600'}
                                    >
                                        {user.status === 'active' ? 'Aktif' : 'Pending'}
                                    </Badge>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                            Lihat Semua Users
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Recent Transactions */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <CreditCard className="w-5 h-5" />
                            Transaksi Terbaru
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentTransactions.map((transaction) => (
                                <div key={transaction.id} className="p-3 border rounded-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm">{transaction.user}</h3>
                                            <p className="text-xs text-gray-500">{transaction.course}</p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <DollarSign className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-600">
                                                    Rp {transaction.amount.toLocaleString()}
                                                </span>
                                                <span className="text-xs text-gray-400">•</span>
                                                <span className="text-xs text-gray-400">{transaction.date}</span>
                                            </div>
                                        </div>
                                        <Badge 
                                            variant={transaction.status === 'completed' ? 'default' : 'secondary'}
                                            className={transaction.status === 'completed' ? 'bg-green-600' : 'bg-yellow-600'}
                                        >
                                            {transaction.status === 'completed' ? 'Selesai' : 'Pending'}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                            Lihat Semua Transaksi
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Top Institutions */}
            <Card className="mb-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Award className="w-5 h-5" />
                        Lembaga Terbaik
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="space-y-4">
                        {topInstitutions.map((institution, index) => (
                            <div key={institution.id} className="flex items-center justify-between p-4 border rounded-lg">
                                <div className="flex items-center gap-4">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                                        <span className="text-sm font-bold text-blue-600">#{index + 1}</span>
                                    </div>
                                    <div>
                                        <h3 className="font-medium">{institution.name}</h3>
                                        <div className="flex items-center gap-4 mt-1">
                                            <div className="flex items-center gap-1">
                                                <span className="text-sm text-yellow-600">★</span>
                                                <span className="text-xs text-gray-600">{institution.rating}</span>
                                            </div>
                                            <span className="text-xs text-gray-500">
                                                {institution.students} siswa
                                            </span>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <div className="font-semibold text-sm">
                                        Rp {(institution.revenue / 1000000).toFixed(1)}M
                                    </div>
                                    <div className="text-xs text-gray-500">Revenue</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>

            {/* Quick Actions */}
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Aksi Cepat
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-4 gap-4">
                        <Button className="h-16 flex flex-col items-center justify-center gap-2">
                            <Users className="w-6 h-6" />
                            <span className="text-sm">Kelola Users</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-2">
                            <Building2 className="w-6 h-6" />
                            <span className="text-sm">Kelola Lembaga</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-2">
                            <BookOpen className="w-6 h-6" />
                            <span className="text-sm">Kelola Kelas</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-2">
                            <Settings className="w-6 h-6" />
                            <span className="text-sm">Pengaturan</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}
