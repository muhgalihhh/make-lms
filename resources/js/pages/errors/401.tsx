import React from 'react';
import { Head, Link } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Button } from '@/components/ui/button';
import { LogIn, Shield, Home, ArrowLeft } from 'lucide-react';

export default function Unauthorized() {
  return (
    <>
      <Head title="401 - Tidak Sah" />
      <ErrorPage
        code="401"
        title="Akses Tidak Sah"
        description="Anda harus masuk terlebih dahulu untuk mengakses halaman ini. Silakan login dengan akun Anda."
        icon={<LogIn className="h-16 w-16 text-purple-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={false}
        customActions={
          <Button asChild variant="default" className="flex items-center gap-2">
            <Link href="/login">
              <LogIn className="h-4 w-4" />
              Masuk
            </Link>
          </Button>
        }
      />
    </>
  );
}