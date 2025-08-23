import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PageHeader, ActionButtons } from '@/components/page-header';
import AdminLayout from '@/layouts/admin-layout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { 
    Settings, 
    Bell, 
    Shield, 
    Palette, 
    Globe,
    Save,
    Moon,
    Sun,
    Monitor
} from 'lucide-react';

interface AdminSettingsProps extends PageProps {}

export default function AdminSettings({}: AdminSettingsProps) {
    const { data, setData, post, processing, errors } = useForm({
        site_name: 'LMS Admin Panel',
        site_description: 'Learning Management System',
        timezone: 'Asia/Jakarta',
        language: 'id',
        notifications_enabled: true,
        email_notifications: true,
        dark_mode: 'system',
        maintenance_mode: false,
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.settings.update'));
    };

    const breadcrumbs = [
        { title: 'Dashboard', href: route('admin.dashboard') },
        { title: 'Settings', href: route('admin.settings') },
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Settings" />

            <PageHeader
                title="Pengaturan Sistem"
                description="Kelola pengaturan umum sistem LMS"
                breadcrumbs={breadcrumbs}
                showBackButton={false}
                actions={
                    <ActionButtons
                        onSave={handleSubmit}
                        isLoading={processing}
                        saveLabel="Simpan Pengaturan"
                        showCancel={false}
                    />
                }
            />

            <div className="grid gap-6 md:grid-cols-2">
                {/* General Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Settings className="h-5 w-5" />
                            <span>Pengaturan Umum</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label htmlFor="site_name">Nama Situs</Label>
                            <Input
                                id="site_name"
                                value={data.site_name}
                                onChange={(e) => setData('site_name', e.target.value)}
                                placeholder="Masukkan nama situs"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="site_description">Deskripsi Situs</Label>
                            <Input
                                id="site_description"
                                value={data.site_description}
                                onChange={(e) => setData('site_description', e.target.value)}
                                placeholder="Masukkan deskripsi situs"
                            />
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="timezone">Zona Waktu</Label>
                            <Select value={data.timezone} onValueChange={(value) => setData('timezone', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih zona waktu" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Asia/Jakarta">Asia/Jakarta (WIB)</SelectItem>
                                    <SelectItem value="Asia/Makassar">Asia/Makassar (WITA)</SelectItem>
                                    <SelectItem value="Asia/Jayapura">Asia/Jayapura (WIT)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="language">Bahasa</Label>
                            <Select value={data.language} onValueChange={(value) => setData('language', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih bahasa" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="id">Bahasa Indonesia</SelectItem>
                                    <SelectItem value="en">English</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* Notification Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Bell className="h-5 w-5" />
                            <span>Pengaturan Notifikasi</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Notifikasi Sistem</Label>
                                <p className="text-sm text-muted-foreground">
                                    Aktifkan notifikasi untuk aktivitas sistem
                                </p>
                            </div>
                            <Switch
                                checked={data.notifications_enabled}
                                onCheckedChange={(checked) => setData('notifications_enabled', checked)}
                            />
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Notifikasi Email</Label>
                                <p className="text-sm text-muted-foreground">
                                    Kirim notifikasi melalui email
                                </p>
                            </div>
                            <Switch
                                checked={data.email_notifications}
                                onCheckedChange={(checked) => setData('email_notifications', checked)}
                            />
                        </div>
                    </CardContent>
                </Card>

                {/* Appearance Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Palette className="h-5 w-5" />
                            <span>Tampilan</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="space-y-2">
                            <Label>Mode Tema</Label>
                            <Select value={data.dark_mode} onValueChange={(value) => setData('dark_mode', value)}>
                                <SelectTrigger>
                                    <SelectValue placeholder="Pilih mode tema" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="light">
                                        <div className="flex items-center space-x-2">
                                            <Sun className="h-4 w-4" />
                                            <span>Terang</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="dark">
                                        <div className="flex items-center space-x-2">
                                            <Moon className="h-4 w-4" />
                                            <span>Gelap</span>
                                        </div>
                                    </SelectItem>
                                    <SelectItem value="system">
                                        <div className="flex items-center space-x-2">
                                            <Monitor className="h-4 w-4" />
                                            <span>Sistem</span>
                                        </div>
                                    </SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </CardContent>
                </Card>

                {/* System Settings */}
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <Shield className="h-5 w-5" />
                            <span>Pengaturan Sistem</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-0.5">
                                <Label>Mode Maintenance</Label>
                                <p className="text-sm text-muted-foreground">
                                    Aktifkan mode maintenance untuk perbaikan sistem
                                </p>
                            </div>
                            <Switch
                                checked={data.maintenance_mode}
                                onCheckedChange={(checked) => setData('maintenance_mode', checked)}
                            />
                        </div>

                        <div className="pt-4 border-t">
                            <Button variant="outline" className="w-full">
                                <Globe className="mr-2 h-4 w-4" />
                                Backup Database
                            </Button>
                        </div>

                        <div className="pt-2">
                            <Button variant="outline" className="w-full">
                                <Shield className="mr-2 h-4 w-4" />
                                Clear Cache
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}