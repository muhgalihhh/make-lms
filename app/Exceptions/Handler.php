<?php

namespace App\Exceptions;

use Illuminate\Foundation\Exceptions\Handler as ExceptionHandler;
use Illuminate\Http\Request;
use Illuminate\Session\TokenMismatchException;
use Illuminate\Validation\ValidationException;
use Illuminate\Auth\AuthenticationException;
use Illuminate\Auth\Access\AuthorizationException;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Routing\Exceptions\InvalidSignatureException;
use Symfony\Component\HttpKernel\Exception\HttpException;
use Symfony\Component\HttpKernel\Exception\NotFoundHttpException;
use Symfony\Component\HttpKernel\Exception\AccessDeniedHttpException;
use Symfony\Component\HttpKernel\Exception\TooManyRequestsHttpException;
use Symfony\Component\HttpKernel\Exception\ServiceUnavailableHttpException;
use Throwable;
use Inertia\Inertia;

class Handler extends ExceptionHandler
{
    /**
     * The list of the inputs that are never flashed to the session on validation exceptions.
     *
     * @var array<int, string>
     */
    protected $dontFlash = [
        'current_password',
        'password',
        'password_confirmation',
    ];

    /**
     * Register the exception handling callbacks for the application.
     */
    public function register(): void
    {
        $this->reportable(function (Throwable $e) {
            //
        });

        $this->renderable(function (Throwable $e, Request $request) {
            if ($request->expectsJson()) {
                return null;
            }

            // Handle different types of exceptions
            if ($e instanceof TokenMismatchException) {
                return Inertia::render('errors/419', [
                    'code' => '419',
                    'title' => 'Halaman Kadaluarsa',
                    'description' => 'Halaman yang Anda akses telah kadaluarsa. Silakan muat ulang halaman.',
                ])->toResponse($request)->setStatusCode(419);
            }

            if ($e instanceof AuthenticationException) {
                return Inertia::render('errors/401', [
                    'code' => '401',
                    'title' => 'Akses Tidak Sah',
                    'description' => 'Anda harus masuk terlebih dahulu untuk mengakses halaman ini.',
                ])->toResponse($request)->setStatusCode(401);
            }

            if ($e instanceof AuthorizationException) {
                return Inertia::render('errors/403', [
                    'code' => '403',
                    'title' => 'Akses Dilarang',
                    'description' => 'Anda tidak memiliki izin untuk mengakses halaman ini.',
                ])->toResponse($request)->setStatusCode(403);
            }

            if ($e instanceof ModelNotFoundException || $e instanceof NotFoundHttpException) {
                return Inertia::render('errors/404', [
                    'code' => '404',
                    'title' => 'Halaman Tidak Ditemukan',
                    'description' => 'Halaman yang Anda cari tidak dapat ditemukan.',
                ])->toResponse($request)->setStatusCode(404);
            }

            if ($e instanceof TooManyRequestsHttpException) {
                return Inertia::render('errors/429', [
                    'code' => '429',
                    'title' => 'Terlalu Banyak Request',
                    'description' => 'Anda telah melakukan terlalu banyak request dalam waktu singkat.',
                ])->toResponse($request)->setStatusCode(429);
            }

            if ($e instanceof ServiceUnavailableHttpException) {
                return Inertia::render('errors/503', [
                    'code' => '503',
                    'title' => 'Layanan Tidak Tersedia',
                    'description' => 'Layanan sedang dalam pemeliharaan atau tidak tersedia sementara.',
                ])->toResponse($request)->setStatusCode(503);
            }

            // Handle 500 errors
            if ($e instanceof HttpException && $e->getStatusCode() >= 500) {
                return Inertia::render('errors/500', [
                    'code' => '500',
                    'title' => 'Kesalahan Server Internal',
                    'description' => 'Terjadi kesalahan pada server kami. Tim kami sedang bekerja untuk memperbaiki masalah ini.',
                ])->toResponse($request)->setStatusCode(500);
            }

            // Handle other HTTP exceptions
            if ($e instanceof HttpException) {
                $statusCode = $e->getStatusCode();
                $title = $this->getErrorTitle($statusCode);
                $description = $this->getErrorDescription($statusCode);

                return Inertia::render('errors/GenericError', [
                    'code' => (string) $statusCode,
                    'title' => $title,
                    'description' => $description,
                ])->toResponse($request)->setStatusCode($statusCode);
            }

            return null;
        });
    }

    /**
     * Get error title based on status code
     */
    private function getErrorTitle(int $statusCode): string
    {
        return match ($statusCode) {
            400 => 'Permintaan Buruk',
            401 => 'Akses Tidak Sah',
            402 => 'Pembayaran Diperlukan',
            403 => 'Akses Dilarang',
            404 => 'Halaman Tidak Ditemukan',
            405 => 'Metode Tidak Diizinkan',
            406 => 'Tidak Dapat Diterima',
            407 => 'Autentikasi Proxy Diperlukan',
            408 => 'Permintaan Timeout',
            409 => 'Konflik',
            410 => 'Hilang',
            411 => 'Panjang Diperlukan',
            412 => 'Prasyarat Gagal',
            413 => 'Payload Terlalu Besar',
            414 => 'URI Terlalu Panjang',
            415 => 'Tipe Media Tidak Didukung',
            416 => 'Rentang Tidak Memuaskan',
            417 => 'Ekspektasi Gagal',
            418 => 'Saya adalah Teapot',
            421 => 'Permintaan Salah Arah',
            422 => 'Entitas Tidak Dapat Diproses',
            423 => 'Terkunci',
            424 => 'Ketergantungan Gagal',
            425 => 'Terlalu Dini',
            426 => 'Upgrade Diperlukan',
            428 => 'Prasyarat Diperlukan',
            429 => 'Terlalu Banyak Request',
            431 => 'Header Permintaan Terlalu Besar',
            451 => 'Tidak Tersedia Karena Alasan Hukum',
            500 => 'Kesalahan Server Internal',
            501 => 'Tidak Diimplementasikan',
            502 => 'Gateway Buruk',
            503 => 'Layanan Tidak Tersedia',
            504 => 'Gateway Timeout',
            505 => 'Versi HTTP Tidak Didukung',
            506 => 'Varian Juga Bernegosiasi',
            507 => 'Penyimpanan Tidak Cukup',
            508 => 'Loop Terdeteksi',
            510 => 'Tidak Diperluas',
            511 => 'Autentikasi Jaringan Diperlukan',
            default => 'Terjadi Kesalahan',
        };
    }

    /**
     * Get error description based on status code
     */
    private function getErrorDescription(int $statusCode): string
    {
        return match ($statusCode) {
            400 => 'Permintaan yang Anda kirim tidak valid atau tidak dapat diproses oleh server.',
            401 => 'Anda harus masuk terlebih dahulu untuk mengakses halaman ini.',
            402 => 'Pembayaran diperlukan untuk mengakses layanan ini.',
            403 => 'Anda tidak memiliki izin untuk mengakses halaman ini.',
            404 => 'Halaman yang Anda cari tidak dapat ditemukan.',
            405 => 'Metode HTTP yang digunakan tidak diizinkan untuk endpoint ini.',
            406 => 'Server tidak dapat menghasilkan respons yang sesuai dengan header Accept.',
            407 => 'Autentikasi proxy diperlukan untuk mengakses layanan ini.',
            408 => 'Server mengalami timeout saat menunggu permintaan dari klien.',
            409 => 'Permintaan tidak dapat diselesaikan karena konflik dengan status saat ini.',
            410 => 'Resource yang diminta tidak lagi tersedia di server.',
            411 => 'Server memerlukan header Content-Length untuk permintaan ini.',
            412 => 'Prasyarat yang ditentukan dalam header tidak terpenuhi.',
            413 => 'Payload permintaan terlalu besar untuk diproses oleh server.',
            414 => 'URI permintaan terlalu panjang untuk diproses oleh server.',
            415 => 'Tipe media yang digunakan tidak didukung oleh server.',
            416 => 'Rentang yang diminta tidak dapat dipenuhi.',
            417 => 'Server tidak dapat memenuhi ekspektasi yang ditentukan dalam header Expect.',
            418 => 'Server adalah teapot dan tidak dapat menyeduh kopi.',
            421 => 'Permintaan salah arah dan tidak dapat diproses.',
            422 => 'Entitas permintaan tidak dapat diproses karena kesalahan semantik.',
            423 => 'Resource yang diminta terkunci.',
            424 => 'Permintaan gagal karena ketergantungan pada permintaan lain.',
            425 => 'Server tidak ingin memproses permintaan yang terlalu dini.',
            426 => 'Upgrade protokol diperlukan untuk melanjutkan.',
            428 => 'Prasyarat diperlukan untuk memproses permintaan.',
            429 => 'Anda telah melakukan terlalu banyak request dalam waktu singkat.',
            431 => 'Header permintaan terlalu besar untuk diproses oleh server.',
            451 => 'Resource tidak tersedia karena alasan hukum.',
            500 => 'Terjadi kesalahan internal pada server. Tim kami sedang bekerja untuk memperbaiki masalah ini.',
            501 => 'Server tidak mendukung fungsionalitas yang diperlukan untuk memenuhi permintaan.',
            502 => 'Server menerima respons yang tidak valid dari server upstream.',
            503 => 'Layanan sedang dalam pemeliharaan atau tidak tersedia sementara.',
            504 => 'Server upstream tidak memberikan respons dalam waktu yang ditentukan.',
            505 => 'Versi protokol HTTP yang digunakan tidak didukung oleh server.',
            506 => 'Server mengalami konflik dalam negosiasi konten.',
            507 => 'Server tidak dapat menyimpan representasi yang diperlukan untuk menyelesaikan permintaan.',
            508 => 'Server mendeteksi loop tak terbatas saat memproses permintaan.',
            510 => 'Server tidak mendukung ekstensi yang diperlukan untuk memenuhi permintaan.',
            511 => 'Autentikasi jaringan diperlukan untuk mengakses layanan ini.',
            default => 'Terjadi kesalahan yang tidak terduga. Silakan coba lagi atau hubungi administrator.',
        };
    }
}