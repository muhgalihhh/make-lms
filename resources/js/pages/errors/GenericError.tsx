import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { AlertTriangle } from 'lucide-react';

interface GenericErrorProps {
  code?: string;
  title?: string;
  description?: string;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  showRefreshButton?: boolean;
}

export default function GenericError({
  code = 'Error',
  title = 'Terjadi Kesalahan',
  description = 'Maaf, terjadi kesalahan yang tidak terduga. Silakan coba lagi atau hubungi administrator jika masalah berlanjut.',
  showHomeButton = true,
  showBackButton = true,
  showRefreshButton = true,
}: GenericErrorProps) {
  return (
    <>
      <Head title={`${code} - ${title}`} />
      <ErrorPage
        code={code}
        title={title}
        description={description}
        icon={<AlertTriangle className="h-16 w-16 text-red-500" />}
        showHomeButton={showHomeButton}
        showBackButton={showBackButton}
        showRefreshButton={showRefreshButton}
      />
    </>
  );
}