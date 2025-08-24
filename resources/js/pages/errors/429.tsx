import React, { useState, useEffect } from 'react';
import { Head } from '@inertiajs/react';
import ErrorPage from '@/components/ErrorPage';
import { Timer, AlertTriangle, Home, ArrowLeft, RefreshCw } from 'lucide-react';

export default function TooManyRequests() {
  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head title="429 - Terlalu Banyak Request" />
      <ErrorPage
        code="429"
        title="Terlalu Banyak Request"
        description={`Anda telah melakukan terlalu banyak request dalam waktu singkat. Silakan tunggu ${countdown} detik sebelum mencoba lagi.`}
        icon={<Timer className="h-16 w-16 text-red-500" />}
        showHomeButton={true}
        showBackButton={true}
        showRefreshButton={countdown === 0}
      />
    </>
  );
}