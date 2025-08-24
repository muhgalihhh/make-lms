<?php

use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

// Error pages for testing (remove in production)
Route::prefix('errors')->name('errors.')->group(function () {
    Route::get('/404', function () {
        return Inertia::render('errors/404');
    })->name('404');

    Route::get('/403', function () {
        return Inertia::render('errors/403');
    })->name('403');

    // Test route untuk AuthorizationException
    Route::get('/403-test', function () {
        abort(403, 'Test: Anda tidak memiliki izin untuk mengakses halaman ini.');
    })->name('403-test');

    Route::get('/401', function () {
        return Inertia::render('errors/401');
    })->name('401');

    Route::get('/500', function () {
        return Inertia::render('errors/500');
    })->name('500');

    Route::get('/419', function () {
        return Inertia::render('errors/419');
    })->name('419');

    Route::get('/429', function () {
        return Inertia::render('errors/429');
    })->name('429');

    Route::get('/503', function () {
        return Inertia::render('errors/503');
    })->name('503');

    Route::get('/422', function () {
        return Inertia::render('errors/422', [
            'errors' => [
                'email' => ['Email harus valid'],
                'password' => ['Password minimal 8 karakter'],
            ]
        ]);
    })->name('422');

    Route::get('/400', function () {
        return Inertia::render('errors/400');
    })->name('400');

    Route::get('/408', function () {
        return Inertia::render('errors/408');
    })->name('408');

    Route::get('/502', function () {
        return Inertia::render('errors/502');
    })->name('502');

    Route::get('/504', function () {
        return Inertia::render('errors/504');
    })->name('504');
});
