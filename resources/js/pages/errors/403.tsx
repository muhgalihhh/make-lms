import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Shield, Lock, Home, ArrowLeft } from 'lucide-react';

export default function Forbidden() {
  return (
    <>
      <Head title="403 - Akses Dilarang" />
      <ErrorPage
        code="403"
        title="Akses Dilarang"
        description="Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator jika Anda yakin ini adalah kesalahan."
        icon={<Shield className="h-16 w-16 text-orange-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={false}
      />
    </>
  );
}