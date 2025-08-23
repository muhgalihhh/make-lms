import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AdminLayout from '@/layouts/admin-layout';
import { PageProps } from '@/types';
import { Head, Link } from '@inertiajs/react';
import { Edit, Mail, Phone, Globe, MapPin, BookOpen, Calendar } from 'lucide-react';

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
}

export default function InstitutionIndex({ institution }: InstitutionIndexProps) {
    return (
        <AdminLayout
            breadcrumbs={[
                { title: 'Admin', href: route('admin.dashboard') },
                { title: 'Informasi Institusi', href: route('admin.institutions.index') },
            ]}
        >
            <Head title="Informasi Institusi" />

            <div className="">
                <div className="flex justify-between items-center mb-6">
                    <div>
                        <h1 className="text-2xl font-bold">Informasi Institusi</h1>
                        <p className="text-muted-foreground">
                            Informasi lembaga atau instansi yang mengelola platform kursus online ini
                        </p>
                    </div>
                    {!institution && (
                        <Link href={route('admin.institutions.create')}>
                            <Button>
                                <Edit className="h-4 w-4 mr-2" />
                                Tambah Informasi Institusi
                            </Button>
                        </Link>
                    )}
                </div>

                {!institution ? (
                    <Card>
                        <CardContent className="pt-6">
                            <div className="text-center py-12">
                                <div className="mx-auto w-24 h-24 bg-muted rounded-full flex items-center justify-center mb-4">
                                    <BookOpen className="h-12 w-12 text-muted-foreground" />
                                </div>
                                <h3 className="text-lg font-semibold mb-2">Belum Ada Informasi Institusi</h3>
                                <p className="text-muted-foreground mb-4">
                                    Platform kursus online ini memerlukan informasi institusi untuk menampilkan data yang lengkap.
                                </p>
                                <Link href={route('admin.institutions.create')}>
                                    <Button>
                                        <Edit className="h-4 w-4 mr-2" />
                                        Tambah Informasi Institusi
                                    </Button>
                                </Link>
                            </div>
                        </CardContent>
                    </Card>
                ) : (
                    <div className="grid gap-6">
                        {/* Card Informasi Utama */}
                        <Card>
                            <CardHeader>
                                <div className="flex justify-between items-start">
                                    <div>
                                        <CardTitle className="text-xl">{institution.name}</CardTitle>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            Informasi utama lembaga
                                        </p>
                                    </div>
                                    <Link href={route('admin.institutions.edit', institution.id)}>
                                        <Button variant="outline" size="sm">
                                            <Edit className="h-4 w-4 mr-2" />
                                            Edit
                                        </Button>
                                    </Link>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-4">
                                {institution.description && (
                                    <div>
                                        <p className="text-sm text-muted-foreground leading-relaxed">
                                            {institution.description}
                                        </p>
                                    </div>
                                )}

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {/* Kontak */}
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-sm">Informasi Kontak</h4>
                                        <div className="space-y-2">
                                            {institution.email && (
                                                <div className="flex items-center text-sm">
                                                    <Mail className="h-4 w-4 mr-2 text-muted-foreground" />
                                                    <span>{institution.email}</span>
                                                </div>
                                            )}
                                            {institution.phone && (
                                                <div className="flex items-center text-sm">
                                                    <Phone className="h-4 w-4 mr-2 text-muted-foreground" />
                                                    <span>{institution.phone}</span>
                                                </div>
                                            )}
                                            {institution.website && (
                                                <div className="flex items-center text-sm">
                                                    <Globe className="h-4 w-4 mr-2 text-muted-foreground" />
                                                    <a 
                                                        href={institution.website} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="text-blue-600 hover:underline"
                                                    >
                                                        {institution.website}
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>

                                    {/* Alamat */}
                                    <div className="space-y-3">
                                        <h4 className="font-medium text-sm">Alamat</h4>
                                        {institution.address ? (
                                            <div className="flex items-start text-sm">
                                                <MapPin className="h-4 w-4 mr-2 text-muted-foreground mt-0.5" />
                                                <span className="leading-relaxed">{institution.address}</span>
                                            </div>
                                        ) : (
                                            <p className="text-sm text-muted-foreground">Alamat belum diisi</p>
                                        )}
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Card Statistik */}
                        <Card>
                            <CardHeader>
                                <CardTitle className="text-lg">Statistik Platform</CardTitle>
                                <p className="text-sm text-muted-foreground">
                                    Ringkasan aktivitas platform kursus
                                </p>
                            </CardHeader>
                            <CardContent>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="flex items-center p-4 bg-muted rounded-lg">
                                        <BookOpen className="h-8 w-8 text-blue-600 mr-3" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Total Kursus</p>
                                            <p className="text-2xl font-bold">{institution.courses_count}</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center p-4 bg-muted rounded-lg">
                                        <Calendar className="h-8 w-8 text-green-600 mr-3" />
                                        <div>
                                            <p className="text-sm text-muted-foreground">Terdaftar Sejak</p>
                                            <p className="text-lg font-semibold">
                                                {new Date(institution.created_at).toLocaleDateString('id-ID', {
                                                    year: 'numeric',
                                                    month: 'long',
                                                    day: 'numeric'
                                                })}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                )}
            </div>
        </AdminLayout>
    );
}