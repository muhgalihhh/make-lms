import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Server, AlertTriangle, Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function ServerError() {
  return (
    <>
      <Head title="500 - Kesalahan Server" />
      <ErrorPage
        code="500"
        title="Kesalahan Server Internal"
        description="Maaf, terjadi kesalahan pada server kami. Tim kami sedang bekerja untuk memperbaiki masalah ini. Silakan coba lagi dalam beberapa saat."
        icon={<Server className="h-16 w-16 text-red-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
      />
    </>
  );
}