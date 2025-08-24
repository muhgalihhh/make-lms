import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Shield, Lock, Home, ArrowLeft, AlertTriangle } from 'lucide-react';

export default function Forbidden() {
  return (
    <>
      <Head title="403 - Akses Dilarang" />
      <ErrorPage
        code="403"
        title="Akses Dilarang"
        description="Maaf, Anda tidak memiliki izin untuk mengakses halaman ini. Silakan hubungi administrator jika Anda yakin ini adalah kesalahan."
        icon={
          <div className="relative">
            <Shield className="h-16 w-16 text-orange-500" />
            <AlertTriangle className="h-6 w-6 text-red-500 absolute -top-1 -right-1" />
          </div>
        }
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={false}
      />
    </>
  );
}