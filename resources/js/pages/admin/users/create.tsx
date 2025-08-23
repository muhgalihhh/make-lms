import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { PageHeader, ActionButtons } from '@/components/page-header';
import AdminLayout from '@/layouts/admin-layout';
import { PageProps } from '@/types';
import { Head, useForm, router } from '@inertiajs/react';

interface UserCreateProps extends PageProps {}

export default function UserCreate({}: UserCreateProps) {
    const { data, setData, post, processing, errors } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
        role: 'user',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post(route('admin.users.store'));
    };

    const handleCancel = () => {
        router.visit(route('admin.users.index'));
    };

    const breadcrumbs = [
        { title: 'Dashboard', href: route('admin.dashboard') },
        { title: 'Users', href: route('admin.users.index') },
        { title: 'Create', href: route('admin.users.create') },
    ];

    return (
        <AdminLayout breadcrumbs={breadcrumbs}>
            <Head title="Create User" />

            <PageHeader
                title="Tambah User Baru"
                description="Buat akun pengguna baru untuk sistem LMS"
                breadcrumbs={breadcrumbs}
                backUrl={route('admin.users.index')}
                actions={
                    <ActionButtons
                        onSave={handleSubmit}
                        onCancel={handleCancel}
                        isLoading={processing}
                        saveLabel="Simpan User"
                        cancelLabel="Batal"
                    />
                }
            />

            <div className="max-w-2xl">
                <Card>
                    <CardHeader>
                        <CardTitle className="flex items-center space-x-2">
                            <span>Informasi User</span>
                        </CardTitle>
                    </CardHeader>
                    <CardContent>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
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

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <Label htmlFor="password" className="text-sm font-medium">
                                        Password <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="password"
                                        type="password"
                                        value={data.password}
                                        onChange={(e) => setData('password', e.target.value)}
                                        placeholder="Masukkan password"
                                        className={errors.password ? 'border-red-500' : ''}
                                    />
                                    {errors.password && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠</span>
                                            {errors.password}
                                        </p>
                                    )}
                                </div>

                                <div className="space-y-2">
                                    <Label htmlFor="password_confirmation" className="text-sm font-medium">
                                        Konfirmasi Password <span className="text-red-500">*</span>
                                    </Label>
                                    <Input
                                        id="password_confirmation"
                                        type="password"
                                        value={data.password_confirmation}
                                        onChange={(e) => setData('password_confirmation', e.target.value)}
                                        placeholder="Konfirmasi password"
                                        className={errors.password_confirmation ? 'border-red-500' : ''}
                                    />
                                    {errors.password_confirmation && (
                                        <p className="text-sm text-red-600 flex items-center">
                                            <span className="mr-1">⚠</span>
                                            {errors.password_confirmation}
                                        </p>
                                    )}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <Label htmlFor="role" className="text-sm font-medium">
                                    Role <span className="text-red-500">*</span>
                                </Label>
                                <Select value={data.role} onValueChange={(value) => setData('role', value)}>
                                    <SelectTrigger className={errors.role ? 'border-red-500' : ''}>
                                        <SelectValue placeholder="Pilih role" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="user">User</SelectItem>
                                        <SelectItem value="admin">Admin</SelectItem>
                                    </SelectContent>
                                </Select>
                                {errors.role && (
                                    <p className="text-sm text-red-600 flex items-center">
                                        <span className="mr-1">⚠</span>
                                        {errors.role}
                                    </p>
                                )}
                            </div>

                            <div className="flex justify-end space-x-2 pt-6 border-t">
                                <ActionButtons
                                    onSave={handleSubmit}
                                    onCancel={handleCancel}
                                    isLoading={processing}
                                    saveLabel="Simpan User"
                                    cancelLabel="Batal"
                                />
                            </div>
                        </form>
                    </CardContent>
                </Card>
            </div>
        </AdminLayout>
    );
}