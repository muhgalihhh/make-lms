import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Clock } from 'lucide-react';

export default function RequestTimeout() {
  return (
    <>
      <Head title="408 - Permintaan Timeout" />
      <ErrorPage
        code="408"
        title="Permintaan Timeout"
        description="Server mengalami timeout saat menunggu permintaan dari klien. Silakan coba lagi."
        icon={<Clock className="h-16 w-16 text-yellow-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
      />
    </>
  );
}