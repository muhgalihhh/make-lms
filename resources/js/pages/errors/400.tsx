import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { AlertTriangle } from 'lucide-react';

export default function BadRequest() {
  return (
    <>
      <Head title="400 - Permintaan Buruk" />
      <ErrorPage
        code="400"
        title="Permintaan Buruk"
        description="Permintaan yang Anda kirim tidak valid atau tidak dapat diproses oleh server."
        icon={<AlertTriangle className="h-16 w-16 text-red-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
      />
    </>
  );
}