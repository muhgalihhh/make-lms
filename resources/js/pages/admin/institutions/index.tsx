import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AdminLayout from '@/layouts/admin-layout';
import { PageProps } from '@/types';
import { Head, Link, router } from '@inertiajs/react';
import { Plus, Edit, Trash2, Mail, Phone, Globe, MapPin, Calendar, BookOpen } from 'lucide-react';

interface Institution {
    id: number;
    name: string;
    description: string;
    address: string;
    phone: string;
    email: string;
    website: string;
    created_at: string;
    courses_count: number;
}

interface InstitutionIndexProps extends PageProps {
    institution: Institution | null;
    hasInstitution: boolean;
}

export default function InstitutionIndex({ institution, hasInstitution }: InstitutionIndexProps) {
    return (
        <AdminLayout
            breadcrumbs={[
                { title: 'Admin', href: route('admin.dashboard') },
                { title: 'Data Institusi', href: route('admin.institutions.index') },
            ]}
        >
            <Head title="Kelola Data Institusi" />

            <div className="">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Kelola Data Institusi</h1>
                        <p className="text-muted-foreground">
                            Kelola informasi institusi untuk website online course Anda
                        </p>
                    </div>
                    {!hasInstitution && (
                        <Link href={route('admin.institutions.create')}>
                            <Button>
                                <Plus className="h-4 w-4 mr-2" />
                                Tambah Data Institusi
                            </Button>
                        </Link>
                    )}
                </div>

                {hasInstitution && institution ? (
                    <Card className="max-w-4xl">
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <div>
                                    <CardTitle className="text-2xl">{institution.name}</CardTitle>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Data institusi untuk website online course Anda
                                    </p>
                                </div>
                                <div className="flex space-x-2">
                                    <Link href={route('admin.institutions.edit', institution.id)}>
                                        <Button variant="outline" size="sm">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit
                                        </Button>
                                    </Link>
                                    <Button 
                                        variant="destructive" 
                                        size="sm"
                                        onClick={() => {
                                            if (confirm('Apakah Anda yakin ingin menghapus data institusi ini?')) {
                                                router.delete(route('admin.institutions.destroy', institution.id));
                                            }
                                        }}
                                    >
                                        <Trash2 className="h-4 w-4 mr-2" />
                                        Hapus
                                    </Button>
                                </div>
                            </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                            {/* Deskripsi */}
                            {institution.description && (
                                <div>
                                    <h3 className="font-semibold text-lg mb-2">Deskripsi</h3>
                                    <p className="text-muted-foreground">{institution.description}</p>
                                </div>
                            )}

                            {/* Informasi Kontak */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Informasi Kontak</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {institution.email && (
                                        <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                                            <Mail className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Email</p>
                                                <p className="text-sm text-muted-foreground">{institution.email}</p>
                                            </div>
                                        </div>
                                    )}
                                    {institution.phone && (
                                        <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                                            <Phone className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Telepon</p>
                                                <p className="text-sm text-muted-foreground">{institution.phone}</p>
                                            </div>
                                        </div>
                                    )}
                                    {institution.website && (
                                        <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                                            <Globe className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Website</p>
                                                <a 
                                                    href={institution.website} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="text-sm text-blue-600 hover:underline"
                                                >
                                                    {institution.website}
                                                </a>
                                            </div>
                                        </div>
                                    )}
                                    {institution.address && (
                                        <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                                            <MapPin className="h-5 w-5 text-muted-foreground" />
                                            <div>
                                                <p className="text-sm font-medium">Alamat</p>
                                                <p className="text-sm text-muted-foreground">{institution.address}</p>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>

                            {/* Statistik */}
                            <div>
                                <h3 className="font-semibold text-lg mb-3">Statistik</h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                                        <BookOpen className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm font-medium">Total Kursus</p>
                                            <p className="text-2xl font-bold">{institution.courses_count}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-3 p-3 bg-muted/50 rounded-lg">
                                        <Calendar className="h-5 w-5 text-muted-foreground" />
                                        <div>
                                            <p className="text-sm font-medium">Tanggal Dibuat</p>
                                            <p className="text-sm text-muted-foreground">
                                                {new Date(institution.created_at).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <Card className="max-w-2xl">
                        <CardHeader>
                            <CardTitle>Belum Ada Data Institusi</CardTitle>
                            <p className="text-sm text-muted-foreground">
                                Anda belum memiliki data institusi. Silakan tambahkan data institusi untuk website online course Anda.
                            </p>
                        </CardHeader>
                        <CardContent>
                            <Link href={route('admin.institutions.create')}>
                                <Button>
                                    <Plus className="h-4 w-4 mr-2" />
                                    Tambah Data Institusi
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                )}
            </div>
        </AdminLayout>
    );
}