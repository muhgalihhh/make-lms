import { Head } from '@inertiajs/react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AuthenticatedLayout from '@/layouts/authenticated-layout';
import {
    BookOpen,
    GraduationCap,
    CreditCard,
    Star,
    Clock,
    Award,
    ArrowRight,
    Calendar,
    Target,
    TrendingUp
} from 'lucide-react';

interface UserDashboardProps {
    auth: {
        user: {
            id: number;
            name: string;
            email: string;
            role: string;
        };
    };
}

export default function UserDashboard({ auth }: UserDashboardProps) {
    // Mock data untuk dashboard
    const userStats = {
        enrolledCourses: 3,
        completedCourses: 1,
        totalHours: 24,
        certificates: 1,
        averageRating: 4.8
    };

    const recentCourses = [
        {
            id: 1,
            title: "Kelas Bahasa Inggris Intensif",
            progress: 75,
            status: "ongoing",
            lastAccessed: "2 jam yang lalu"
        },
        {
            id: 2,
            title: "TOEFL Preparation",
            progress: 100,
            status: "completed",
            lastAccessed: "1 hari yang lalu"
        },
        {
            id: 3,
            title: "Business English",
            progress: 25,
            status: "ongoing",
            lastAccessed: "3 hari yang lalu"
        }
    ];

    const upcomingSessions = [
        {
            id: 1,
            title: "Live Session - Grammar Review",
            time: "14:00 WIB",
            date: "Hari Ini",
            instructor: "Sarah Johnson"
        },
        {
            id: 2,
            title: "Speaking Practice",
            time: "16:00 WIB",
            date: "Besok",
            instructor: "Michael Chen"
        }
    ];

    return (
        <AuthenticatedLayout user={auth.user}>
            <Head title="Dashboard - Pare EDU HUB" />
            
            {/* Welcome Section */}
            <div className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                    Selamat Datang, {auth.user.name}! 👋
                </h1>
                <p className="text-gray-600">
                    Lanjutkan perjalanan belajar Anda di Pare EDU HUB
                </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Kelas Diikuti</CardTitle>
                        <BookOpen className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.enrolledCourses}</div>
                        <p className="text-xs text-gray-600">Kelas aktif</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Kelas Selesai</CardTitle>
                        <GraduationCap className="h-4 w-4 text-green-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.completedCourses}</div>
                        <p className="text-xs text-gray-600">Sertifikat diperoleh</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Total Jam Belajar</CardTitle>
                        <Clock className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.totalHours}</div>
                        <p className="text-xs text-gray-600">Jam pembelajaran</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">Rating Rata-rata</CardTitle>
                        <Star className="h-4 w-4 text-yellow-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">{userStats.averageRating}</div>
                        <p className="text-xs text-gray-600">Dari 5 bintang</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
                {/* Recent Courses */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <BookOpen className="w-5 h-5" />
                            Kelas Terbaru
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {recentCourses.map((course) => (
                                <div key={course.id} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="flex-1">
                                        <h3 className="font-medium text-sm">{course.title}</h3>
                                        <div className="flex items-center gap-2 mt-1">
                                            <div className="w-full bg-gray-200 rounded-full h-2">
                                                <div 
                                                    className="bg-blue-600 h-2 rounded-full" 
                                                    style={{ width: `${course.progress}%` }}
                                                ></div>
                                            </div>
                                            <span className="text-xs text-gray-500">{course.progress}%</span>
                                        </div>
                                        <p className="text-xs text-gray-500 mt-1">
                                            Terakhir diakses: {course.lastAccessed}
                                        </p>
                                    </div>
                                    <div className="ml-4">
                                        <Badge 
                                            variant={course.status === 'completed' ? 'default' : 'secondary'}
                                            className={course.status === 'completed' ? 'bg-green-600' : ''}
                                        >
                                            {course.status === 'completed' ? 'Selesai' : 'Berlangsung'}
                                        </Badge>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                            Lihat Semua Kelas
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>

                {/* Upcoming Sessions */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                            <Calendar className="w-5 h-5" />
                            Sesi Mendatang
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {upcomingSessions.map((session) => (
                                <div key={session.id} className="p-3 border rounded-lg">
                                    <div className="flex items-start justify-between">
                                        <div className="flex-1">
                                            <h3 className="font-medium text-sm">{session.title}</h3>
                                            <p className="text-xs text-gray-500 mt-1">
                                                Instruktur: {session.instructor}
                                            </p>
                                            <div className="flex items-center gap-2 mt-2">
                                                <Clock className="w-3 h-3 text-gray-400" />
                                                <span className="text-xs text-gray-600">
                                                    {session.date} • {session.time}
                                                </span>
                                            </div>
                                        </div>
                                        <Button size="sm" variant="outline">
                                            Join
                                        </Button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <Button className="w-full mt-4" variant="outline">
                            Lihat Kalender
                            <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                    </CardContent>
                </Card>
            </div>

            {/* Quick Actions */}
            <Card className="mt-8">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Target className="w-5 h-5" />
                        Aksi Cepat
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="grid md:grid-cols-3 gap-4">
                        <Button className="h-16 flex flex-col items-center justify-center gap-2">
                            <BookOpen className="w-6 h-6" />
                            <span className="text-sm">Lanjutkan Belajar</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-2">
                            <Award className="w-6 h-6" />
                            <span className="text-sm">Sertifikat</span>
                        </Button>
                        <Button variant="outline" className="h-16 flex flex-col items-center justify-center gap-2">
                            <TrendingUp className="w-6 h-6" />
                            <span className="text-sm">Progress</span>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </AuthenticatedLayout>
    );
}