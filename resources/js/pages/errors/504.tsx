import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Clock } from 'lucide-react';

export default function GatewayTimeout() {
  return (
    <>
      <Head title="504 - Gateway Timeout" />
      <ErrorPage
        code="504"
        title="Gateway Timeout"
        description="Server upstream tidak memberikan respons dalam waktu yang ditentukan. Silakan coba lagi nanti."
        icon={<Clock className="h-16 w-16 text-yellow-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
      />
    </>
  );
}