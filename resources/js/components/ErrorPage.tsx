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
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-lg">
        <Card className="shadow-2xl border-0 bg-white/90 backdrop-blur-md rounded-2xl overflow-hidden">
          <CardHeader className="text-center pb-6 bg-gradient-to-r from-slate-50 to-blue-50">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-br from-red-50 to-orange-50 border-2 border-orange-200">
                {icon}
              </div>
            </div>
            <div className="space-y-3">
              <CardTitle className="text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-slate-600">
                {code}
              </CardTitle>
              <h2 className="text-2xl font-bold text-slate-700">{title}</h2>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-8 p-8">
            <p className="text-slate-600 leading-relaxed text-lg">{description}</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {showBackButton && (
                <Button
                  variant="outline"
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 px-6 py-3 text-base font-medium"
                >
                  <ArrowLeft className="h-5 w-5" />
                  Kembali
                </Button>
              )}
              
              {showHomeButton && (
                <Button asChild className="flex items-center gap-2 px-6 py-3 text-base font-medium bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700">
                  <Link href="/">
                    <Home className="h-5 w-5" />
                    Beranda
                  </Link>
                </Button>
              )}
              
              {showRefreshButton && (
                <Button
                  variant="outline"
                  onClick={() => window.location.reload()}
                  className="flex items-center gap-2 px-6 py-3 text-base font-medium"
                >
                  <RefreshCw className="h-5 w-5" />
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