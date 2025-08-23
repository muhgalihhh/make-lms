import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { PageHeader, ActionButtons } from '@/components/page-header';
import AdminLayout from '@/layouts/admin-layout';
import { PageProps } from '@/types';
import { Head, useForm } from '@inertiajs/react';
import { 
    User, 
    Mail, 
    Calendar,
    Shield,
    Camera,
    Save,
    Key,
    Eye,
    EyeOff
} from 'lucide-react';
import { useState } from 'react';

interface AdminProfileProps extends PageProps {}

export default function AdminProfile({ auth }: AdminProfileProps) {
    const [showPassword, setShowPassword] = useState(false);
    const [showNewPassword, setShowNewPassword] = useState(false);
    
    const { data, setData, post, processing, errors } = useForm({
        name: auth.user.name,
        email: auth.user.email,
        current_password: '',
        new_password: '',
        new_password_confirmation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.profile.update'));
    };

    const getInitials = (name: string) => {
        return name
            .split(' ')
            .map((n) => n[0])
            .join('')
            .toUpperCase()
            .slice(0, 2);
    };

    const breadcrumbs = [
        { title: 'Dashboard', href: route('admin.dashboard') },
        { title: 'Profile', href: route('admin.profile') },
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Profile" />

            <PageHeader
                title="Profil Saya"
                description="Kelola informasi profil dan keamanan akun Anda"
                breadcrumbs={breadcrumbs}
                showBackButton={false}
                actions={
                    <ActionButtons
                        onSave={handleSubmit}
                        isLoading={processing}
                        saveLabel="Simpan Perubahan"
                        showCancel={false}
                    />
                }
            />

            <div className="grid gap-6 md:grid-cols-3">
                {/* Profile Overview */}
                <div className="md:col-span-1">
                    <Card>
                        <CardHeader className="text-center">
                            <div className="flex justify-center mb-4">
                                <div className="relative">
                                    <Avatar className="h-24 w-24">
                                        <AvatarImage src="" alt={auth.user.name} />
                                        <AvatarFallback className="text-2xl font-bold bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
                                            {getInitials(auth.user.name)}
                                        </AvatarFallback>
                                    </Avatar>
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        className="absolute -bottom-2 -right-2 h-8 w-8 rounded-full p-0"
                                    >
                                        <Camera className="h-4 w-4" />
                                    </Button>
                                </div>
                            </div>
                            <CardTitle className="text-xl">{auth.user.name}</CardTitle>
                            <p className="text-muted-foreground">{auth.user.email}</p>
                            <div className="flex justify-center mt-2">
                                <Badge variant="secondary" className="capitalize">
                                    <Shield className="mr-1 h-3 w-3" />
                                    {auth.user.role}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="flex items-center space-x-3 text-sm">
                                <Mail className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Bergabung sejak</span>
                                <span className="font-medium">
                                    {new Date(auth.user.created_at).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                            <div className="flex items-center space-x-3 text-sm">
                                <Calendar className="h-4 w-4 text-muted-foreground" />
                                <span className="text-muted-foreground">Terakhir diperbarui</span>
                                <span className="font-medium">
                                    {new Date(auth.user.updated_at).toLocaleDateString('id-ID', {
                                        day: 'numeric',
                                        month: 'long',
                                        year: 'numeric'
                                    })}
                                </span>
                            </div>
                        </CardContent>
                    </Card>
                </div>

                {/* Profile Form */}
                <div className="md:col-span-2 space-y-6">
                    {/* Personal Information */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <User className="h-5 w-5" />
                                <span>Informasi Pribadi</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="name" className="text-sm font-medium">
                                        Nama Lengkap <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="name"
                                        value={data.name}
                                        onChange={(e) => setData('name', e.target.value)}
                                        placeholder="Masukkan nama lengkap"
                                        className={errors.name ? 'border-red-500' : ''}
                                    />
                                    {errors.name && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠</span>
                                            {errors.name}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="email" className="text-sm font-medium">
                                        Email <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="email"
                                        type="email"
                                        value={data.email}
                                        onChange={(e) => setData('email', e.target.value)}
                                        placeholder="Masukkan email"
                                        className={errors.email ? 'border-red-500' : ''}
                                    />
                                    {errors.email && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠</span>
                                            {errors.email}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Change Password */}
                    <Card>
                        <CardHeader>
                            <CardTitle className="flex items-center space-x-2">
                                <Key className="h-5 w-5" />
                                <span>Ubah Password</span>
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                            <div className="space-y-2">
                                <Label htmlFor="current_password" className="text-sm font-medium">
                                    Password Saat Ini
                                </Label>
                                <div className="relative">
                                    <Input
                                        id="current_password"
                                        type={showPassword ? 'text' : 'password'}
                                        value={data.current_password}
                                        onChange={(e) => setData('current_password', e.target.value)}
                                        placeholder="Masukkan password saat ini"
                                        className={errors.current_password ? 'border-red-500 pr-10' : 'pr-10'}
                                    />
                                    <Button
                                        type="button"
                                        variant="ghost"
                                        size="sm"
                                        className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                        onClick={() => setShowPassword(!showPassword)}
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-4 w-4" />
                                        ) : (
                                            <Eye className="h-4 w-4" />
                                        )}
                                    </Button>
                                </div>
                                {errors.current_password && (
                                    <p className="text-sm text-red-600 flex items-center">
                                        <span className="mr-1">⚠</span>
                                        {errors.current_password}
                                    </p>
                                )}
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <Label htmlFor="new_password" className="text-sm font-medium">
                                        Password Baru
                                    </Label>
                                    <div className="relative">
                                        <Input
                                            id="new_password"
                                            type={showNewPassword ? 'text' : 'password'}
                                            value={data.new_password}
                                            onChange={(e) => setData('new_password', e.target.value)}
                                            placeholder="Masukkan password baru"
                                            className={errors.new_password ? 'border-red-500 pr-10' : 'pr-10'}
                                        />
                                        <Button
                                            type="button"
                                            variant="ghost"
                                            size="sm"
                                            className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                                            onClick={() => setShowNewPassword(!showNewPassword)}
                                        >
                                            {showNewPassword ? (
                                                <EyeOff className="h-4 w-4" />
                                            ) : (
                                                <Eye className="h-4 w-4" />
                                            )}
                                        </Button>
                                    </div>
                                    {errors.new_password && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠</span>
                                            {errors.new_password}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="new_password_confirmation" className="text-sm font-medium">
                                        Konfirmasi Password Baru
                                    </Label>
                                    <Input
                                        id="new_password_confirmation"
                                        type="password"
                                        value={data.new_password_confirmation}
                                        onChange={(e) => setData('new_password_confirmation', e.target.value)}
                                        placeholder="Konfirmasi password baru"
                                        className={errors.new_password_confirmation ? 'border-red-500' : ''}
                                    />
                                    {errors.new_password_confirmation && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠</span>
                                            {errors.new_password_confirmation}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </AdminLayout>
    );
}