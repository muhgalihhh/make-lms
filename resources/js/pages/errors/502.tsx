import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Server } from 'lucide-react';

export default function BadGateway() {
  return (
    <>
      <Head title="502 - Gateway Buruk" />
      <ErrorPage
        code="502"
        title="Gateway Buruk"
        description="Server menerima respons yang tidak valid dari server upstream. Silakan coba lagi nanti."
        icon={<Server className="h-16 w-16 text-red-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
      />
    </>
  );
}