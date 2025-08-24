import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Wrench, AlertTriangle, Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function ServiceUnavailable() {
  return (
    <>
      <Head title="503 - Layanan Tidak Tersedia" />
      <ErrorPage
        code="503"
        title="Layanan Tidak Tersedia"
        description="Layanan sedang dalam pemeliharaan atau tidak tersedia sementara. Tim kami sedang bekerja untuk mengembalikan layanan secepat mungkin. Terima kasih atas kesabaran Anda."
        icon={<Wrench className="h-16 w-16 text-blue-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
      />
    </>
  );
}