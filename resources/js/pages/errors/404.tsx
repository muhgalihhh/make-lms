import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Search, Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <>
      <Head title="404 - Halaman Tidak Ditemukan" />
      <ErrorPage
        code="404"
        title="Halaman Tidak Ditemukan"
        description="Maaf, halaman yang Anda cari tidak dapat ditemukan. Mungkin halaman tersebut telah dipindahkan, dihapus, atau URL yang Anda masukkan salah."
        icon={<Search className="h-16 w-16 text-blue-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={false}
      />
    </>
  );
}