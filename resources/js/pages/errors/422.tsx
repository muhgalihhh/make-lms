import React from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { AlertCircle, Home, ArrowLeft, RefreshCw } from 'lucide-react';

interface ValidationErrorProps {
  errors?: Record<string, string[]>;
}

export default function ValidationError({ errors }: ValidationErrorProps) {
  return (
    <>
      <Head title="422 - Data Tidak Valid" />
      <ErrorPage
        code="422"
        title="Data Tidak Valid"
        description="Data yang Anda masukkan tidak valid. Silakan periksa kembali dan coba lagi."
        icon={<AlertCircle className="h-16 w-16 text-orange-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={true}
        customActions={
          errors && Object.keys(errors).length > 0 && (
            <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg">
              <h4 className="text-sm font-medium text-red-800 mb-2">Detail Kesalahan:</h4>
              <ul className="text-sm text-red-700 space-y-1">
                {Object.entries(errors).map(([field, messages]) => (
                  <li key={field}>
                    <strong>{field}:</strong> {messages.join(', ')}
                  </li>
                ))}
              </ul>
            </div>
          )
        }
      />
    </>
  );
}