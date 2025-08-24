import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Clock, AlertTriangle, Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function PageExpired() {
  return (
    <>
      <Head title="419 - Halaman Kadaluarsa" />
      <ErrorPage
        code="419"
        title="Halaman Kadaluarsa"
        description="Halaman yang Anda akses telah kadaluarsa. Ini biasanya terjadi karena sesi Anda telah berakhir atau token CSRF tidak valid. Silakan muat ulang halaman."
        icon={<Clock className="h-16 w-16 text-yellow-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
      />
    </>
  );
}