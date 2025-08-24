import React from 'react';
import { Link } from '@inertiajs/react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { AlertTriangle, Home, ArrowLeft, RefreshCw } from 'lucide-react';

interface ErrorPageProps {
  code: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
  showHomeButton?: boolean;
  showBackButton?: boolean;
  showRefreshButton?: boolean;
  customActions?: React.ReactNode;
}

export default function ErrorPage({
  code,
  title,
  description,
  icon = <AlertTriangle className="h-16 w-16 text-red-500" />,
  showHomeButton = true,
  showBackButton = true,
  showRefreshButton = false,
  customActions,
}: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur-sm">
          <CardHeader className="text-center pb-6">
            <div className="flex justify-center mb-4">
              {icon}
            </div>
            <div className="space-y-2">
              <CardTitle className="text-6xl font-bold text-slate-800">
                {code}
              </CardTitle>
              <h2 className="text-xl font-semibold text-slate-700">{title}</h2>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <p className="text-slate-600 leading-relaxed">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              {showBackButton && (
                <Button
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Kembali
                </Button>
              )}
              
              {showHomeButton && (
                <Button asChild className="flex items-center gap-2">
                  <Link href="/">
                    <Home className="h-4 w-4" />
                    Beranda
                  </Link>
                </Button>
              )}
              
              {showRefreshButton && (
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-2"
                >
                  <RefreshCw className="h-4 w-4" />
                  Muat Ulang
                </Button>
              )}
              
              {customActions}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}