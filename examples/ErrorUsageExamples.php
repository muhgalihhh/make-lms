<?php

namespace App\Http\Controllers\Examples;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Session\TokenMismatchException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;
use Symfony\Component\HttpKernel\Exception\ServiceUnavailableHttpException;
use Inertia\Inertia;

class ErrorUsageExamples extends Controller
{
    /**
     * Contoh 1: Error 404 - Halaman tidak ditemukan
     */
    public function showNotFoundExample()
    {
        // Cara 1: Menggunakan Inertia render langsung
        return Inertia::render('errors/404');
        
        // Cara 2: Menggunakan exception (akan ditangani otomatis oleh Handler)
        // throw new NotFoundHttpException('Halaman tidak ditemukan');
        
        // Cara 3: Menggunakan redirect ke route
        // return redirect()->route('errors.404');
    }

    /**
     * Contoh 2: Error 403 - Akses dilarang
     */
    public function showForbiddenExample()
    {
        // Cara 1: Menggunakan Inertia render langsung
        return Inertia::render('errors/403');
        
        // Cara 2: Menggunakan exception
        // throw new AuthorizationException('Anda tidak memiliki izin untuk mengakses halaman ini');
        
        // Cara 3: Menggunakan redirect ke route
        // return redirect()->route('errors.403');
    }

    /**
     * Contoh 3: Error 401 - Belum login
     */
    public function showUnauthorizedExample()
    {
        // Cara 1: Menggunakan Inertia render langsung
        return Inertia::render('errors/401');
        
        // Cara 2: Menggunakan exception
        // throw new \Illuminate\Auth\AuthenticationException('Anda harus login terlebih dahulu');
        
        // Cara 3: Menggunakan redirect ke route
        // return redirect()->route('errors.401');
    }

    /**
     * Contoh 4: Error 500 - Kesalahan server
     */
    public function showServerErrorExample()
    {
        // Cara 1: Menggunakan Inertia render langsung
        return Inertia::render('errors/500');
        
        // Cara 2: Menggunakan exception
        // throw new \Exception('Terjadi kesalahan pada server');
        
        // Cara 3: Menggunakan redirect ke route
        // return redirect()->route('errors.500');
    }

    /**
     * Contoh 5: Error 419 - Token kadaluarsa
     */
    public function showTokenMismatchExample()
    {
        // Cara 1: Menggunakan Inertia render langsung
        return Inertia::render('errors/419');
        
        // Cara 2: Menggunakan exception
        // throw new TokenMismatchException('Token CSRF kadaluarsa');
        
        // Cara 3: Menggunakan redirect ke route
        // return redirect()->route('errors.419');
    }

    /**
     * Contoh 6: Error 429 - Terlalu banyak request
     */
    public function showTooManyRequestsExample()
    {
        // Cara 1: Menggunakan Inertia render langsung
        return Inertia::render('errors/429');
        
        // Cara 2: Menggunakan exception
        // throw new TooManyRequestsHttpException('Terlalu banyak request');
        
        // Cara 3: Menggunakan redirect ke route
        // return redirect()->route('errors.429');
    }

    /**
     * Contoh 7: Error 503 - Layanan tidak tersedia
     */
    public function showServiceUnavailableExample()
    {
        // Cara 1: Menggunakan Inertia render langsung
        return Inertia::render('errors/503');
        
        // Cara 2: Menggunakan exception
        // throw new ServiceUnavailableHttpException('Layanan sedang dalam pemeliharaan');
        
        // Cara 3: Menggunakan redirect ke route
        // return redirect()->route('errors.503');
    }

    /**
     * Contoh 8: Generic Error dengan data kustom
     */
    public function showCustomErrorExample()
    {
        return Inertia::render('errors/GenericError', [
            'code' => '422',
            'title' => 'Data Tidak Valid',
            'description' => 'Data yang Anda masukkan tidak valid. Silakan periksa kembali.',
        ]);
    }

    /**
     * Contoh 9: Error dengan data dinamis
     */
    public function showDynamicErrorExample(Request $request)
    {
        $errorCode = $request->get('code', '404');
        $errorTitle = $request->get('title', 'Terjadi Kesalahan');
        $errorDescription = $request->get('description', 'Terjadi kesalahan yang tidak terduga.');

        return Inertia::render('errors/GenericError', [
            'code' => $errorCode,
            'title' => $errorTitle,
            'description' => $errorDescription,
        ]);
    }

    /**
     * Contoh 10: Error dalam middleware atau guard
     */
    public function showProtectedResource()
    {
        // Contoh pengecekan akses
        if (!auth()->check()) {
            // Akan otomatis redirect ke halaman 401
            abort(401, 'Anda harus login terlebih dahulu');
        }

        if (!auth()->user()->hasRole('admin')) {
            // Akan otomatis redirect ke halaman 403
            abort(403, 'Anda tidak memiliki izin untuk mengakses halaman ini');
        }

        // Jika semua pengecekan berhasil, tampilkan konten
        return Inertia::render('admin/dashboard');
    }

    /**
     * Contoh 11: Error dalam resource controller
     */
    public function show($id)
    {
        try {
            $model = Model::findOrFail($id);
            return Inertia::render('model/show', ['model' => $model]);
        } catch (ModelNotFoundException $e) {
            // Akan otomatis redirect ke halaman 404
            abort(404, 'Data tidak ditemukan');
        }
    }

    /**
     * Contoh 12: Error dengan logging
     */
    public function showErrorWithLogging()
    {
        try {
            // Kode yang mungkin error
            $result = someRiskyOperation();
            return response()->json(['success' => true, 'data' => $result]);
        } catch (\Exception $e) {
            // Log error untuk debugging
            \Log::error('Error in showErrorWithLogging: ' . $e->getMessage(), [
                'file' => $e->getFile(),
                'line' => $e->getLine(),
                'trace' => $e->getTraceAsString()
            ]);

            // Tampilkan halaman error 500
            return Inertia::render('errors/500');
        }
    }

    /**
     * Contoh 13: Error dengan rate limiting
     */
    public function showRateLimitedExample(Request $request)
    {
        // Contoh rate limiting sederhana
        $key = 'rate_limit_' . $request->ip();
        $attempts = cache()->get($key, 0);

        if ($attempts >= 5) {
            // Akan otomatis redirect ke halaman 429
            abort(429, 'Terlalu banyak request. Silakan tunggu beberapa saat.');
        }

        // Increment counter
        cache()->put($key, $attempts + 1, 60); // 1 menit

        return response()->json(['message' => 'Request berhasil']);
    }

    /**
     * Contoh 14: Error dalam maintenance mode
     */
    public function showMaintenanceExample()
    {
        // Contoh pengecekan maintenance mode
        if (app()->isDownForMaintenance()) {
            return Inertia::render('errors/503');
        }

        return Inertia::render('dashboard');
    }
}